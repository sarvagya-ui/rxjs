import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map, max } from 'rxjs/operators';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  //messages
  obs1: any;
  obs2:any;
  constructor(private _designUtilityService:DesignUtilityService) { }

  //subscription
  sub1: Subscription;
  sub2:Subscription;

  ngOnInit(): void {

    //ex-01
    const broadCastVideos = interval(1000);
    this.sub1 = broadCastVideos.pipe(
      map(data => 'video ' + data)
    ).subscribe(res => {
      this.obs1 = res;
    })

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);


     //ex-02

  
    this.sub2=broadCastVideos.pipe(
    map(data2 => data2* 10)
    ).subscribe(res=>{
          this.obs2=res;
          
    })

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);
    
  
     const obs3=from([
       {id:1,name:'sam'},
       {id:1,name:'ram'},
       {id:1,name:'abc'},
       {id:1,name:'bhs'},
     ]);
     //this will convert array of objects into stream

     obs3.pipe(
       map(data => data.name)
     ).subscribe(res=>{
       this._designUtilityService.print(res,'addLiElement')
     });




  }

  

}
