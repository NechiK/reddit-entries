import {Component, OnDestroy, OnInit} from '@angular/core';
import {EntryService} from '../../services/entry.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-one-entry',
  templateUrl: './one-entry.component.html',
  styleUrls: ['./one-entry.component.scss']
})
export class OneEntryComponent implements OnInit, OnDestroy {
  entry = {};
  comments = [];
  entrySubscription: Subscription;

  constructor(private entryService: EntryService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.params;
    const parentRouteParams = this.route.parent.snapshot.params;

    this.entrySubscription = this.entryService.getOneEntry({
      subredditName: parentRouteParams.subredditName,
      entryId: routeParams.entryId,
      entryName: routeParams.entryName,
    }).subscribe(result => {
      this.entry = result[0].data.children[0].data;
      this.comments = result[1].data.children;
    });
  }

  ngOnDestroy() {
    this.entrySubscription.unsubscribe();
  }

}
