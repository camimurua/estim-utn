// spinner.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private _spinnerService: SpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._spinnerService.show(); // Mostrar spinner antes de la solicitud


    return next.handle(req).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
           
            setTimeout(() => {
                this._spinnerService.hide(); // Ocultar spinner después de la respuesta
                
            }, 1000);
          }
        },
        error: (error) => {
          this._spinnerService.hide(); // Ocultar spinner si hay un error
        },
      })
    );

  }
}