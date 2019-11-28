import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { CartComponent } from './Components/cart/cart.component';
import { GoodsComponent } from './Components/goods/goods.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AuthGuard } from './services/guard/auth.guard';


const routes: Routes = [
  { path:'' , component:HomeComponent, data: {index:0} },
  { path:'login' , component:LoginComponent },
  { path:'signup' , component:SignupComponent },
  { path:'cart' , component:CartComponent , canActivate : [AuthGuard], data: {index:1} },
  { path:'admin' , component:GoodsComponent},
  { path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
