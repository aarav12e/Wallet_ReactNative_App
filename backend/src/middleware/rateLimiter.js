import ratelimit from '../config/upstach.js';

const rateLimiter = async (req, res, next) => {
   try {
    const { success } = await ratelimit.limit("my-rate-limit");

    if (!success) {
      return res.status(429).json({ message: "Too many requests, please try again later." });
    }

    next();
    
   } catch (error) {
    console.log("Rate limiting error", error);
    next(error);
    
   }
};

export default rateLimiter;