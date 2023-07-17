import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  constructor(private router: Router) {}

  next() {
    this.router.navigate(['/login']);
  }

  logout() {
    localStorage.clear();

    this.router.navigateByUrl('/landing');
  }
  ngOnInit() {
    if (localStorage.getItem('userID') == null) {
      this.router.navigate(['/landing']);
    }
  }
}
