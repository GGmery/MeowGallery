import { Component } from '@angular/core';

interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

@Component({
  selector: 'app-favorites',
  standalone: true,
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favorites: CatImage[] = JSON.parse(localStorage.getItem('catFavorites') || '[]');
}
