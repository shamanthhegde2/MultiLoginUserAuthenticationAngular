import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../../User';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private route: Router,
    private acRoute: ActivatedRoute
  ) {}
  loginForm!: any;
  users!: User[];
  show: boolean = true;
  ngOnInit(): void {
    if (this.usersService.loggedIn()) {
      this.route.navigate(['/home']);
    }
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
    this.usersService.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => console.log('oops', error)
    );
  }
  submitForm() {
    console.log(this.loginForm.value.email);
    const loginSuccess: any = this.users.find((user) => {
      return (
        user.email == this.loginForm.value.email &&
        user.password == this.loginForm.value.password
      );
    });
    if (loginSuccess) {
      localStorage.setItem('log', JSON.stringify(loginSuccess));
      this.route.navigate(['/home']);
    } else {
      this.show = false;
    }
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
