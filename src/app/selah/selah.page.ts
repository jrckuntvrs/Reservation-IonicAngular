import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-selah',
  templateUrl: './selah.page.html',
  styleUrls: ['./selah.page.scss'],
})
export class SelahPage implements OnInit {
  constructor(private router: Router) {}

  fullname: string = '';
  address: string = '';
  contact: boolean = false;
  why: string = '';

  ngOnInit() {}
  goBack() {
    this.router.navigate(['/head']);
  }
  cancel() {
    this.router.navigate(['/head']);
  }
  submit() {
    console.log(this.fullname);
    console.log(this.address);
    console.log(this.contact);
    console.log(this.why);
  }
}
