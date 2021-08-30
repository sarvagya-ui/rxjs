import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  userName=new BehaviorSubject<String>(' ');  
  exclusive =new Subject<boolean>();  
  print(val:any,containerId) {
    let el = document.createElement('li');
    el.innerText =val;

    document.getElementById(containerId).appendChild(el);
  }
}
