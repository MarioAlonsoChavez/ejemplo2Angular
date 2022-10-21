import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  form = new FormGroup({
  nombre: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required])
})

obtenerError(){
  var nom=this.form.get('nombre');
  var pass=this.form.get('password');
  if(nom?.hasError('required')){
    return 'El campo nombre es requerido'
  }
}

  ngOnInit(): void {

  }
  guardarUsuario(){
    console.log("Registro guardado");   
  }

}
