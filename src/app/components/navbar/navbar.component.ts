import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public Navclass: string;
  public path: string;
  constructor(private router: Router) {
    this.Navclass = `w-full hidden flex-grow lg:flex lg:items-center lg:w-auto`;
    this.path = this.router.url;
  }

  public openNavbar = () => {
    if (
      this.Navclass ===
      `w-full block flex-grow lg:flex lg:items-center lg:w-auto`
    ) {
      this.Navclass = `w-full hidden flex-grow lg:flex lg:items-center lg:w-auto`;
    } else {
      this.Navclass = `w-full block flex-grow lg:flex lg:items-center lg:w-auto`;
    }
  };

  public handleActive(requiredPath: string): string {
    if (requiredPath === this.router.url) {
      return 'text-2xl transition-colors duration-200 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 ';
    } else {
      return 'text-2xl transition-colors duration-200 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4';
    }
  }
}
