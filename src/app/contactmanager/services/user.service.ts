import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataStore : {
    users: User[]
  }

  private _users : BehaviorSubject<User[]>;

  constructor(private http: HttpClient) { 
    this.dataStore = {
      users: []
    }
    this._users = new BehaviorSubject<User[]>([]);
  }

  loadAll() {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users';
    this.http.get<User[]>(usersUrl).subscribe(
      data => {
        this.dataStore.users = data;
        this._users.next(Object.assign({}, this.dataStore).users);
      },
      error => {
        console.log("Fetching users failed");
      }
    )
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  getUserId(id: Number) {
    return this.dataStore.users.find(u => u.id == id);
  }

  addUser(user: User): Promise<User> {
    return new Promise((resolver, reject)=> {
      user.id = this.dataStore.users.length + 1;
      this.dataStore.users.push(user);
      this._users.next(Object.assign({}, this.dataStore).users);
      resolver(user);
    });
  }
}
