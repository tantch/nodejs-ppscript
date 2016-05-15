import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'pokemon-list',
  templateUrl: 'app/templates/pokemon-list.html',
  styleUrls: ['app/css/pokemon-list.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[];
  errorMessage: string;
  constructor(private pokemonService: PokemonService) { }

  getPokemons() {
    this.pokemonService.getPokemons().subscribe(
      pokemons => this.handlePokemons(pokemons),
      error => this.errorMessage = <any>error);
  }

  handlePokemons(pokemons) {

    this.pokemons = pokemons;

  }

  ngOnInit() {
    this.pokemons = [];
    this.getPokemons();
  }

}
