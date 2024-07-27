import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/usuario.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService, private route: Router) { }


  ngOnInit(): void {

    this.cargarTabla();
  }

  cargarTabla() {
    this.usuarioService.obtenerTodosLosUsuarios().subscribe({
      next: (e) => {
        this.usuarios = e;
        console.log(this.usuarios)
      }
    })
  }

  eliminarUsuario(usuario: Usuario) {
    this.usuarioService.eliminarUsuario(usuario).subscribe({
      next: (e) => {
        this.cargarTabla();
        console.log(e);
      }
    });

  }
}
