import {Component, OnInit} from '@angular/core';
import {GithubService} from '../common/services/github.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public formModel: FormGroup = new FormGroup({
    searchName: new FormControl('', [Validators.required, Validators.minLength(0)])
  });

  public constructor(private _githubService: GithubService) {
  }

  public ngOnInit(): void {
    (this.formModel.get('searchName') as FormControl).valueChanges
      .debounceTime(1000)
      .switchMap((value: string) => {
        return this._githubService.getGitHubData(value);
      })
      .subscribe((data: any) => {
        this._githubService.results$ = data;
        console.log('Form changes', data);
      })
  }

}
