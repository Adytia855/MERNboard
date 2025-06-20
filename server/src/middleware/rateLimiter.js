import ratelimit from "../config/upstash.js"

/**
 * @function rateLimiter
 * @description Express middleware for rate limiting API requests using Upstash Ratelimit.
 * It applies a general rate limit identified by "my-rate-limit".
 * OPTIONS requests are bypassed.
 * If the rate limit is exceeded, it responds with a 429 status code.
 * Errors during the rate limiting process are logged and passed to the next error-handling middleware.
 * @async
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The Express next middleware function.
 * @returns {Promise<void>} A promise that resolves when the request is processed, or calls `next()` or `res.status().json()`.
 */
const rateLimiter = async (req, res, next) => {
  try {
    // Bypass rate limiting for OPTIONS requests (often used for CORS preflight)
    if (req.method === "OPTIONS") return next();

    // Attempt to apply the rate limit.
    // "my-rate-limit" is a generic identifier for this particular limit.
    // For more granular control, you might use user ID, IP address, or API key as the identifier.
    const {success} = await ratelimit.limit("my-rate-limit")

    if(!success){
      // If the rate limit is exceeded (success is false), send a 429 Too Many Requests response.
      return res.status(429).json({
        message: "Too many requests, please try again later"
      })
    }
    // If the request is within the limit, proceed to the next middleware or route handler.
    next()
  } catch (error) {
    // Log any errors that occur during the rate limiting process.
    console.log('Rate limit error', error);
    // Pass the error to the next error-handling middleware.
    next(error)
  }
}

export default rateLimiter
