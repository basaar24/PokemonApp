import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../_models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
