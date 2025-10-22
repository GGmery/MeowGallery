import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule], // 🔹 Agrega HttpClientModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentImage: CatImage | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadRandomCat();
  }

  loadRandomCat() {
    this.http.get<CatImage[]>('https://api.thecatapi.com/v1/images/search?limit=1')
      .subscribe(data => this.currentImage = data[0]);
  }

  addToFavorites() {
    if (!this.currentImage) return;

    let favorites: CatImage[] = JSON.parse(localStorage.getItem('catFavorites') || '[]');

    if (!favorites.find(img => img.id === this.currentImage?.id)) {
      favorites.push(this.currentImage);
      localStorage.setItem('catFavorites', JSON.stringify(favorites));
    }
  }
}
