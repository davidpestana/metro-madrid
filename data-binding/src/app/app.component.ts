import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer, Crypto } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  formato = "MMM dd, yyyy 'at' hh:mm a";

  precio = 100.336;

  fecha = new Date();
  otrafecha = "2021-22-11";
  numero = 3334343433333333;


  serie = {
    titulo: 'Manhunt: Unabomber',
    temporadas: 2,
    finalizada: true
  }


  mayusculas(texto:string) {
    return texto.toUpperCase();
  }
}
