import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { ViewInvoiceComponent } from './components/view-invoice/view-invoice.component';
import { UpdateInvoiceComponent } from './components/update-invoice/update-invoice.component';
import { CreateInvoiceComponent } from './components/create-invoice/create-invoice.component';
import { AuthGuard } from './auth.guard';
import { AuthRoleGuard } from './auth-role.guard';
import { AuthAdminRoleGuard } from './auth-admin-role.guard';
import { AuthSuperRoleGuard } from './auth-super-role.guard';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
    children: [
      {
        path: 'viewInvoice',
        component: ViewInvoiceComponent,
        canActivate: [AuthRoleGuard],
      },
      {
        path: 'updateInvoice',
        component: UpdateInvoiceComponent,
        canActivate: [AuthAdminRoleGuard],
      },
      {
        path: 'createInvoice',
        component: CreateInvoiceComponent,
        canActivate: [AuthSuperRoleGuard],
      },
    ],
  },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [
  LoginComponent,
  Error404Component,
  HomeComponent,
  ViewInvoiceComponent,
  UpdateInvoiceComponent,
  CreateInvoiceComponent,
];
