import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  constructor(private _designUtilityService: DesignUtilityService) { }
  count: number = 1;

  @ViewChild('addBtn') addBtn: ElementRef;

  ngOnInit(): void {
  } 

  ngAfterViewInit() {

    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let countVal = 'video ' + this.count++;
      console.log(countVal);
      this._designUtilityService.print(countVal, 'elContainer');
      this._designUtilityService.print(countVal, 'elContainer2');
    });
  }


}
