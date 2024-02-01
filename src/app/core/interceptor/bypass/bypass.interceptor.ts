import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BypassInterceptor implements HttpInterceptor {
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        const bypassToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiRU1QLTAwMDAiLCJhY2NvdW50X3JvbGUiOiJTdXBlciBBZG1pbiIsImxvZ2luX2RhdGUiOiIyMDI0LTAxLTE5VDE0OjUwOjI5LjMzN1oiLCJpYXQiOjE3MDU2NzU4MjksImV4cCI6MTcwODI2NzgyOX0.10IJwjUfy3IhBJX5DHZJ3z-DRM9Yty4X0i35nbbiInA'
        const bypassReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${bypassToken}`)
        })
        return next.handle(bypassReq);
    }
}
