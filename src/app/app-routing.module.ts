import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GlobalMenus } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ViewComponent} from './view/view.component';


const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:"full"},
  {path:"home",component:HomeComponent,children:[
    {path:'view/:id',component:ViewComponent},
  ]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:'edit/:id',component:RegisterComponent},
  {path:'view/:id',component:ViewComponent},
  {path:"**", component:NotfoundComponent}
];

 //const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  menus = GlobalMenus;
  constructor(){
      // for(let menu of this.menus){
      //   let comp = menu.title+"Component";
      //   routes.push({path:menu.path,component: comp});
      // }
      //console.log(routes);
  }
}
