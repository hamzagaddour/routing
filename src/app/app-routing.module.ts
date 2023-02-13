import { UsersComponent } from './users/users.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {
    path : "",
    component : HomepageComponent
  },
  {
    path : "users",
    canActivate : [AuthGuard],
    canActivateChild:[AuthGuard],
    component : UsersComponent,
    children : [
      {
        path : ":id/edit",
        canDeactivate:[AuthGuard],
        component : UserEditComponent
      },
      {
        path : ":id",
        data:{
          title : "User Liste"
        },
        resolve:{
          user: AuthGuard
        },
        component : UserComponent
      },
    ]
  },
  {path:"**", redirectTo:""}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
