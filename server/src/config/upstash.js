import {Ratelimit} from '@upstash/ratelimit';
import {Redis} from '@upstash/redis';

import dotenv from "dotenv"

// Load environment variables from a .env file into process.env
dotenv.config()

/**
 * @constant ratelimit
 * @description An instance of the Upstash Ratelimit.
 * This rate limiter is configured to use Redis for storing rate limit data.
 * The Redis connection details are expected to be provided via environment variables,
 * as specified by `Redis.fromEnv()`.
 *
 * The limiter uses a sliding window algorithm, allowing a maximum of 100 requests
 * within a 60-second window.
 *
 * This instance is exported as the default export of this module.
 *
 * @type {Ratelimit}
 * @example
 * // To use this ratelimiter in another file:
 * import ratelimit from './path/to/this/file';
 *
 * async function handleRequest(identifier) {
 *   const { success } = await ratelimit.limit(identifier);
 *   if (!success) {
 *     throw new Error("Rate limit exceeded");
 *   }
 *   // Proceed with the request
 * }
 */
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100,"60 s"),
});

export default ratelimit;
