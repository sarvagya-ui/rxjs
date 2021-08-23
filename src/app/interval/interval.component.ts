import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  constructor(private _designUtilityService:DesignUtilityService) { }
  obsMeg: any;
  videoSubscription: Subscription
  ngOnInit(): void {
    //interval operator
    //const broadCastVideos = interval(1000);
    //Timer takes two arguments(due time befor starting , interval after due time)
    //timer(delay,interval)


    const broadCastVideos= timer(5000,2000);

    this.videoSubscription = broadCastVideos.subscribe(res => {
      this.obsMeg = res
      console.log(res);
      this._designUtilityService.print(this.obsMeg,'elContainer');
      this._designUtilityService.print(this.obsMeg,'elContainer2');
      this._designUtilityService.print(this.obsMeg,'elContainer3');

      if(res>=5){
        this.videoSubscription.unsubscribe();
      }

    });
  }

}
