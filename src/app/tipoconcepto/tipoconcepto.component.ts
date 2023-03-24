import { Component, OnInit } from '@angular/core';
import { TipoconceptoService } from '../services/tipoconcepto.service';

@Component({
  selector: 'app-tipoconcepto',
  templateUrl: './tipoconcepto.component.html',
  styleUrls: ['./tipoconcepto.component.css']
})
export class TipoconceptoComponent implements OnInit {

  concepto: any;
 


  constructor(private tipoconceptoService: TipoconceptoService) {
  }

  


  ngOnInit(): void {


    this.getTipoConcepto();


  
  }

  getTipoConcepto() {
    this.tipoconceptoService.getTipoconcepto().subscribe(data => {
      this.concepto = data.listado;
    });
    
  }

  getEventValue($event: any): string {
    return $event.target.value;
  }
}
