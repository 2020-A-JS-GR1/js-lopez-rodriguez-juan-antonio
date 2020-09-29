import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ColegioService{
  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient:HttpClient,
  ) {
  }

  traerTodosColegios(){
    return this._httpClient.get(this.url + '/colegio')
  }

  obtenerUnColegioPorId(idColegio:number){
    return this._httpClient.get(this.url + '/colegio/' + idColegio)
  }

  crearColegio(colegio){
    return this._httpClient.post(this.url + '/colegio', colegio)
  }

  editarColegio(colegio, idColegio){
    return this._httpClient.put(this.url + '/colegio/' + idColegio, colegio)
  }

  eliminarColegio(idColegio:number){
    return this._httpClient.delete(this.url + '/colegio/' + idColegio)
  }

}
