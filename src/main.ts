import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/components/app.component'; // ajusta la ruta si es necesario

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
