import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { CartService } from './cart/cart.service';
import { environment } from "../environments/environment";

@Component({
  selector: 'swv-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Star Wars Vehicle Sales';
  cartService = inject(CartService);

  cartCount = computed(() => this.cartService.cartItems().reduce(
    (acc, item) => acc + item.quantity, 0));
  protected readonly environment = environment;
}
