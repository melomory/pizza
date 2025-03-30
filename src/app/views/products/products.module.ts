import { NgModule } from "@angular/core";
import { CommonModule, UpperCasePipe } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsComponent } from "./products/products.component";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ProductsComponent, ProductsComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule, RouterModule, UpperCasePipe],
  exports: [ProductsRoutingModule],
})
export class ProductsModule {}
