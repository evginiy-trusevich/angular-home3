import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class GithubService {

  private result$: Subject<any> = new Subject() ;

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

  setData(data: any): void {
    this.result$.next(data);
  }

  get data(): Observable<any> {
    return this.result$.asObservable();
  }

}
