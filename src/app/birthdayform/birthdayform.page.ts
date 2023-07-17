import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthdayform',
  templateUrl: './birthdayform.page.html',
  styleUrls: ['./birthdayform.page.scss'],
})
export class BirthdayformPage implements OnInit {
  fullname: string = '';
  address: string = '';
  contact: boolean = false;
  venue: string = '';
  date: string = '';
  time: string = '';
  pastors: string = '';

  constructor() {}

  ngOnInit() {}
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
