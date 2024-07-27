import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = 'http://localhost:8080/api/v1';

  constructor(private httpClient: HttpClient) { }

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  crearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.baseUrl + '/crear-usuario', usuario, { headers: this.httpHeaders });

  }

  obtenerTodosLosUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.baseUrl + '/todos-los-usuarios', { headers: this.httpHeaders });
  }

  eliminarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.delete<Usuario>(this.baseUrl + '/eliminar-usuario/' + usuario.documento, { headers: this.httpHeaders });
  }
}
