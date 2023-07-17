import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
goBack() {
  this.router.navigate(['/menu']);
}

backMenu() {
  this.router.navigate(['/menu']); // Replace '/menu' with the path of your menu component
}
}
