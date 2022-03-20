import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MaterialItemModules = [
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
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