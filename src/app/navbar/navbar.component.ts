import { Component, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  srcLogo = input('https://static.vecteezy.com/system/resources/previews/017/504/043/non_2x/bodybuilding-emblem-and-gym-logo-design-template-vector.jpg');
  title = input('Gimnasio 4V');
  constructor(private router: Router) { }
  irALaLista(): void {
    this.router.navigate(['/actividades']); // Navegación programática
  }

}
