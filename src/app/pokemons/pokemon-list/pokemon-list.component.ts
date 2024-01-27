import { Component, Input, OnInit } from '@angular/core';
import { PokemonItem } from 'src/app/_models/pokemonItem';
import { PokemonList } from 'src/app/_models/pokemonList';
import { PokemonsService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: PokemonList | undefined;

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonsService.getPokemons().subscribe({
      next: response => this.pokemonList = response
    });
  }
}
