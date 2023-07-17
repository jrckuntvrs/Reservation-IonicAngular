import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baptismform',
  templateUrl: './baptismform.page.html',
  styleUrls: ['./baptismform.page.scss'],
})
export class BaptismformPage implements OnInit {
  router: any;
  fullname: string = '';
  address: string = '';
  contact: boolean = false;
  venue: string = '';
  date: string = '';
  time: string = '';
  pastors: string = '';

  constructor() {}

  ngOnInit() {}
  goBack() {
    this.router.navigate(['/date-time']);
  }
  cancel() {
    this.router.navigate(['/date-time']);
  }
  submit() {
    console.log(this.fullname);
    console.log(this.address);
    console.log(this.contact);
    console.log(this.venue);
    console.log(this.date);
    console.log(this.time);
    console.log(this.pastors);
  }
}
