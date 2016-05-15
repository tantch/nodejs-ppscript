import { Component } from '@angular/core';
import { HTTP_PROVIDERS }    from '@angular/http';
import { Pokemon } from './pokemon';
import { NavbarComponent } from './navbar.component';
import { PokemonService } from './pokemon.service';
import { PokemonListComponent } from './pokemonList.component';

@Component({
  selector: 'my-app',
  directives: [NavbarComponent,PokemonListComponent],
  providers: [ HTTP_PROVIDERS,PokemonService],
  template: `
  <pk-navbar></pk-navbar>
  <pokemon-list></pokemon-list>
  `
})
export class AppComponent {
  constructor(private pokemonService: PokemonService) { }
}
