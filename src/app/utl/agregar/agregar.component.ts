import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';
import { UtlService } from '../service/utl.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  /*@Input() alumnosUtl:AlumnosUtl[]=[];*/
  @Input() regAlumno:AlumnosUtl={
    nombre:'',
    edad:0
  }

  //@Output()onNuevoAlumnos:EventEmitter<AlumnosUtl>=new EventEmitter();

  constructor(private UtlService:UtlService){}

  agregar(){
    console.log(this.regAlumno)
    //this.alumnosUtl.push(this.regAlum);
    //this.onNuevoAlumnos.emit(this.regAlum);
    this.UtlService.agregarAlumno(this.regAlumno);
    this.regAlumno={
      nombre:'',
      edad:0
    }
  }
}
