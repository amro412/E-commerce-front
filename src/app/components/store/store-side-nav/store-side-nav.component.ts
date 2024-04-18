import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-store-side-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,RouterModule, RouterOutlet,NavbarComponent],
  templateUrl: './store-side-nav.component.html',
  styleUrl: './store-side-nav.component.css'
})
export class StoreSideNavComponent {
}
