import { Component, OnInit } from '@angular/core';
import {SubRedditService} from '../../services/sub-reddit.service';

@Component({
  selector: 'app-sub-reddit-list',
  templateUrl: './sub-reddit-list.component.html',
  styleUrls: ['./sub-reddit-list.component.scss']
})
export class SubRedditListComponent implements OnInit {
  subReddits = [];

  constructor(private subRedditService: SubRedditService) {}

  ngOnInit() {
    this.subRedditService.getSubReddits().subscribe(result => {
      console.log(result);
      this.subReddits = result.data.children;
    });
  }

}
