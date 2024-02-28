import { Component } from '@angular/core';

import { CartListComponent } from "../cart-list/cart-list.component";
import { CartTotalComponent } from "../cart-total/cart-total.component";

@Component({
  standalone: true,
  imports: [CartListComponent, CartTotalComponent],
  template: `
    <div class='row'>
      <swv-cart-list/>
    </div>
    <div class='row'>
      <div class='offset-md-6 col-md-6'>
        <swv-cart-total/>
      </div>
    </div>
  `
})
export class CartShellComponent {

}
