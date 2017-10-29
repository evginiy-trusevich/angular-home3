import {Component, OnInit} from '@angular/core';
import {GithubService} from '../common/services/github.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public formModel: FormGroup = new FormGroup({
    searchName: new FormControl('', [Validators.required, Validators.minLength(0)])
  });

  public loading$$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public constructor(
    private _githubService: GithubService
  ) {

  }

  public ngOnInit(): void {
    this._githubService.result$$ = (this.formModel.get('searchName') as FormControl).valueChanges
      .do(() => this.loading$$.next(true))
      .debounceTime(300)
      .switchMap((value: string) => this._githubService.getGitHubData(value))
      .do(() => this.loading$$.next(false));
  }

}
