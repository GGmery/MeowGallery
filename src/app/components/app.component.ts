import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
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
}
