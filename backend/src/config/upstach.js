import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'
import 'dotenv/config';

const ratelimit = new Ratelimit({
   redis:Redis.fromEnv(),
   limiter: Ratelimit.slidingWindow(100, "1 m"), // 100 requests per minute
}); 

export default ratelimit;
