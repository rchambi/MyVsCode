import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-nieto1',
  templateUrl: './nieto1.component.html'
})
export class Nieto1Component implements OnInit {

    // --------------------------------ComponentesLejanos-------------------------------
  constructor(private service: ComunicationService) { }
  mensaje:string;
  ngOnInit() {
    // si hay un cambio en mensaje lo cambia 
    this.service.enviarMensajeObservable.subscribe(response=>{
      this.mensaje=response;
    });
  }

  //envio de dato al servicio
  cambioTexto(textAreaValue:string){
    this.service.enviarMensaje(textAreaValue);  
  }


}
