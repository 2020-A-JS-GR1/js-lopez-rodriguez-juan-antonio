import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProfesorService{
  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient:HttpClient,
  ) {
  }

  traerTodosProfesores(){
    return this._httpClient.get(this.url + '/profesor')
  }

  obtenerUnProfesorPorId(idProfesor:number){
    return this._httpClient.get(this.url + '/profesor/' + idProfesor)
  }

  crearProfesor(profesor){
    return this._httpClient.post(this.url + '/profesor', profesor)
  }

  editarProfesor(profesor, idProfesor){
    return this._httpClient.put(this.url + '/profesor/' + idProfesor, profesor)
  }

  eliminarProfesor(idProfesor:number){
    return this._httpClient.delete(this.url + '/profesor/' + idProfesor)
  }

}
