import { Component, OnInit } from '@angular/core';
import {EntryService} from '../../services/entry.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-one-entry',
  templateUrl: './one-entry.component.html',
  styleUrls: ['./one-entry.component.scss']
})
export class OneEntryComponent implements OnInit {
  entry = {};
  comments;

  constructor(private entryService: EntryService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.params;
    const parentRouteParams = this.route.parent.snapshot.params;

    this.entryService.getOneEntry({
      subredditName: parentRouteParams.subredditName,
      entryId: routeParams.entryId,
      entryName: routeParams.entryName,
    }).subscribe(result => {
      console.log(result);
      this.entry = result[0].data.children[0].data;
      this.comments = result[1].data.children;
    });
  }

  parseComments(comments) {
    const parsedComments = [];
    let tier, replies;
    comments.forEach((comment, index) => {
      tier = 1;
      replies = this.getReplies(comment);
      parsedComments.push({body: comment.body, tier});
    });
  }

  private getReplies(comment) {
    return comment.replies === '' ? null : comment.replies.data.children;
  }

}
