import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  fullname: string = '';
  address: string = '';
  contactNumber: boolean = false;
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router, private database: DatabaseService) {}

  ngOnInit() {
    if (localStorage.getItem('userID') != null) {
      this.router.navigate(['/menu']);
    }
  }

  submitRegister() {
    if (this.password == this.confirmPassword) {
      const min = 10000; // Minimum 5-digit number (inclusive)
      const max = 99999; // Maximum 5-digit number (inclusive)
      const randomNumber: number =
        Math.floor(Math.random() * (max - min + 1)) + min;
      let user = {
        userID: randomNumber,
        fullName: this.fullname,
        address: this.address,
        contactNumber: this.contactNumber,
        email: this.email,
        password: this.password,
      };
      this.database.users.push(user);
      this.router.navigate(['/login']);
    }
  }

  goBack() {
    this.router.navigate(['/landing']);
  }
}
