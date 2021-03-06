import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path:'login', component: LoginComponent,pathMatch: 'full'},
  { path:'details/:id',component: DetailsComponent,pathMatch: 'full'},
  { path:'cart',component: CartComponent,pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard,CartService]
})
export class AppRoutingModule { }
