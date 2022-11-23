import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Input() title?: string;

  constructor(private router: Router) { }

  // logout() {
  //   if (confirm('Are you sure?')) {
  //     this.auth.clear();
  //     this.router.navigateByUrl("/");
  //   }
  // }
}
