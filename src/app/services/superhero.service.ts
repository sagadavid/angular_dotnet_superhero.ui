import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root',
})
export class SuperheroService {
  constructor() {}

  public getSuperHeroes(): SuperHero[] {
    let hero = new SuperHero();
    hero.id = 1;
    hero.name = 'witcher';
    hero.firstName = 'david';
    hero.lastName = 'saga';
    hero.place = 'ny';

    return [hero];
  }
}
