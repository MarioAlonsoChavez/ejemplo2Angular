import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';
import { UtlService } from '../service/utl.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
}
)



export class MainPageComponent {

  regAlum={
    nombre:'',
    edad:0
  }

constructor(private utlService:UtlService){}

/*agregarNuevoAlumno(datos:AlumnosUtl){
  this.alumnosUtl.push(datos);
  this.utlService.mostrarSaludo();*/
  
}
