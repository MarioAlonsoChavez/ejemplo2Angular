import { Component, OnInit } from '@angular/core';
interface AlumnosUtl{
nombre:string;
edad:number;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
alumnosUtl:AlumnosUtl[]=[
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

regAlumno:AlumnosUtl={
  nombre:'',
  edad:0
}

agregar(){
  //console.log(this.AlumnosUtl)
  this.alumnosUtl.push(this.regAlumno);
  this.regAlumno={
    nombre:'',
    edad:0
  }
}
}
