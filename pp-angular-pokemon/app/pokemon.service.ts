import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class PokemonService {

  constructor(private http: Http) { }
  private pokemonsUrl = 'http://127.0.0.1:3333/pokemons/1';  // URL to web API
getPokemons(): Observable < Pokemon[] > {
  return this.http.get(this.pokemonsUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }
  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    let body = res.json();
    return body || {};
  }
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}
