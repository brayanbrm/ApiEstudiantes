//servicio para comunicarnos con el api
import { Injectable } from '@angular/core';
import{ListaestudiantesI} from '../../modelos/listaestudiantes.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string='/app/web/api/index.php?action=';

  constructor(private http:HttpClient) { }

   //listado de estudiantes
  getAllStudents(codigo:number):Observable<ListaestudiantesI[]>{
  let direccion = this.url + "test_get_students&code="+codigo;
  return this.http.get<ListaestudiantesI[]>(direccion);
  }
}
 