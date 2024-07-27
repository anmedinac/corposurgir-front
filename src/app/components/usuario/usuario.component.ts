import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/usuario.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, 
    private router: Router
  ){}

  registrarUsuario():void{
    console.log(this.usuario);
    this.usuarioService.crearUsuario(this.usuario).subscribe({
      next: (e)=>{
        console.log('Usuario creado')
        console.log(e);
        this.router.navigate(['list-usuario'])
      }
    })
  }

}
