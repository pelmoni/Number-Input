import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

function update(e: any) {
  var x=e.clientX || e.touches[0].clientX;
  var y=e.clientY || e.touches[0].clientY;

  document.documentElement.style.setProperty('--cursorX', x+'px');
  document.documentElement.style.setProperty('--cursorY', y+'px');


}
document.addEventListener('mousemove', update);
document.addEventListener('touchmove', update);
