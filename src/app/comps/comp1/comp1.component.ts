import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  userName:any='Anup';
  constructor(private _designUtilityService:DesignUtilityService) {
    this._designUtilityService.userName.subscribe(res=>{
      this.userName=res
    })
   
   }

  ngOnInit(): void {
  }

  onChange(username:string){
    this._designUtilityService.userName.next(username);
  }

}
