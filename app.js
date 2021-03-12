// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// CORS
fastify.register(require('fastify-cors'), { 
  origin: "*"
})

// Declare a route
fastify.get('/', async (request, reply) => {
  const dt = new Date().toISOString()
  return { message: `Time is: ${dt}` }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, "0.0.0.0")
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()