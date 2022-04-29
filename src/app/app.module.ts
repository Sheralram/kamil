import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { CommonModule  } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
//import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerModule } from "ngx-bootstrap-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { NgxEchartsModule } from 'ngx-echarts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ChartPageComponent } from './landing-page/chart-page/chart-page.component';
import { AuthComponent } from './auth/auth.component';
// import { NgxSpinnerModule } from 'ngx-spinner';
//import { ToastrModule } from 'ngx-toastr';
import { service } from '../app/core/services/index';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    ChartPageComponent,
    AuthComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ToastrModule,
  
   // NgxSpinnerModule,
   // NgxSpinnerModule,
  
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
   
    ToastrModule.forRoot(), // ToastrModule added
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    NgbModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [...service],
  bootstrap: [AppComponent]
})
export class AppModule { }
