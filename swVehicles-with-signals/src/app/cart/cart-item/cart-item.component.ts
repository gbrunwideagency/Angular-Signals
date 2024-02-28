import { Component, computed, inject, signal, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartItem } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'swv-cart-item',
  standalone: true,
  imports: [DecimalPipe, FormsModule],
  templateUrl: './cart-item.component.html'
})
export class CartItemComponent {
  cartService = inject(CartService);

  cartItem = input.required<CartItem>({alias: 'item'})

  // Hard-coded quantity
  // These could instead come from an inventory system
  qtyArr = signal([1, 2, 3, 4, 5, 6, 7, 8]);

  // When the item changes, recalculate the extended price
  exPrice = computed(() =>
    this.cartItem().quantity * Number(this.cartItem().vehicle.cost_in_credits));

  onQuantitySelected(quantity: number): void {
    // Update the quantity in the item
    this.cartService.updateInCart(this.cartItem(), Number(quantity));
  }

  onRemove(): void {
    this.cartService.removeFromCart(this.cartItem());
  }
}
