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
var http_1 = require('@angular/http');
var navbar_component_1 = require('./navbar.component');
var pokemon_service_1 = require('./pokemon.service');
var pokemonList_component_1 = require('./pokemonList.component');
var AppComponent = (function () {
    function AppComponent(pokemonService) {
        this.pokemonService = pokemonService;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [navbar_component_1.NavbarComponent, pokemonList_component_1.PokemonListComponent],
            providers: [http_1.HTTP_PROVIDERS, pokemon_service_1.PokemonService],
            template: "\n  <pk-navbar></pk-navbar>\n  <pokemon-list></pokemon-list>\n  "
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map