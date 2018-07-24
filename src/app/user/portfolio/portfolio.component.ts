import { Component, OnInit, AfterContentInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, AfterContentInit {

  jobList = [];
  jobDetail;
  jobTag: HTMLElement;


  constructor(
    private _userService: UserService
  ) {
    this._userService.getAllJobs().then(
      query => {
        query.forEach((doc) => {
          this.jobList.push(doc.data());
      });
      });
  }

  ngOnInit() {
  }
  ngAfterContentInit () {
    console.log(this.jobList);

  }
  toggleDetails(i) {
    const job = this.jobList[i];
    this.jobDetail = job;
    if (typeof job.tags === 'string') {
      this.jobDetail.tags = job.tags.split(',');
    }

  }
  randomizeColor() {
    const colors = ['#636e72', '#6c5ce7', '#d63031', '#192a56', '#00b894', '#0984e3'];
    const rand = Math.floor(Math.random() * Math.floor(colors.length));
    return colors[rand];
  }
}
