import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Cache from '../cache/Cache';
import 'rxjs/add/operator/map';

export default abstract class BaseService<T> {
    protected apiUrl: string;

    constructor(protected http: HttpClient, resource: string) {
        this.apiUrl = `${environment.apiUrl}${resource}/`;
    }

    get<U>(refresh?: boolean): Observable<U>;
    get(refresh?: boolean): Observable<T[]>;
    get<U>(refresh: boolean = false): Observable<U | T[]> {
        return this.http.get<U | T[]>(this.apiUrl);
    }

    getById(id: number): Observable<T> {
        let url = `${this.apiUrl}/${id}`;
        return this.http.get<T>(url);
    }

    getAbsolute<T>(url: string): Observable<T>;
    getAbsolute(url: string): Observable<T> {
        return this.http.get<T>(url);
    }

    post(data: T): Observable<T> {
        return this.http.post<T>(this.apiUrl, JSON.stringify(data));
    }

    put(id: number, data: T): Observable<T> {
        return this.http.put<T>(`${this.apiUrl}/${id}`, data);
    }

    delete(id: number) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}