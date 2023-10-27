import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacerService {

  page = 1;
  characters$ = new BehaviorSubject<any[]>([]);

  constructor(private http:HttpClient ) {
    this.load();
  }

  load() {
    this.http.get('https://rickandmortyapi.com/api/character?page=' + this.page)
    .pipe(map(({results}:any) => results))
    .subscribe(results => this.characters$.next(results));
  }

  get characters(): Observable<any[]> {
     return this.characters$.asObservable();
  }

  next() {
    this.page++;
    this.load();
  }
}
