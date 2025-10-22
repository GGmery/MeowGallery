import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatService } from './services/cat.service';
import { AppComponent } from './components/app.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('MeowGallery');
}

const catService = new CatService();
