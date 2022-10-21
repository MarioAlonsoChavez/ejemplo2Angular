import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';


//un servicio es una clase
@Injectable({
  providedIn: 'root'
})
export class UtlService {

  private _alumnosUtl:AlumnosUtl[]=[
    {
    nombre:'Mario',
    edad:15,
    },
    {
      nombre:'lucia',
      edad:15,
    },
    {
      nombre:'Leonardo',
      edad:21,
    },
    {
      nombre:'Littzy mi amor',
      edad:21
    }
  ]
  
  regAlum:AlumnosUtl={
    nombre:'',
    edad:0
  }
  

  get alumnos():AlumnosUtl[]{
    return[...this._alumnosUtl];
  }

  constructor() { }
  
  agregarAlumno(alumno:AlumnosUtl){
    this._alumnosUtl.push(alumno);
  }
  }

