import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero, GeneroService } from 'src/app/services/genero.service';

@Component({
  selector: 'app-genero-list',
  templateUrl: './genero-list.component.html',
  styleUrls: ['./genero-list.component.css'],
})
export class GeneroListComponent implements OnInit{
  generoArray: Genero[] = [];
  constructor(private generoService:GeneroService) {
  }
  
  ngOnInit(): void {
    //Normal
    this.generoService
      .getGeneros()
      .subscribe((res) => (this.generoArray = res));
  }
}
