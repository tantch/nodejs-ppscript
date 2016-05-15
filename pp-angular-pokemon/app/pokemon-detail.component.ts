import { Component, Input } from '@angular/core';
import { Pokemon } from './pokemon';

@Component({
  selector: 'pokemon-detail',
  template: `
  <div *ngIf="pokemon">
    <h2>{{pokemon.name}} details!</h2>
    <div><label>id: </label>{{pokemon.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="pokemon.name" placeholder="name"/>
    </div>
  </div>
`
})
export class PokemonDetailComponent {
  @Input()
  pokemon: Pokemon;
}
