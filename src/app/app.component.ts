import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Number Input';
  setTheme() {

    if (document.documentElement.className !== 'dark' && document.documentElement.className !=='darkest'){
      if (confirm('It is scary in the dark maybe take a flashlight?')){
        document.documentElement.className = 'dark'
      } else {
        document.documentElement.className = 'darkest'
      }
    } else {
      document.documentElement.className = 'light'
    }
  }
}
