import { Component, Input, OnInit } from '@angular/core';
import { PokemonItem } from 'src/app/_models/pokemonItem';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: PokemonItem | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
