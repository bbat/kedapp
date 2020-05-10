import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.css']
})
export class VehiculesComponent implements OnInit {
  title: string;
  vehicules: any[];

  constructor() { }

  ngOnInit(): void {
    this.title = 'Liste des véhicules';
    this.vehicules = [
      {
        nom: 'Tondeuse',
        type: 'TD01',
        totalHeures: 42009
      },
      {
        nom: 'Laveuse',
        type: 'LX01',
        totalHeures: 54012
      }
    ];
  }

}
