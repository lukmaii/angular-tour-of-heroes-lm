import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  // to use service, require to intected in constructure first
  constructor(private heroService :HeroService, private messageService:MessageService){}

  heroes: Hero[] = [];
  selectedHero? : Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  // use subscribe to asyn fetch
  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
