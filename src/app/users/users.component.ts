import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

interface User {
  id : number,
  nom : string,
  prenom : string
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public users : User[] = [
    {
      id : 1,
      nom : "GADDOUR",
      prenom : "Hamza"
    },
    {
      id : 2,
      nom : "CHENCHEN",
      prenom : "Mohamed"
    },
    {
      id : 3,
      nom : "GADDOUR",
      prenom : "Meriam"
    },
    {
      id : 4,
      nom : "GADDOUR",
      prenom : "Nidhal"
    },
    {
      id : 5,
      nom : "GADDOUR",
      prenom : "Mohamed"
    },
  ]

  constructor(private router : Router, private activatedRoute : ActivatedRoute){}
  redirection(user : User){
    //this.router.navigate(['users',user.id])

    this.router.navigate([user.id],{
      relativeTo : this.activatedRoute,
      queryParams : {
        nom : user.nom
      },
      fragment : 'foo'
    })
  }
}
