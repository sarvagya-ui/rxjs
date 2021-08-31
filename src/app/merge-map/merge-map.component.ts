import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, map, mergeAll, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css'],
})
export class MergeMapComponent implements OnInit {
  constructor(private _designUtilityService: DesignUtilityService) {}

  getData(data) {
    return of(data + ' video uploaded');
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    //exmaple 1 map
    source.pipe(map((res) => this.getData(res))).subscribe((res) => {
      this._designUtilityService.print(res, 'element1');
    });

    //example 2 map + mergeAll
    source
      .pipe(
        map((res) => this.getData(res)),
        mergeAll()
      )
      .subscribe((res) => {
        this._designUtilityService.print(res, 'element2');
      });

    //example 3 mergeMap
    source.pipe(mergeMap((res) => this.getData(res))).subscribe((res) => {
      this._designUtilityService.print(res, 'element3');
    });

    //trial mergeMap with anothe observalbe stream
    source.pipe(mergeMap((res) => res + 'channel')).subscribe((res) => {
      console.log(res);
    });
  }
}
