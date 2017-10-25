import {Component, OnInit} from '@angular/core';
import {GithubService} from './common/services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'app';
  public repositories: any;

  public constructor(private _gitHubService: GithubService) {

  }

  public ngOnInit(): void {
    this.repositories = this._gitHubService.getGitHubData().subscribe((res: any) => {
      console.log(res);
    })
  }
}
