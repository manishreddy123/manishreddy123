import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Ec2InstanceServiceBase } from "./base/ec2Instance.service.base";

@Injectable()
export class Ec2InstanceService extends Ec2InstanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
