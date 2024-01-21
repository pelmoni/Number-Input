import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Number Input';
  setTheme() {
    if (document.documentElement.className === 'dark'){
      document.documentElement.className = 'light'
    } else {
      document.documentElement.className = 'dark'
    }
  }
}
