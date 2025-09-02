import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="nav">
      <div class="brand">HobbyClass</div>
      <nav class="links">
        <a routerLink="/explore">Explore Classes</a>
        <a routerLink="/mentor-details">Mentor Details</a>
        <a routerLink="/login">Login</a>
      </nav>
    </header>
  `,
  styles: `
    .nav { background: #020061; color: #fff; display: flex; align-items: center; justify-content: space-between; padding: 37px 100px; width: 100%; box-sizing: border-box; }
    .brand { font-family: 'Source Sans Pro', sans-serif; font-weight: 600; font-size: 36px; margin: 0; }
    .links { display: flex; gap: 80px; align-items: center; }
    .links a { color: #fff; text-decoration: none; font-family: 'Source Sans Pro', sans-serif; font-weight: 600; font-size: 24px; }
    .links a:hover { opacity: 0.8; }
  `
})
export class HeaderComponent {

}
