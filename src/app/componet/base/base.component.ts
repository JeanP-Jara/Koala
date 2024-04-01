import { Component, OnInit } from '@angular/core';
import { SnackComponent } from '../snack/snack.component';
import { Router } from '@angular/router';
import { SnackInterface } from 'src/app/interface/snack-interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  objsnack: SnackInterface = {
    mensaje: "",
    tipo: 0
  };


  constructor(
    public snackBar: MatSnackBar, public router: Router
  ){}


  public openSnackBar(mensaje: String, tipo: number) {
    
    this.objsnack.mensaje = mensaje;
    this.objsnack.tipo = tipo;
    this.snackBar.openFromComponent(SnackComponent, {
      duration: tipo,
      data: this.objsnack
    });
    
  }

}
