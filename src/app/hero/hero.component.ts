import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {

  hero: Hero[];

  constructor(private heroService: HeroService ) { }

  ngOnInit() {

    this.heroService.getHero().subscribe(results => this.hero = results);
  }

}
