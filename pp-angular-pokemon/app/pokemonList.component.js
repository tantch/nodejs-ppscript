"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var pokemon_service_1 = require('./pokemon.service');
var PokemonListComponent = (function () {
    function PokemonListComponent(pokemonService) {
        this.pokemonService = pokemonService;
    }
    PokemonListComponent.prototype.getPokemons = function () {
        var _this = this;
        this.pokemonService.getPokemons().subscribe(function (pokemons) { return _this.handlePokemons(pokemons); }, function (error) { return _this.errorMessage = error; });
    };
    PokemonListComponent.prototype.handlePokemons = function (pokemons) {
        this.pokemons = pokemons;
    };
    PokemonListComponent.prototype.ngOnInit = function () {
        this.pokemons = [];
        this.getPokemons();
    };
    PokemonListComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-list',
            templateUrl: 'app/templates/pokemon-list.html',
            styleUrls: ['app/css/pokemon-list.css']
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService])
    ], PokemonListComponent);
    return PokemonListComponent;
}());
exports.PokemonListComponent = PokemonListComponent;
//# sourceMappingURL=pokemonList.component.js.map