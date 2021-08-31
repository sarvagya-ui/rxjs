import { Component, OnInit } from '@angular/core';
import { interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  constructor(private _designUtilityService:DesignUtilityService) { }
  

  ngOnInit(): void {
    const sourceTech = interval(5000).pipe(map(v=>'Tech Video #'+(v+1)),take(5));
    const sourceComedy = interval(2000).pipe(map(v=>'Comedy Video #'+(v+1)),take(3));
    const sourceNews = interval(1500).pipe(map(v=>'news Video #'+(v+1)),take(4));

    const finalOps = merge(sourceTech,sourceComedy,sourceNews);

    finalOps.subscribe(res=>{
      this._designUtilityService.print(res,'elc');
    })
    }

}
