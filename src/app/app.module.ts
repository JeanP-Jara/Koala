import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackComponent } from './componet/snack/snack.component';
import { BaseComponent } from './componet/base/base.component';
import { KoalaEditComponent } from './componet/koala-edit/koala-edit.component';
import { KoalaListComponent } from './componet/koala-list/koala-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { WelcomeComponent } from './componet/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    SnackComponent,
    BaseComponent,
    KoalaEditComponent,
    KoalaListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    NgxSpinnerModule,
    MatPaginatorModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
