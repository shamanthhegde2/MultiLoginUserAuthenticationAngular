import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthRoleGuard implements CanActivate {
  canActivate(): boolean {
    const info = <string>localStorage.getItem('log');
    if (
      JSON.parse(info).role == 'User' ||
      JSON.parse(info).role == 'Admin' ||
      JSON.parse(info).role == 'SuperAdmin'
    ) {
      return true;
    }
    return false;
  }
}
