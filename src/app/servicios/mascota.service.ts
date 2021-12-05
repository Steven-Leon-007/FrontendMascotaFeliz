import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloMascota } from '../modelos/mascota.modelo';
import { ModeloPersona } from '../modelos/persona.modelo';
import { ModeloSolicitudAfiliacion } from '../modelos/solicitudAfiliacion.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  url = 'http://localhost:3000';
  token: String = '';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService,) { 
    this.token = seguridadServicio.ObtenerToken();
  }

  ObtenerMascotas(): Observable<ModeloMascota[]>{
    return this.http.get<ModeloMascota[]>(`${this.url}/mascotas`)
  }

  CrearMascota(mascota: ModeloMascota): Observable<ModeloMascota>{
    return this.http.post<ModeloMascota>(`${this.url}/mascotas`, mascota, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarMascota(mascota: ModeloMascota): Observable<ModeloMascota>{
    return this.http.put<ModeloMascota>(`${this.url}/mascotas/${mascota.id}`, mascota, {
      headers: new HttpHeaders({
        
      })
    })
  }

  EliminarMascota(id: string): Observable<any> {
    return this.http.delete(`${this.url}/mascotas/${id}`, {
      headers: new HttpHeaders({
        
      })
    })
  }

  ObtenerMascotaPorId(id:string): Observable<ModeloMascota>{
    return this.http.get<ModeloMascota>(`${this.url}/mascotas/${id}`);
  }

  CrearSolicitudAfiliacion(solicitudAfiliacion: ModeloSolicitudAfiliacion): Observable<ModeloSolicitudAfiliacion>{
    return this.http.post<ModeloSolicitudAfiliacion>(`${this.url}/solicitud-afiliacions`, solicitudAfiliacion, {
      headers: new HttpHeaders({
    })
  })
  }

  ObtenerSolicitudes(): Observable<ModeloSolicitudAfiliacion[]>{
    return this.http.get<ModeloSolicitudAfiliacion[]>(`${this.url}/solicitud-afiliacions`)
  }

  ObtenerClienteMascotaPorId(id:string): Observable<ModeloPersona>{
    return this.http.get<ModeloPersona>(`${this.url}/mascotas/${id}/cliente`);
  }

  ObtenerSolicitudPorId(id:string): Observable<ModeloSolicitudAfiliacion>{
    return this.http.get<ModeloSolicitudAfiliacion>(`${this.url}/clientes/${id}/solicitud-afiliacions`);
  }

  ObtenerIdCliente(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      let data = datos.datos;
      return data.id;
    }
    else{
      return '';
    }
  }

  ObtenerPersonaMascotaPorId(id:string): Observable<ModeloPersona>{
    return this.http.get<ModeloPersona>(`${this.url}/mascotas/${id}/cliente`);
  }

}
