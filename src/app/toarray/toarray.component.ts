import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { toArray, take } from 'rxjs/operators';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.css']
})
export class ToarrayComponent implements OnInit {

  constructor(private _designUtilityService:DesignUtilityService) { }


  obsmgs:any;
  ngOnInit(): void {
    //first created a observable stream (Array into stream)
   const obs=from([3,4,5,6]);
   //then before subscribing converted that stram into array stream(stream into array stream)
   obs.pipe(toArray()).subscribe(res=>{
     console.log(res);
   this._designUtilityService.print(res,'elContainer')
     
   })

   const obs2 = of([{name:'abc',class:8},
   {name:'def',class:10}]);

   obs2.pipe(toArray()).subscribe(res=>{
     this.obsmgs=res;
     console.log(this.obsmgs);
     
     console.log(this.obsmgs[1][0].name);
     
     
   })

  }

}
