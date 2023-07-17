import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isAlertOpen = false;
  public alertButtons = ['OK'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  email: string = '';
  password: string = '';

  constructor(private router: Router, private database: DatabaseService) {}

  ngOnInit() {
    if (localStorage.getItem('userID') != null) {
      this.router.navigate(['/menu']);
    }
  }

  submitLogin() {
    console.log(this.email, this.password);
    for (let i = 0; i < this.database.users.length; i++) {
      if (
        this.email == this.database.users[i].email &&
        this.password == this.database.users[i].password
      ) {
        localStorage.setItem('userID', this.database.users[i].userID);
        this.router.navigate(['/menu']);
      }
    }
  }

  goBack() {
    this.router.navigate(['/landing']);
  }
}
