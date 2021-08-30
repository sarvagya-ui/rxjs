import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }
  data:any;
  data2:any;
  dataArr=[
    { id : 1,name : 'sarvagya pandey', gender:'Alpha male'},
    { id : 2,name : 'Kohli', gender:'normal male'},
    { id : 3,name : 'Dhoniji', gender:'beta male'}
  ];

  ngOnInit(): void {
     const source = from(this.dataArr);

     //Ex-01
     source.pipe(filter(data => data.name.length >6),toArray()).subscribe(res=>{
       this.data=res;
       
     })
     //Ex-02

     //const source2 = from(this.dataArr);
     source.pipe(filter(rese => rese.gender == 'Alpha male'),toArray()).subscribe(res=>{
      this.data2=res;
      
    })

  }

}
