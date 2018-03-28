import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export default abstract class BaseService<T> {
    protected apiUrl: string;

    constructor(protected http: HttpClient, resource: string) {
        this.apiUrl = `${environment.apiUrl}${resource}/`;
    }

    get<U>() : Observable<U>;
    get() : Observable<T[]>;
    get<U>(): Observable<U | T[]> {
        return this.http.get<U | T[]>(this.apiUrl);
    }
    
    getById(id: number) : Observable<T> {
        return this.http.get<T>(`${this.apiUrl}/${id}`);
    }

    getAbsolute<T>(url: string) : Observable<T>;
    getAbsolute(url: string) : Observable<T> {
        return this.http.get<T>(url);
    }

    post(data: T) : Observable<T> {
        return this.http.post<T>(this.apiUrl, JSON.stringify(data));
    }

    put(data: T): Observable<T> {
        return this.http.put<T>(this.apiUrl, JSON.stringify(data));
    }

    delete(id: number) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}