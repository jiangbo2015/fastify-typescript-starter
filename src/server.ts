import fastify from "fastify"
import cors from "fastify-cors"
import jwt from "fastify-jwt"
import swagger from "fastify-swagger"
import autoload from "fastify-autoload"
import path from "path"

const app = fastify({
  // logger: true,
})

app
  // .register(pris)
  .register(cors, { origin: true })
  .register(jwt, {
    secret: "my-secret",
  })
  .register(swagger, {
    exposeRoute: true,
  })
  .register(autoload, {
    dir: path.join(__dirname, "routes"),
    options: {
      prefix: "/api",
    },
  })

console.log("start")

app.listen(4000, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`\
  🚀 Server ready at: http://localhost:4000
  `)
})
