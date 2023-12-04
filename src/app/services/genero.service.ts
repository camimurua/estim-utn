import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// export interface Genero {
//   id: number;
//   firstName: string;
//   lastName: string;
//   country: string;
//   games: Game[];
// }

interface GameGenero {
  gameId: number
}

export interface Genero {
  id: number;
  name: string;
  minimumAge: number;
  relatedGames: GameGenero[];
}


@Injectable({
  providedIn: 'root',
})
export class GeneroService {
  constructor(private http: HttpClient) {}

  getGeneros() {
    return this.http.get<Genero[]>('http://localhost:3000/generos', {
      responseType: 'json',
    });
  }

  getGeneroById(id: number) {
    return this.http.get<Genero>(`http://localhost:3000/generos/${id}`, {});
  }
}
