import {Component, OnInit} from '@angular/core';
import {GithubService} from '../common/services/github.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
// import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public formModel: FormGroup = new FormGroup({
    searchName: new FormControl('', [Validators.required, Validators.minLength(0)])
  });
  public loading: boolean;

  public constructor(private _githubService: GithubService) {
  }

  public ngOnInit(): void {

    this.loading = false;
    (this.formModel.get('searchName') as FormControl).valueChanges
      .debounceTime(1000)
      .switchMap((value: string) => {
      this.loading = true;
        this._githubService.setData([]);
        return this._githubService.getGitHubData(value);
      })
      .subscribe((data: any) => {
        this.loading = false;
        this._githubService.setData(data);
      })
  }

}
