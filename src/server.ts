import fastify from 'fastify'

const app = fastify()


app.listen(4000, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`\
  🚀 Server ready at: http://localhost:4000/graphiql
  ⭐️ See sample queries: http://pris.ly/e/ts/graphql-fastify#using-the-graphql-api
  `)
})
