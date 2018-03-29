export default class CacheItem<T> {
    private item: T;
    private expirtyTime: Date;

    constructor(item: T, expiresIn: number) {
        this.item = item;

        let now = new Date();
        this.expirtyTime = new Date(now.getTime() + expiresIn * 60000);
    }

    public get hasExpired(): boolean {
        let now = new Date();
        return this.expirtyTime <= now;
    }

    public get value(): T {
        return this.item;
    }
}