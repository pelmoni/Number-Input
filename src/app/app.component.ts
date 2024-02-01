import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  darkMode: boolean = false;
  darkestMode: boolean = false;

  title = 'Number Input';


  ngOnInit() {

    document.addEventListener('mousemove', this.update);
    document.addEventListener('touchmove', this.update);
  }

  update(e: any) {
    const x = e.clientX || e.touches[0].clientX;
    const y = e.clientY || e.touches[0].clientY;

    // @ts-ignore
    document.getElementById('cover').style.setProperty('--cursorX', x+'px');
    // @ts-ignore
    document.getElementById('cover').style.setProperty('--cursorY', y+'px');
  }

  setTheme() {

    if (!this.darkMode && !this.darkestMode){
      if (confirm('It is scary in the dark maybe take a flashlight?')){
        this.darkMode = true;
        this.darkestMode = false;
      } else {
        this.darkestMode = true;
        this.darkMode = false;
      }
    } else {
      this.darkestMode = false;
      this.darkMode = false;
    }
  }



}
