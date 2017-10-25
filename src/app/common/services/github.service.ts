import {Inject, Injectable} from '@angular/core';
// import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';




@Injectable()
export class GithubService {

  constructor(
    @Inject('baseUrl') private _baseUrl: string,
    private _http: HttpClient
  ) {

  }

  public getGitHubData(): any {
    return this._http.get(`${this._baseUrl}`)
  }

}
