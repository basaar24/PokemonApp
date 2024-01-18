import { Component } from '@angular/core';
import { Card } from './_models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PokemonApp';

  pokemonCards: Card[] = [
    {
      "name": "bulbasaur",
      "id": 1,
      "forms_switchable": false
    },
    {
      "name": "ivysaur",
      "id": 2,
      "forms_switchable": false
    },
    {
      "name": "venusaur",
      "id": 3,
      "forms_switchable": true
    },
    {
      "name": "charmander",
      "id": 4,
      "forms_switchable": false
    },
    {
      "name": "charmeleon",
      "id": 5,
      "forms_switchable": false
    },
    {
      "name": "charizard",
      "id": 6,
      "forms_switchable": true
    }
  ];

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    console.log(this.pokemonCards);
  }
}
