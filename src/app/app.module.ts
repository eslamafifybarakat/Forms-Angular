import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ReactiveFormFormBuliderComponent } from './components/reactive-form-form-bulider/reactive-form-form-bulider.component';
import { ReactiveFormAdvancedWayComponent } from './components/reactive-form-advanced-way/reactive-form-advanced-way.component';
import { AsyncValidatorComponent } from './components/async-validator/async-validator.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    ReactiveFormFormBuliderComponent,
    ReactiveFormAdvancedWayComponent,
    AsyncValidatorComponent,
    DynamicFormComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
