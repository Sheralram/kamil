import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { ToastrModule } from 'ngx-toastr';

import { NgxLoadingModule } from 'ngx-loading';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
 
    HttpClientModule,
   
    NgxLoadingModule.forRoot({}),
  
   
    NgMultiSelectDropDownModule.forRoot()
    // ToastrModule.forRoot(),
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
   
    HttpClientModule,
  
    NgxLoadingModule,
    NgMultiSelectDropDownModule
    // ToastrModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
