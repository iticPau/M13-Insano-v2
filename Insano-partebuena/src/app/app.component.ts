import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InsanoService } from './service/insano.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Insano';

  constructor(public authService: InsanoService) {
    
  }

  logout(): void {
    this.authService.loggedInUser = null;
    this.authService.logout();
  }
}
