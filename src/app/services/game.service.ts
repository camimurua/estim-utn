import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../modules/employee/pages/game/game.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get<Game[]>('http://localhost:3000/games', {
      responseType: 'json',
    });
  }

  getGameById(id: number) {
    return this.http.get<Game>(`http://localhost:3000/games/${id}`, {});
    // return this.http.get<Game>(`http://localhost:3000/games`, {
    //   // params: new HttpParams().set('id', id),
    //   params: new HttpParams().append('id', id).append('name', 'jorge'),
    // });
  }

  createGame(newGame:Game):Observable<Game>{
    
    return this.http.post<any>(`http://localhost:3000/games`,newGame );
    
 }
}
