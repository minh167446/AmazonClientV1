import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name ='';
  email='';
  password='';
  password1='';
  isSeller = false;

  btnDisabled = false;
  constructor(private router: Router, private data: DataService, private rest: RestApiService) { }

  ngOnInit() {
  
  }

  validate() {
    if(this.name) {
      if(this.email) {
        if(this.password) {
          if(this.password1) {
            if(this.password == this.password1) {
              return true;
            } else {
               this.data.error('Password do not match'); 
            } 
          } else {
            this.data.error('Confirm password!');
          }
        } else {
          this.data.error('Enter password!');
        }
      } else {
        this.data.error('Enter email!');
      }
    } else {
      this.data.error('Enter name!');
    }
  }

  async register() {
    this.btnDisabled = true;
    try {
      if(this.validate()) {
        const data = await this.rest.post(
          'http://localhost:3030/api/accounts/signup', 
          {
            name: this.name,
            email: this.email,
            password: this.password,
            isSeller: this.isSeller
          }
        );
        if(data['success']) {
          localStorage.setItem('token', data['token']);
          await this.data.getProfile();
          this.router.navigate(['profile/address'])
          .then(() => {
            this.data.success('Registration Successful! Please enter your shipping address bellow.');
          }).catch(error => this.data.error(error));
        } else {
          this.data.error(data['message']);
        }
      }
    } catch (error) {
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }
}
