import { Component } from '@angular/core';
import { Pokemon } from 'src/app/interface/pokemon';
import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent {
  pokelist:Pokemon[]=[];
  constructor(private pokeapi:PokeapiService){}

  mezcla(){
    this.pokelist=[];
    this.pokeapi.generateFiveRandom();
    this.pokeapi.getFivePokemon()
    
    for (let i = 0; i < 5; i++) {
      this.pokeapi.getFiltered()[i].subscribe(result => {
        // imprime por consola datos recibidos
        /* console.warn(result); */
       
        // guarda los datos en el array de este componente
        this.pokelist.push(result); 
        
      });
      console.log( this.pokelist[i]);
    }
   /*  this.pokelist=this.pokeapi.getFivePokemon()[0].subscribe() *//* .subscribe(
      
    ); */
    
  }

  getImage(item:any){
    return item.sprites.front_default;
  }
}
