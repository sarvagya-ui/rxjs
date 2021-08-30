import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {

  constructor(private _designUtilityService:DesignUtilityService) { 
    
  }
  asyncVideoEmit:any;
  ngOnInit(): void {
    this._designUtilityService.asyncVideoEmit.subscribe(res=>{
      this.asyncVideoEmit=res;
    });
  }
  onVideoAdd(Video:any){
     console.log(Video);
     this._designUtilityService.asyncVideoEmit.next(Video);
     
  }
  onComplete(){
   this._designUtilityService.asyncVideoEmit.complete();
  }

}
