import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-head',
  templateUrl: './head.page.html',
  styleUrls: ['./head.page.scss'],
})
export class HeadPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  goBack() {
    this.router.navigate(['/menu']);
  }

  join1() {
    this.router.navigate(['/worhip']);
  }

  join2() {
    this.router.navigate(['/chosen']);
  }

  join3() {
    this.router.navigate(['/selah']);
  }
}
