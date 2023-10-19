import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent implements OnChanges,OnInit {

  @Input({alias:'name', required: true}) yoSoyProperty1?: string;
  @Input({alias:'age'}) yoSoyProperty2?: string;
  @Input({alias:'size', required: true}) yoSoyProperty3: number = 22;

  @Output('tick') onTick: EventEmitter<number> = new EventEmitter<number>()
  @Output('click') onClick: EventEmitter<void> = new EventEmitter<void>()

  titulo = "ejemplo";
  timer = 0;

  ngOnInit(): void {
      setInterval(() => this.onTick.emit(this.timer++), 1000);
  }

  metodo() {
    this.yoSoyProperty1?.toLowerCase()
    return "hola mundo";
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }

  hacerClick(){
    this.onClick.emit();
  }

}
