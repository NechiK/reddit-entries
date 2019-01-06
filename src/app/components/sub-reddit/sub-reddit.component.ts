import { Component, OnInit } from '@angular/core';
import {EntryService} from '../../services/entry.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sub-reddit',
  templateUrl: './sub-reddit.component.html',
  styleUrls: ['./sub-reddit.component.scss']
})
export class SubRedditComponent implements OnInit {
  entries;
  entriesLimit = 10;
  private lastParams;

  constructor(private entryService: EntryService, private route: ActivatedRoute) { }

  ngOnInit() {
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
    this.getEntries({
      limit: this.entriesLimit,
      before: this.entries.before
    });
  }

  getEntries(params = {}) {
    this.lastParams = params;
    this.entryService.getEntries(this.route.snapshot.params.subredditName, params).subscribe(result => {
      this.entries = result.data;
    });
  }

}
