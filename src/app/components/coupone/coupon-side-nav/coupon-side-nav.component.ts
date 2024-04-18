import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-coupon-side-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule, RouterOutlet,NavbarComponent],
  templateUrl: './coupon-side-nav.component.html',
  styleUrl: './coupon-side-nav.component.css',
})
export class CouponSideNavComponent {}
