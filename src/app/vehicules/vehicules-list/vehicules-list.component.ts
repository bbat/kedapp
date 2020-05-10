import { Component, OnInit, Input } from '@angular/core';

import { IVehicule } from './../../shared/interfaces';

@Component({
  selector: 'app-vehicules-list',
  templateUrl: './vehicules-list.component.html',
  styleUrls: ['./vehicules-list.component.css']
})
export class VehiculesListComponent implements OnInit {
  private VEHICULES: IVehicule[] = [];

  @Input() get vehicules(): IVehicule[]{
    return this.VEHICULES;
  }

  set vehicules(value: IVehicule[]) {
    if (value) {
      this.VEHICULES = value;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  sort(prop: string) {
    // A sorter service will handle the sorting
}

}
