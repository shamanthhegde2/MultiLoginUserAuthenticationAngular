import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AuthRoleGuard } from './auth-role.guard';
import { AuthAdminRoleGuard } from './auth-admin-role.guard';
import { AuthSuperRoleGuard } from './auth-super-role.guard';
@NgModule({
  declarations: [AppComponent, ...RoutingComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthGuard, AuthRoleGuard, AuthAdminRoleGuard, AuthSuperRoleGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
