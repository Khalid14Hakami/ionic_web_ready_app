import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users = [1,2,3];

  constructor(private httpClient: HttpClient) {}
  //   this.httpClient.get('https://randomuser.me/api/?results=20')
  //     .subscribe(res => {
  //       this.users = res['results'];
  //       console.log(this.users);
  //     },
  //      error => {console.log(error); });
  // }
}
