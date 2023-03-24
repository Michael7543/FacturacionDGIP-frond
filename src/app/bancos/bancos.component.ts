import { Component, OnInit } from '@angular/core';
import { BancosService } from '../services/bancos.service';
import { Bancos } from '../entities/Bancos';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.css']
})
export class BancosComponent implements OnInit {
items: MenuItem[] = [];
activeItem!: MenuItem;
activeItem2!: MenuItem;

  banco: any;
  router: any;


  constructor(private BancosService: BancosService) {
  }

  ngOnInit(): void {

    this.getBanco();
  

  }

  getBanco() {
    this.BancosService.getBancos().subscribe(data => {
      this.banco = data.listado;
    });

  }

  getEventValue($event: any): string {
    return $event.target.value;
  }

 
  

}
