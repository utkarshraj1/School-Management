import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { FormComponent } from './components/form/form.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations: [
        LoginComponent,
        FormComponent,
        CardComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule
    ],
    providers: []
})
export class LoginModule { }