import { FastifyPluginCallback, FastifySchema } from "fastify"

import { Static, Type } from "@sinclair/typebox"
import prisma from "../prisma"

const User = Type.Object({
  name: Type.String(),
  mail: Type.Optional(Type.String({ format: "email" })),
})

const UserParams = Type.Object({
  title: Type.String(),
})

type UserType = Static<typeof User>

const Tags: FastifySchema["tags"] = ["User"]

const postRoutes: FastifyPluginCallback = (fastify, opts, done) => {
  fastify
    .post<{ Body: UserType }>(
      "/add",
      {
        schema: {
          tags: Tags,
          body: User,
          querystring: UserParams,
          response: {
            200: {},
          },
        },
      },
      (res, reply) => {
        prisma.user.findMany()
        reply.send("good")
      }
    )
    .post("/delete", (res, reply) => {
      reply.send("good")
    })
    .post("/update", (res, reply) => {
      reply.send("good")
    })
    .get<{ Querystring: UserType }>(
      "/list",
      {
        schema: {
          tags: Tags,
          querystring: UserParams,
        },
      },
      (res, reply) => {
        reply.send("good")
      }
    )
  done()
}

export const autoPrefix = "/user"

export default postRoutes
