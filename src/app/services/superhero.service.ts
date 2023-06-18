import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SuperheroService {
  //crud operations summoned under services
  private url = 'SuperHero'; //api controllers name here
  constructor(private http: HttpClient) {}

  public getSuperHeroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`,
      hero
    );
  }

  public createHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`,
      hero
    );
  }

  public deleteHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(
      `${environment.apiUrl}/${this.url}/${hero.id}`
    );
  }
}
