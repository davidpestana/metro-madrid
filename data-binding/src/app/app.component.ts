import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mostrar = true;
  items = ['a','b','c']
  resultado = 10;

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('https://rickandmortyapi.com/api/character')
      .subscribe(({results}:any)  => this.items = results.map(({name}:any) => name ))
  }

  addItem(valor:string) {
    // this.items.push(valor);
    this.items = [...this.items, valor];
  }

}
