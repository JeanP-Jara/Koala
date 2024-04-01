import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent extends BaseComponent implements OnInit {

  constructor(
    public override snackBar: MatSnackBar,
    public override router: Router,
  ) { 
    super(snackBar, router);
  }

  ngOnInit(): void {
  }


  click(): void {
    this.router.navigateByUrl('/koala');
  }

}
