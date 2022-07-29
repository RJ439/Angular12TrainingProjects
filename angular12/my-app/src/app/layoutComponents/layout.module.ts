import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { LeftMenuComponent } from "./leftMenu.component";
import { FooterComponent } from "./footer.component";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";

@NgModule({
    declarations: [HeaderComponent, LeftMenuComponent, FooterComponent, LoginComponent],
    exports: [HeaderComponent, LeftMenuComponent, FooterComponent, LoginComponent],
    imports: [FormsModule]
})

export class LayoutModule {}