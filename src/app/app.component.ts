import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperheroService } from './services/superhero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'superhero.ui';
  heroes: SuperHero[] = [];

  constructor(private superHeroService: SuperheroService) {}
  // ngOnInit(): void {
  //   this.heroes = this.superHeroService.getSuperHeroes();
  //   console.log(this.heroes);

  ngOnInit(): void {
    this.superHeroService
      .getSuperHeroes()
      .subscribe((result: SuperHero[]) => (this.heroes = result));
  }
}
