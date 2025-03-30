import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from "@angular/core";
import { ProductType } from "../../../../types/product.type";
import { TitleComponent } from "../title/title.component";
import { CartProductService } from "../../services/cart-product.service";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
  encapsulation: ViewEncapsulation.None,
  providers: [CartProductService],
})
export class ProductCardComponent {
  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)
  private _titleComponent!: TitleComponent;

  @ViewChild("productAction")
  private _productAction!: ElementRef;

  constructor(public cartProductService: CartProductService) {
    this.product = {
      id: 0,
      image: "",
      title: "",
      description: "",
      datetime: "",
    };
  }

  // addProductToCart(): void {
  //   this.cartProductService.count++;
  //   this.addToCartEvent.emit(this._titleComponent.title);
  // }
}
