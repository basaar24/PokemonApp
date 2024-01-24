import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/_models/pokemon';
import { PokemonsService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemonName: string = "";
  pokemon: Pokemon | undefined;

  constructor(private pokemonsService: PokemonsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.pokemonName);
    if(this.pokemonName !== "")
      this.getPokemon();
  }

  getPokemon(): void {
    this.pokemonsService.getPokemon(this.pokemonName).subscribe({
      next: response => {
        this.pokemon = response.find(p => p.name.toLowerCase() == this.pokemonName.toLowerCase());
      }
    });
  }

}
