import { Injectable } from '@angular/core';
import { Actividad } from '../models/actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  private actividades: Actividad[] = [
    {
      fecha: '2024-11-29', lugar: 'Sala 1', monitor: 'Juan Pérez', tipo: 'Yoga'
    },
    {
      fecha: '2024-12-01', lugar: 'Sala 2', monitor: 'María López', tipo: 'Spinning'
    },
    {
      fecha: '2024-12-03',lugar: 'Sala 3', monitor: 'Carlos García', tipo: 'CrossFit'
    }
  ];

  constructor() { }

  getActividades(): Actividad[] {
    return this.actividades;
  }
}
