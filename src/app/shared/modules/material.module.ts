import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MatIconModule } from "@angular/material/icon";

const MaterialItemModules = [
    MatIconModule
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MaterialItemModules
    ],
    exports: [
        MaterialItemModules
    ]
})
export class MaterialModule { }