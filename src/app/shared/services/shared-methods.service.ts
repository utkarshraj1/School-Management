import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class SharedMethodsService {
  constructor(
    private snackBar: MatSnackBar,
    private cookieService: CookieService,
  ) {}

  /**
   * To open the material snackbar, returns void
   * @param message - Message
   * @param closeButtonText - Close Button Text
   * @param duration - Duration in milliseconds
   */
  openSnackBar(
    message: string,
    closeButtonText: string,
    duration: number,
  ): void {
    this.snackBar.open(message, closeButtonText, {
      duration: duration,
    });
  }

  /**
   * Sets the cookie data that can be used later, returns void
   * @param key - string identifier for the data
   * @param data - data to be stored and shared throughout the application
   */
  setCookieData(key: string, data: any): void {
    this.cookieService.set(key, data);
  }
}
