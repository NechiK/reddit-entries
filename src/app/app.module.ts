import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { OneEntryComponent } from './components/one-entry/one-entry.component';
import { SubRedditListComponent } from './components/sub-reddit-list/sub-reddit-list.component';
import { SubRedditComponent } from './components/sub-reddit/sub-reddit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SubRedditWrapperComponent } from './components/sub-reddit-wrapper/sub-reddit-wrapper.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OneEntryComponent,
    SubRedditListComponent,
    SubRedditComponent,
    NotFoundComponent,
    SubRedditWrapperComponent,
    CommentComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
