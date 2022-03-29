import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  role: any;
  constructor(private route: Router) {}

  ngOnInit(): void {
    const info = <string>localStorage.getItem('log');

    this.role = JSON.parse(info).role;
  }
  logOut() {
    localStorage.removeItem('log');
    this.route.navigate(['/login']);
  }
}
