import { Routes } from '@angular/router';
import { FavoritesComponent } from './components/favorites.component';
import { AppComponent } from './components/app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'favorites', component: FavoritesComponent }
];
