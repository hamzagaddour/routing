import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit{

  public save : boolean = false


  canDeActivate():boolean{
    if (this.save) {
      return this.save
    } else {
      return confirm("Etes vous enrigester ton Nom")
    }
  }


  ngOnInit(): void {}

}
