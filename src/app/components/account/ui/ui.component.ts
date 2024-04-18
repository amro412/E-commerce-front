import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [LoginComponent, SignupComponent, ToggleComponent, CommonModule,RouterOutlet],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css'
})
export class UiComponent {

  constructor(private router: Router) { }
  
  redirectTosignup() {
    this.router.navigate(['/signup']);
  }

  redirectTologin() {
    this.router.navigate(['/login']);
  }

  showSignup: boolean = true;

  onToggleChange(isLogin: boolean) {
    this.showSignup = !isLogin;
  }
}
