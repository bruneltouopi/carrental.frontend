import CacheItem from "./CacheItem";
import { Injectable } from "@angular/core";

@Injectable()
export default class CacheService {
    private expirationTime: number;
    private static items: Map<string, CacheItem<any>> = new Map<string,any>();

    constructor() {
        this.expirationTime = 60000;
    }

    public find<T>(key: string): T | undefined {
        if(!CacheService.items.has(key)) return undefined;

        let item = CacheService.items.get(key) as CacheItem<T>;
        
        if(!item.hasExpired) return item.value;

        CacheService.items.delete(key);
        return undefined;
    }

    public insert<T>(key: string, value: T): void {
        let cacheItem = new CacheItem<T>(value, this.expirationTime);
        CacheService.items.set(key, cacheItem);
    }
}