import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environments';
import { User } from '../common/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private http: HttpClient ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${API_PATH}/users`);
  }
}
