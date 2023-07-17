import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {
  constructor(private router: Router) {}

  fullname: string = '';
  address: string = '';
  contact: boolean = false;
  venue: string = '';
  date: string = '';
  time: string = '';
  pastors: string = '';

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
