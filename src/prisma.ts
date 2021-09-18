import { PrismaClient } from "@prisma/client"
import { FastifyPluginCallback } from "fastify"
const prisma: PrismaClient = new PrismaClient()

export default prisma
