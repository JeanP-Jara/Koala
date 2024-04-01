import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KoalaListComponent } from './componet/koala-list/koala-list.component';
import { WelcomeComponent } from './componet/welcome/welcome.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent}, 
  {path:'koala',component:KoalaListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
