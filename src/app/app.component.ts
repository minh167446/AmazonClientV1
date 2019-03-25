import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Amazon';
  searchTerm = '';
  isCollpased = true;

  constructor(private router: Router, private data: DataService) {
    this.data.getProfile();
    this.data.cartItems = this.data.getCart().length;
  }

  get Token() {
    return localStorage.getItem('token');
  }

  collpase() {
    this.isCollpased = true;
  }

  closeDropdown(dropdown) {
    dropdown.close();
  }

  logout() {
    this.data.user = {};
    this.data.cartItems = 0;
    localStorage.clear();
    this.router.navigate(['/']);
  }

  search() {
  if(this.searchTerm) {
    this.collpase();
    this.router.navigate(['search', { query: this.searchTerm }]);
  }
  }
}
