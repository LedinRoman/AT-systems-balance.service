import Redis from "ioredis";

export class RedisClient {

    static redisClient: Redis;

    static init() {
        this.redisClient = new Redis('redis://redis:6379')
    }

}

