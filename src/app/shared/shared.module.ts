import { NgModule } from "@angular/core";
import { CommonModule, UpperCasePipe } from "@angular/common";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { TitleComponent } from "./components/title/title.component";
import { CoolInputDirective } from "./directives/cool-input.directive";
import { IsChickenDirective } from "./directives/is-chicken.directive";
import { ChickenDescriptionPipe } from "./pipes/chicken-description.pipe";
import { WordUpperPipe } from "./pipes/word-upper.pipe";
import { RouterModule } from "@angular/router";
import { PopupComponent } from "./components/popup/popup.component";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    ProductCardComponent,
    CoolInputDirective,
    IsChickenDirective,
    ChickenDescriptionPipe,
    WordUpperPipe,
    TitleComponent,
    PopupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UpperCasePipe,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    ProductCardComponent,
    TitleComponent,
    CoolInputDirective,
    IsChickenDirective,
    ChickenDescriptionPipe,
    WordUpperPipe,
    UpperCasePipe,
    PopupComponent,
  ],
})
export class SharedModule {}
