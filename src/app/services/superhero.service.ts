import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SuperheroService {
  private url = 'SuperHero'; //api controllers name here
  constructor(private http: HttpClient) {}

  // public getSuperHeroes(): SuperHero[] {
  //   let hero = new SuperHero();
  //   hero.id = 1;
  //   hero.name = 'witcher';
  //   hero.firstName = 'david';
  //   hero.lastName = 'saga';
  //   hero.place = 'ny';

  //   return [hero];
  // }

  public getSuperHeroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  }
}
