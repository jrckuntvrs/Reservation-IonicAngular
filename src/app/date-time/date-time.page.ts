import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  goBack() {
    this.router.navigate(['/menu']);
  }

  addevent1() {
    this.router.navigate(['/forms']);
  }

  addevent2() {
    this.router.navigate(['/baptismform']);
  }

  addevent3() {
    this.router.navigate(['/serviceform']);
  }

  addevent4() {
    this.router.navigate(['/blessingform']);
  }

  addevent5() {
    this.router.navigate(['/birthdayform']);
  }
}
