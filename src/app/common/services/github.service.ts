import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class GithubService {

  public results$: any;

  constructor(
    @Inject('baseUrl') private _baseUrl: string,
    private _http: HttpClient
  ) {

  }

  public getGitHubData(value: string): Observable<any> {
    return this._http.get(`${this._baseUrl}search/repositories?q=${value}`)
      .catch((error: HttpErrorResponse): Observable<any> => {
        console.log(error);
        return Observable.of([]);
      });
  }

}
