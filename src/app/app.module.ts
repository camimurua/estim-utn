import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HighLigthDirective } from './core/directives/high-ligth.directive';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SpinnerInterceptor } from './interceptors/spinner';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
@NgModule({
  declarations: [AppComponent, HighLigthDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CommonModule,
    HttpClientModule,
    SpinnerComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
