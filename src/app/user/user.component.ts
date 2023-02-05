import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  public id : string|null = ""
  public nom : string|null = ""
  constructor(private activatedRoute : ActivatedRoute){}
  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      this.id = paramMap.get('id');
      //this.nom = paramMap.get('nom');
    })

    this.activatedRoute.queryParamMap.subscribe((paramMap : ParamMap)=>{
      this.nom = paramMap.get('nom')
    })

    this.activatedRoute.fragment.subscribe((fragment : string)=>{
      console.log(fragment);

    })
  }

}
