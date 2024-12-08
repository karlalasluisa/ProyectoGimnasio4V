import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { ActividadListaComponent } from "./actividad-lista/actividad-lista.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,RouterModule, ActividadListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}

