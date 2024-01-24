import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../_models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  baseUrl = environment.apiUrl;
  resourceName = environment.resourceName;

  constructor(private http: HttpClient) { }

  getPokemon(name: string) {
    return this.http.get<Pokemon[]>(this.baseUrl + this.resourceName);
  }

  getPokemons() {
    return this.http.get<Pokemon[]>(this.baseUrl + this.resourceName);
  }
}
