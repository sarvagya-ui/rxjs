import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit,OnDestroy {

  userName:any;
  constructor(private _designUtilityService:DesignUtilityService ) {
    this._designUtilityService.userName.subscribe(res=>{
      this.userName=res;
    });
   }
  ngOnDestroy(): void {
    this._designUtilityService.exclusive.next(false);
  }

  ngOnInit(): void {
    this._designUtilityService.exclusive.next(true);
  }
  

}
