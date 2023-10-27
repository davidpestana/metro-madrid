import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacerService } from '../characer.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
    @Input() character: any;
    @Output() onImageOver: EventEmitter<string> = new EventEmitter<string>();

 
}
