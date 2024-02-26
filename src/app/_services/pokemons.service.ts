import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PokemonItem } from '../_models/pokemonItem';
import { PokemonList } from '../_models/pokemonList';
import { PokemonDetail } from '../_models/pokemonDetail';
import { Observable, catchError, concatMap, finalize, from, map, mergeMap, of, pipe, reduce, switchMap, toArray } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  baseUrl = environment.pokeApiUrl;
  spriteUrl = environment.spriteApiUrl;
  pokemonUrl = this.baseUrl + "pokemon/";
  pokemons: any;

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

  getRawPokemon(): Observable<PokemonItem> {
    return fromFetch("https://pokeapi.co/api/v2/pokemon?limit=20").pipe(
      switchMap((response: Response) => {
        if (response.ok) {
          return response.json();
        } else {
          return of({ error: true, message: `Error ${ response.status }` });
        }
      }),
      mergeMap((response: PokemonList) => { // This method emitts one value at a time
        return response.results;
      }),
      finalize(() => console.log("Done!"))
    )
  }

  getPokemonsWithDetails(): Observable<PokemonDetail[] | any> {
    return this.getRawPokemon().pipe(
      mergeMap((pokemon: PokemonItem) => {
        return fromFetch(pokemon.url).pipe(
          switchMap((pokemonDetail) => pokemonDetail.json()),
          map((details) => {
            return details;
          })
        );
      }),
      toArray(),
      map((pokemonsDetails) => {
        return this.pokemons = pokemonsDetails;
      }),
      catchError(err => {
        console.error(err);
        return of({ error: true, message: err.message })
      }),
    );
  }
}
