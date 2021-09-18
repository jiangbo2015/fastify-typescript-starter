import { PrismaClient } from "@prisma/client"
const prisma: PrismaClient = new PrismaClient()

// prisma.$on("beforeExit", async () => {
//   console.log("beforeExit hook")
//   //   need call exit here, see more https://github.com/prisma/prisma/issues/7148
//   process.exit()
// })

export default prisma
