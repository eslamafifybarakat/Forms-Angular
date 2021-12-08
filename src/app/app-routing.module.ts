import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ReactiveFormFormBuliderComponent } from './components/reactive-form-form-bulider/reactive-form-form-bulider.component';
import { ReactiveFormAdvancedWayComponent } from './components/reactive-form-advanced-way/reactive-form-advanced-way.component';
import { AsyncValidatorComponent } from './components/async-validator/async-validator.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
  },
  {
    path: 'reactiveForms',
    component: ReactiveFormsComponent,
  },
  {
    path: 'reactiveFormFormBulider',
    component: ReactiveFormFormBuliderComponent,
  },
  {
    path: 'reactiveFormAdvancedWay',
    component: ReactiveFormAdvancedWayComponent,
  },
  {
    path: 'asyncValidator',
    component: AsyncValidatorComponent,
  },
  {
    path: 'dynamicForm',
    component: DynamicFormComponent,
  },
  {
    path: 'templateForm',
    component: TemplateFormsComponent,
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
