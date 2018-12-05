import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {};
  getUrl = 'https://api.github.com/search/users?q=';
  repoData = [];
  starredRepoData = [];

constructor(private http: HttpClient) {

}

  getUsers(name) {
    return this.http.get(this.getUrl + name);
  }

  getRepos(x) {
    return this.http.get(x);
  }

  getStarredRepos(x) {
    return this.http.get(x);
  }

  search(name) {
    this.getUsers(name).subscribe((data: any) => {
      this.data = data;
    });
    // const shahnoz = (<HTMLInputElement>document.getElementById('search')).value;

  }
  repos (url, login) {
    if (this.repoData[login] && this.repoData[login].length) {
      this.repoData[login] = [];
    } else {
      this.getRepos(url).subscribe((data: any) => {
        if (data.length) {
          this.repoData[login] = data;
        } else {
          alert ('No data found');
        }
      });
    }
  }

  starredRepos (url, login) {
    if (this.starredRepoData[login] && this.starredRepoData[login].length) {
      this.starredRepoData[login] = [];
    } else {
      this.getStarredRepos(url + '/starred').subscribe((data: any) => {
        if (data.length) {
          this.starredRepoData[login] = data;
        } else {
          alert ('No data found');
        }
      });
    }
  }
}
