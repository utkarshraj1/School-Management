import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SharedMethodsService {

  constructor(private snackBar: MatSnackBar) { }

  /**
   * To open the material snackbar, returns void
   * @param message - Message
   * @param closeButtonText - Close Button Text
   * @param duration - Duration in milliseconds
   */
  openSnackBar(message: string, closeButtonText: string, duration: number): void {
    this.snackBar.open(message, closeButtonText, {
      duration: duration
    });
  }
}
