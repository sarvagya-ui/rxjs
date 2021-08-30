import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  userName: any = 'Anup';
  constructor(private _designUtilityService: DesignUtilityService) {
    this._designUtilityService.userName.subscribe(res => {
      this.userName = res
    })

  }

  ngOnInit(): void {
  }
 
  onClick(uname:any){
    this._designUtilityService.userName.next(uname);
  }
}
