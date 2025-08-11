import Fastify from "fastify";
import config from "./config";

const fastify = Fastify({
  logger: true,
});

// Health check endpoint
fastify.get("/health", async (request, reply) => {
  return { status: "ok", timestamp: new Date().toISOString() };
});

// Ping pong endpoint
fastify.get("/ping", async (request, reply) => {
  return { message: "pong" };
});

// Start server
const start = async () => {
  try {
    await fastify.listen({ port: config.PORT, host: "0.0.0.0" });
    console.log("Server listening on http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
