import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetail } from 'src/app/_models/pokemonDetail';
import { PokemonsService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemonName: string = "";
  pokemon: PokemonDetail | undefined;

  constructor(private pokemonsService: PokemonsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if(this.pokemonName !== "")
      this.getPokemon(this.pokemonName);
  }

  getPokemon(pokemonName: string): void {
    this.pokemonsService.getPokemon(this.pokemonName).subscribe({
      next: response => this.pokemon = response
    });
  }

}
