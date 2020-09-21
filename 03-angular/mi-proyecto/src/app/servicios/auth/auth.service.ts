import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class AuthService {
  estaAutenticado = false;
  url = 'http://localhost:1337';

  roles = [
    'Supervisor',
    'Administrador'
  ];

  constructor(
    private readonly _httpCliente:HttpClient
  ) {
  }

  login(correo:string, cedula:string){
    return this._httpCliente.get(this.url + '/usuario?correo=' + correo + '&cedula=' + cedula)
  }

}
