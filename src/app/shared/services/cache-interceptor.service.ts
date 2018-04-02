import Cache from "../cache/Cache";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
    constructor(private cache: Cache) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).map((event:any) => {
            if (req.method === "GET" && event instanceof HttpResponse) {
                this.cache.insert<any>(req.urlWithParams, JSON.parse(event.body))
            }
            return event;
        });
    }
}