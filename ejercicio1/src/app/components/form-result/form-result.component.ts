import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-form-result',
  templateUrl: './form-result.component.html',
  styleUrls: ['./form-result.component.css']
})
export class FormResultComponent  {

  @Input() resumeInfo: any;
  domain = 'http://fakeurl.com';

  constructor( private http: HttpClient) { }

  addUser(): Observable<string> {
    const params = JSON.stringify(this.resumeInfo);
    const url = this.domain + '/users';

    return this.http.post<string>(url, params, httpOptions)
        .pipe(
            map(
              res => res,
              err => err
            ),
        );
  }

  send() {
    const observable = this.addUser().subscribe(
      res => {console.log(res); },
      err => {console.log(err); }
    );
  }



}
