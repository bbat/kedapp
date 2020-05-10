import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculesComponent } from './vehicules.component';
import { VehiculesListComponent } from './vehicules-list/vehicules-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ CommonModule, SharedModule ],
  declarations: [ VehiculesComponent, VehiculesListComponent ],
  exports: [ VehiculesComponent ]
})
export class VehiculesModule {}
