import {Component, OnInit} from '@angular/core';
import {SubRedditService} from '../../services/sub-reddit.service';
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'app-sub-reddit-list',
  templateUrl: './sub-reddit-list.component.html',
  styleUrls: ['./sub-reddit-list.component.scss']
})
export class SubRedditListComponent implements OnInit {
  subReddits$: Observable<[]>;

  constructor(private subRedditService: SubRedditService) {
  }

  ngOnInit() {
    this.subReddits$ = this.subRedditService.getSubReddits().pipe(pluck('data', 'children'));
  }



}
