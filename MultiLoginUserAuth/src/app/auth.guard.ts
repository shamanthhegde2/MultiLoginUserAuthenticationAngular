import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsersService } from './services/users.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UsersService, private route: Router) {}
  canActivate(): boolean {
    if (this.userService.loggedIn()) {
      return true;
    } else {
      this.route.navigate(['/login']);
    }
    return false;
  }
}
