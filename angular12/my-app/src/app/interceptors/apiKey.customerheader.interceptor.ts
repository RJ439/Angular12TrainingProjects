import { Injectable } from "@angular/core";
import { HttpRequest, HttpEvent, HttpInterceptor, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable() 

export class ApiKeyCustomerHeaderInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Intercepted calls")
        //clone the request
        //
        const reqClone = request.clone({
            headers: request.headers.set('apiKey', 'angular12')
        })

        return next.handle(reqClone);
    }
}