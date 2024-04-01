import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgxSpinnerService } from 'ngx-spinner';
import { KoalaServiceService } from 'src/app/service/koala-service.service';
import { MatDialog } from '@angular/material/dialog';
import { KoalaEditComponent } from '../koala-edit/koala-edit.component';
import { AppSettings } from 'src/app/common/appsettings';

@Component({
  selector: 'app-koala-list',
  templateUrl: './koala-list.component.html',
  styleUrls: ['./koala-list.component.css']
})
export class KoalaListComponent extends BaseComponent implements OnInit {

  pagin: number[] = [25, 50, 100, 150];

  displayedColumns: string[] = ['editar', 'company_name', 'ruc','contact_number', 'web_page', 'corporate_mail'];
  public tabla!: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(
    public override snackBar: MatSnackBar,
    public override router: Router,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public _service: KoalaServiceService
  ) {
    super(snackBar, router);
  }

  ngOnInit(): void {
    this.spinner.show();
    this.listar();
  }

  listar(){
    this._service.listar().subscribe(
      result => {        
        try {
          console.log("RESULTADO:",result);
          this.tabla = new MatTableDataSource<any>(result);
          this.tabla.sort = this.sort;
          this.tabla.paginator = this.paginator;
          this.spinner.hide();

        } catch (error) {
          this.spinner.hide();
          this.openSnackBar(AppSettings.SERVICE_NO_CONECT_SERVER, 2500);
        } finally {
        }
      }, error => {
        this.spinner.hide();
        this.openSnackBar(error.error, 2500);
      });
  }

  openDialog(element: any): void {
    console.log(element);
    
    const dialogRef = this.dialog.open(KoalaEditComponent, {
      panelClass: 'custom-dialog-container',
      width: '750px',
      data: element != null ? { id: element.id}: null
    });
    dialogRef.afterClosed().subscribe(result => {
      try {
        this.listar();
        if (result.flag) {
          this.openSnackBar(result.mensaje, 2500);
        }
      } catch (error) {
        console.log(error);
        this.listar();
      }
    });
  }

}
