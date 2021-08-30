import { ChangeDetectorRef } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit,AfterViewInit {
  exclusive: boolean;

  constructor(private _designUtilityService: DesignUtilityService,private cdr: ChangeDetectorRef) { }
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    this._designUtilityService.exclusive.subscribe(res => {
      this.exclusive = res;
      this.cdr.detectChanges();
  })

  }}
