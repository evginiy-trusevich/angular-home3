import { Component, OnInit } from '@angular/core';
import {GithubService} from '../common/services/github.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public results$: Observable<any>;

  constructor(
    private _githubService: GithubService
  ) {

  }

  ngOnInit() {
    this.results$ = this._githubService.result$$;
  }

}
