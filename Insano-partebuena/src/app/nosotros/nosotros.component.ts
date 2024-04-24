import { Component } from '@angular/core';
import { InfoPersonaComponent } from '../info-persona/info-persona.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [InfoPersonaComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
