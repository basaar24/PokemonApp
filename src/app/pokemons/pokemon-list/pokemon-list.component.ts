import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/_models/pokemon';
import { PokemonsService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonCards: Pokemon[] = [];

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonsService.getPokemons().subscribe({
      next: response => this.pokemonCards = response
    })
  }

}
