import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pokemon } from '../interface/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  randoms:number[]=[];
  pokemonlist:Observable<Pokemon>[]=[];
  
  constructor( private http:HttpClient){}
  
  generateFiveRandom(){
    this.randoms=[];
    for (let i = 0; i < 5; i++) {
      this.randoms.push(Math.floor(Math.random()*1010));
    }
  }

  

  getFivePokemon()  {
    for (let i = 0; i < 5; i++) {
      this.pokemonlist.push(this.http.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/"+this.randoms![i]).pipe(map((response): Pokemon => (response))));
          /* map(response => this.pokemonlist.push(response) *//* response.map(
              response=> this.pokemonlist.push(response)
            ) */
         /*  ) 
        ); */
        
    }
    /* console.log(this.pokemonlist[0].subscribe(result => {
      console.warn(result);
    }));
    console.log(this.pokemonlist[1].subscribe(result => {
      console.warn(result);
    }));
    console.log(this.pokemonlist[2].subscribe(result => {
      console.warn(result);
    }));
    console.log(this.pokemonlist[3].subscribe(result => {
      console.warn(result);
    }));
    console.log(this.pokemonlist[4].subscribe(result => {
      console.warn(result);
    })); */
    return this.pokemonlist;
      /* console.log(this.pokemonlist[0]);
     this.pokemonlist; */
   /*  return this.pokemonlist; */
  }
  getFiltered():Observable<Pokemon>[]{
    return this.pokemonlist;
  }
}
