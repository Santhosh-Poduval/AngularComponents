import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  size: number;
  radius: number;
  energy: number;
  affinity: string;
  metalic: string;
  nonmetalic: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', size: 21, radius: 12, energy: 10, affinity: 'afinity', metalic: 'metalic', nonmetalic: 'nonmetalic' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', size: 21, radius: 12, energy: 10, affinity: 'afinity', metalic: 'metalic', nonmetalic: 'nonmetalic' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', size: 21, radius: 12, energy: 10, affinity: 'afinity', metalic: 'metalic', nonmetalic: 'nonmetalic' }

];


/**
 * @title Autosize sidenav
 */

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {

  fullscreen$: Observable<boolean>;

  showFiller = false;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'size', 'radius', 'energy', 'affinity', 'metalic', 'nonmetalic'];
  dataSource = ELEMENT_DATA;

  public fullName: any;
  public str: any;
  notification = 2;
  showSpinner = false;

 
  
  pullDetails(row: any) {
   /** this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 50000000000000000000000000000); **/
    this.fullName = row.name;
  }

}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */