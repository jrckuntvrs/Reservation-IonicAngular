import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('userID') != null) {
      this.router.navigate(['/menu']);
    }
  }
  login() {
    this.router.navigate(['login']);
  }
  register() {
    this.router.navigate(['register']);
  }
}
