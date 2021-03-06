/**
 * Created by isa on 03/10/16.
 */

import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2/angularfire2';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'login-status',
  template: `
        <nav class="mdl-navigation">
            <a *ngIf="af.auth | async" class="mdl-navigation__link" [routerLink]="['/timeline-manager']">Timeline Manager</a>
            <a *ngIf="af.auth | async" class="mdl-navigation__link" (click)="logout()">Logout</a>
            <a *ngIf="!(af.auth | async)" class="mdl-navigation__link" [routerLink]="['/login']">Login</a>
        </nav>
    `
})

export class LoginStatusComponent {

  constructor(public af: AngularFire, private userService: UserService, private router: Router) {
    this.af.auth.subscribe(auth => console.log(auth));
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
