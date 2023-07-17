import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serviceform',
  templateUrl: './serviceform.page.html',
  styleUrls: ['./serviceform.page.scss'],
})
export class ServiceformPage implements OnInit {
  fullname: string = '';
  address: string = '';
  contact: boolean = false;
  venue: string = '';
  date: string = '';
  time: string = '';
  pastors: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  back() {
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
