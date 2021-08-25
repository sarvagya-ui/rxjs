import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor(private _designUtilityService: DesignUtilityService) { }
  obsmsg: any;
  ngOnInit(): void {
    //of
    const obs1 = of('anupam', 'sam', 'ram');
    obs1.subscribe(res =>
      this._designUtilityService.print(res, 'elContainer')
    );

    const obs2 = of({ a: 'anupam', b: 'sam', c: 'ram' });
 obs2.subscribe(res =>
      this.obsmsg = res
    );

    //from
    const obs3 = from(['anupam','sam','ram']);
    obs3.subscribe(res=>
      this._designUtilityService.print(res,'elContainer3')
    );

    const obs4=from("hello");
    obs4.subscribe(res=>{
      this._designUtilityService.print(res,'elContainer4')
    });
  }

}
