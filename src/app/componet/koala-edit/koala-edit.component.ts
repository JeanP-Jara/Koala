import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EntidadInterface } from 'src/app/interface/entidad-interface';
import { KoalaServiceService } from 'src/app/service/koala-service.service';
import { BaseComponent } from '../base/base.component';
import { AppSettings } from 'src/app/common/appsettings';

@Component({
  selector: 'app-koala-edit',
  templateUrl: './koala-edit.component.html',
  styleUrls: ['./koala-edit.component.css']
})
export class KoalaEditComponent extends BaseComponent implements OnInit {

  entidad: EntidadInterface = { id: 0, company_name: '', contact_number:'', ruc: '', web_page: '', corporate_mail: '',state: false };
  id: number = 0;

  constructor(
    public dialogRef: MatDialogRef<KoalaEditComponent>,
    private _service: KoalaServiceService,
    @Inject(MAT_DIALOG_DATA) public data: EntidadInterface,
    public _router: Router,
    public override snackBar: MatSnackBar
  ) {
    super(snackBar, _router);
  }

  ngOnInit(): void {
    if(this.data != null){
      this.id = this.data.id;
      this.leerData();  
    }
      
  }

  leerData(){    
    
    this._service.listarxId(this.id).subscribe(
      result => {        
        try {
          //console.log("RESULTADO:",result);     
          this.entidad = result;
          console.log(this.entidad);
          
        } catch (error) {

          this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 2500);
        } finally {
        }
      }, error => {
        this.openSnackBar(error.error, 2500);
      });
  }

  guardarUser(newForm:any) {
    console.log("entidad: " ,this.entidad);  
    if(this.entidad.id != 0){
      console.log("actualzia");
      
      let request = {
        id: this.entidad.id,
        company_name: this.entidad.company_name,
        ruc: this.entidad.ruc,
        contact_number: this.entidad.contact_number,
        web_page: this.entidad.web_page,
        corporate_mail: this.entidad.corporate_mail
      }  
      this._service.updateCompany(request).subscribe(
        result => {
          try {
            console.log(result);          
            this.dialogRef.close({ flag: true, mensaje: 'Registro actualizado' });       
          } catch (error) {
            this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 2500);
          }
        }, error => {
          console.error(error);
          try {
            this.openSnackBar(error.error.Detail, error.error.StatusCode);
          } catch (error) {
            this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 2500);
          }
        });
    }else{
      console.log("Crea");
      let request = {
        company_name : this.entidad.company_name,
        ruc : this.entidad.ruc,
        contact_number : this.entidad.contact_number,
        web_page : this.entidad.web_page,
        corporate_mail : this.entidad.corporate_mail,
      }  
      this._service.crearCompany(request).subscribe(
        result => {
          try {
            console.log(result);   
            this.dialogRef.close({ flag: true, mensaje: 'Registro creado' });       
          } catch (error) {
            this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 2500);
          }
        }, error => {
          console.error(error);
          try {
            this.openSnackBar(error.error.Detail, error.error.StatusCode);
          } catch (error) {
            this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 2500);
          }
        });
    }
    
    
  }

  cerrar(){
    this.dialogRef.close({flag: false, data: null})
  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
