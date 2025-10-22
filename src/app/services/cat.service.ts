export class CatService {
  private apiUrl = 'https://api.thecatapi.com/v1/images/search';
  private favoritosKey = 'gatosFavoritos';

  // Obtener imagen aleatoria de gato
  async getRandomCat(): Promise<any> {
    const response = await fetch(this.apiUrl);
    const data = await response.json();
    return data[0]; // Devuelve solo el primer gato
  }

  // Obtener lista de favoritos del localStorage
  getFavoritos(): any[] {
    return JSON.parse(localStorage.getItem(this.favoritosKey) || '[]');
  }

  // Añadir gato a favoritos
  addFavorito(cat: any) {
    const favoritos = this.getFavoritos();
    if (!favoritos.find((c: any) => c.id === cat.id)) {
      favoritos.push(cat);
      localStorage.setItem(this.favoritosKey, JSON.stringify(favoritos));
    }
  }

  // Eliminar un favorito por ID
  removeFavorito(id: string) {
    const favoritos = this.getFavoritos().filter((c: any) => c.id !== id);
    localStorage.setItem(this.favoritosKey, JSON.stringify(favoritos));
  }

  // Eliminar todos los favoritos
  clearFavoritos() {
    localStorage.removeItem(this.favoritosKey);
  }
}
