import { Component,  Inject,  OnInit, inject } from '@angular/core';
import { Observable} from 'rxjs';
import { CharacerService } from './characer.service';
import { HttpClient } from '@angular/common/http';
import { CacheService } from './cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  characters$?: Observable<any[]>;

  data = inject(HttpClient);

  constructor(private servicio:CharacerService) {
  }

  ngOnInit(): void {
      this.characters$ = this.servicio.characters;
      this.data.get('https://rickandmortyapi.com/api/character').subscribe(console.log)
  }

  next() {
      this.servicio.next();
  }

}
