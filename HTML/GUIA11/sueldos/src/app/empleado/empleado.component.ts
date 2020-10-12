import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser';
import { Empledo } from '../empledo';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  registro=[];
  sueldos:any;
  nombre:string;
  base:number;
  neto:number;
  constructor() { }
  ngOnInit(){
    this.nombre='';
    this.base=0;
    this.neto=0;
  }
  ingresar(){
    this.neto=this.base-((this.base*0.074)+(this.base*0.11)+(this.base*0.051));
    this.sueldos={"nombre":this.nombre,"base":this.base,"neto":this.neto};
    this.registro.push(this.sueldos);
  }
}
