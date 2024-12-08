import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadService } from '../services/actividad.service';
import { Actividad } from '../models/actividad';

@Component({
  selector: 'app-actividad-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actividad-lista.component.html',
  styleUrls: ['./actividad-lista.component.scss']
})
export class ActividadListaComponent implements OnInit {
  actividades: Actividad[] = [];

  constructor(private actividadService: ActividadService) { }

  ngOnInit(): void {
    this.actividades = this.actividadService.getActividades();
  }
}
