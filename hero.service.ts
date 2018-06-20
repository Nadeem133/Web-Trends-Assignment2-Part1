import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  hero: Hero[] = [
      {
        id: 1,
        name: 'Muhammad Ali',
        review: 'Professional Boxer',
        age: 78,
        IsActive: false
      },
      {
        id: 2,
        name: 'Barack Obama',
        review: 'Former President of USA',
        age: 61,
        IsActive: true
      },
      {
        id: 3,
        name: 'Justine Trudeau',
        review: 'Canada Prime Minister',
        age: 49,
        IsActive: true
      },
      {
        id: 4,
        name: 'Donald Trumph',
        review: 'US President',
        age: 67,
        IsActive: true
      }

  
    ];
    //returns heroes
    getHero():Observable<Hero[]>{
      let results: Hero[] = [];
      for(let t of this.hero){
        if(t.IsActive===true){
          results.push(t);
        }
      }
      return of(results);
    }
  








  constructor() { }
}
