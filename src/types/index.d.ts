import * as fastify from "fastify";
import { PrismaClient } from '@prisma/client'

declare module "fastify" {
  
  export interface FastifyRequest {
    prisma: PrismaClient
  }
}