import { Injectable } from '@angular/core';
import { 
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
 } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService  implements CanActivate {

  constructor(private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(localStorage.getItem('token')) {
      return false;
    } else {
      return true;
    }
  }

}
