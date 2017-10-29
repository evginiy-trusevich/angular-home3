import { Component, OnInit } from '@angular/core';
import {GithubService} from '../common/services/github.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public results$: any;
  public message: boolean;

  constructor(
    private _githubService: GithubService
  ) { }

  ngOnInit() {
    this._githubService.data
      .subscribe((result: any) => {
      this.results$ = result.items;
      })
  }

}
