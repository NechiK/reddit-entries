import {Component, OnDestroy, OnInit} from '@angular/core';
import {EntryService} from '../../services/entry.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sub-reddit',
  templateUrl: './sub-reddit.component.html',
  styleUrls: ['./sub-reddit.component.scss']
})
export class SubRedditComponent implements OnInit, OnDestroy {
  entries;
  entriesLimit = 10;
  entriesSubscription: Subscription;
  subredditName: string;

  private lastParams;

  constructor(private entryService: EntryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.subredditName = params.get('subredditName');
    });
    this.getEntries({
      limit: this.entriesLimit
    });
  }

  changeLimit(limit) {
    this.lastParams.limit = limit;
    this.entriesLimit = limit;
    this.getEntries(this.lastParams);
  }

  nextEntry() {
    if (this.entries.after === null)  {
      return;
    }

    this.getEntries({
      limit: this.entriesLimit,
      after: this.entries.after
    });
  }

  prevEntry() {
    // 'before' property always returns from API as null
    // so this code will just return to first page when user clicks 'Prev' button
    this.getEntries({
      limit: this.entriesLimit,
      before: this.entries.before
    });
  }

  getEntries(params = {}) {
    this.lastParams = params;
    this.entriesSubscription = this.entryService.getEntries(this.subredditName, params).subscribe(result => {
      this.entries = result.data;
    });
  }

  ngOnDestroy() {
    this.entriesSubscription.unsubscribe();
  }

}
