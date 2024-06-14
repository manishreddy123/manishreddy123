import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { Ec2InstanceController } from "../ec2Instance.controller";
import { Ec2InstanceService } from "../ec2Instance.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  availabilityZone: "exampleAvailabilityZone",
  createdAt: new Date(),
  id: "exampleId",
  instanceId: "exampleInstanceId",
  instanceType: "exampleInstanceType",
  launchTime: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  availabilityZone: "exampleAvailabilityZone",
  createdAt: new Date(),
  id: "exampleId",
  instanceId: "exampleInstanceId",
  instanceType: "exampleInstanceType",
  launchTime: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    availabilityZone: "exampleAvailabilityZone",
    createdAt: new Date(),
    id: "exampleId",
    instanceId: "exampleInstanceId",
    instanceType: "exampleInstanceType",
    launchTime: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  availabilityZone: "exampleAvailabilityZone",
  createdAt: new Date(),
  id: "exampleId",
  instanceId: "exampleInstanceId",
  instanceType: "exampleInstanceType",
  launchTime: new Date(),
  updatedAt: new Date(),
};

const service = {
  createEc2Instance() {
    return CREATE_RESULT;
  },
  ec2Instances: () => FIND_MANY_RESULT,
  ec2Instance: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Ec2Instance", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: Ec2InstanceService,
          useValue: service,
        },
      ],
      controllers: [Ec2InstanceController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /ec2Instances", async () => {
    await request(app.getHttpServer())
      .post("/ec2Instances")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        launchTime: CREATE_RESULT.launchTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /ec2Instances", async () => {
    await request(app.getHttpServer())
      .get("/ec2Instances")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          launchTime: FIND_MANY_RESULT[0].launchTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /ec2Instances/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ec2Instances"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /ec2Instances/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ec2Instances"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        launchTime: FIND_ONE_RESULT.launchTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /ec2Instances existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/ec2Instances")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        launchTime: CREATE_RESULT.launchTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/ec2Instances")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
