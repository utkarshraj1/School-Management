import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudMethodsService {

  constructor(private http: HttpClient) { }

  /**
   * posts the body to the supplied url, returns an Observable
   * @param url - url of the API
   * @param body - object that is to be posted
   */
  postMethod(url: string, body: any): Observable<any> {
    return this.http.post<any>(url, body);
  }
}
