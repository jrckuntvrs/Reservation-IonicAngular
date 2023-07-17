import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blessingform',
  templateUrl: './blessingform.page.html',
  styleUrls: ['./blessingform.page.scss'],
})
export class BlessingformPage implements OnInit {
  [x: string]: any;
  fullname: string = '';
  address: string = '';
  contact: boolean = false;
  venue: string = '';
  date: string = '';
  time: string = '';
  pastors: string = '';

  constructor() {}

  ngOnInit() {}
  cancel3() {
    this['router'].navigate(['/date-time']);
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
