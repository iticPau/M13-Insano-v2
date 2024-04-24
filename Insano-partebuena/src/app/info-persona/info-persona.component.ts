import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-persona',
  standalone: true,
  imports: [],
  templateUrl: './info-persona.component.html',
  styleUrl: './info-persona.component.css'
})
export class InfoPersonaComponent {

  @Input() name: string | undefined;
  @Input() description: string | undefined;
  @Input() urlImage: string | undefined;

}
