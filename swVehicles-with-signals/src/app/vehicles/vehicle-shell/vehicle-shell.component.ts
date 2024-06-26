import { Component } from '@angular/core';

import { VehicleListComponent } from "../vehicle-list/vehicle-list.component";
import { VehicleDetailComponent } from "../vehicle-detail/vehicle-detail.component";

@Component({
  selector: 'swv-vehicle-shell',
  standalone: true,
  template: `
  <div class='row'>
    <div class='col-md-4'>
        <swv-vehicle-list></swv-vehicle-list>
    </div>
    <div class='col-md-8'>
        <swv-vehicle-detail></swv-vehicle-detail>
    </div>
</div>
  `,
  imports: [VehicleListComponent, VehicleDetailComponent]
})
export class VehicleShellComponent {

}
