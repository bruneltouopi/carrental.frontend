import CacheItem from "./CacheItem";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export default class CacheService {
    private expirationTime: number;
    private static items: Map<string, CacheItem<any>> = new Map<string,any>();

    constructor() {
        this.expirationTime = 60000;
    }

    public find<T>(key: string): Observable<T> | undefined {
        if(!CacheService.items.has(key)) return undefined;

        let item = CacheService.items.get(key) as CacheItem<T>;

        if(!item.hasExpired) return Observable.create((observer) =>{
            observer.next(item.value);
            observer.complete();
        });

        CacheService.items.delete(key);
        return undefined;
    }

    public insert<T>(key: string, value: T): void {
        let cacheItem = new CacheItem<T>(value, this.expirationTime);
        CacheService.items.set(key, cacheItem);
    }

    public cache<T>(url: string, func:() => Observable<T>): Observable<T> {
        let result = this.find<T>(url);

        if(result === undefined) {
            result = func();

            let sub = result.subscribe(r => {
                this.insert(url, r);
                sub.unsubscribe();
            });
        }

        return result;
    }
}