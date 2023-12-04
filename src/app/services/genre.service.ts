import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  private genres = new BehaviorSubject<Genre[]>([
    { id: 1, name: 'Acción', minAge: 18 },
    // Agrega más géneros según sea necesario
  ]);

  genres$ = this.genres.asObservable();

  constructor() {}

  getGenres(): Genre[] {
    return this.genres.getValue();
  }

  addGenre(newGenre: Genre): void {
    const currentGenres = this.getGenres();
    this.genres.next([...currentGenres, newGenre]);
  }

  updateGenre(updatedGenre: Genre): void {
    const currentGenres = this.getGenres();
    const updatedGenres = currentGenres.map((genre) =>
      genre.id === updatedGenre.id ? updatedGenre : genre
    );
    this.genres.next(updatedGenres);
  }

  deleteGenre(id: number): void {
    const currentGenres = this.getGenres();
    const updatedGenres = currentGenres.filter((genre) => genre.id !== id);
    this.genres.next(updatedGenres);
  }
}

export interface Genre {
  id: number;
  name: string;
  minAge: number;
}
