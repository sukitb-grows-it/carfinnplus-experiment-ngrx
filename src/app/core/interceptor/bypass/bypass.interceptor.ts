import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BypassInterceptor implements HttpInterceptor {
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        const bypassToken = 'WEW9ZUB64GDWD7Y4HN7CEP9YJ49L8LKZ7ZJT6Q2AEAKJWIUE'
        const bypassReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${bypassToken}`)
        })
        return next.handle(bypassReq);
    }
}
