import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloSolicitudAfiliacion } from 'src/app/modelos/solicitudAfiliacion.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-solicitud-afiliacion',
  templateUrl: './solicitud-afiliacion.component.html',
  styleUrls: ['./solicitud-afiliacion.component.scss']
})
export class SolicitudAfiliacionComponent implements OnInit {

  startIndex: number = 72;

  fgValidador: FormGroup = this.fb.group({
    'petName':["", Validators.required],
    'estado':["", Validators.required],
    'comentario':["", Validators.required],
  })

  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService,) { }

  ngOnInit(): void {
   this.ObtenerSolicitud();
  }


  ObtenerSolicitud(){
    console.log(localStorage);
    var cliente = JSON.stringify(localStorage.getItem('datosSesion')); 
    var clienteId = JSON.parse(cliente);
    clienteId = clienteId.substring(this.startIndex, 96);
    this.servicioMascota.ObtenerSolicitudPorId(clienteId).subscribe((datos: ModeloSolicitudAfiliacion) => {
      this.fgValidador.controls["petName"].setValue(datos.petName);
      this.fgValidador.controls["estado"].setValue(datos.estado);
      this.fgValidador.controls["comentario"].setValue(datos.comentario);
    });
  }
}
