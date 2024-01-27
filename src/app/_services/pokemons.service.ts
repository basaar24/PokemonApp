import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PokemonItem } from '../_models/pokemonItem';
import { PokemonList } from '../_models/pokemonList';
import { map } from 'rxjs';
import { PokemonDetail } from '../_models/pokemonDetail';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  baseUrl = environment.pokeApiUrl;
  spriteUrl = environment.spriteApiUrl;
  pokemonUrl = this.baseUrl + "pokemon/";

  constructor(private http: HttpClient) { }

  getPokemon(pokemonName: string) {
    return this.http.get<PokemonDetail>(this.baseUrl + "pokemon/" + pokemonName);
  }

  getPokemons() {
    return this.http.get<PokemonList>(this.baseUrl + "pokemon").pipe(
      map((response: PokemonList) => {
        const pokemonList: PokemonList = response;
        pokemonList.results.map(pokemon => pokemon!.sprite =
          this.spriteUrl +
          pokemon!.url.substring(0, pokemon!.url.length - 1).replace(this.pokemonUrl, '') +
          ".png"
        );
        
        return pokemonList;
      })
    );
  }
}
