import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  public checkKey(key: string): Observable<any> {
    const body = { key };
    return this.http.post('http://localhost:8080/api/check', body);
  }

}
