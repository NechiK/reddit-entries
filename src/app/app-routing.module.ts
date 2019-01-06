import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OneEntryComponent} from './components/one-entry/one-entry.component';
import {SubRedditListComponent} from './components/sub-reddit-list/sub-reddit-list.component';
import {SubRedditComponent} from './components/sub-reddit/sub-reddit.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {SubRedditWrapperComponent} from './components/sub-reddit-wrapper/sub-reddit-wrapper.component';

const routes: Routes = [
  {path: '', component: SubRedditListComponent},
  {path: 'r/:subredditName', component: SubRedditWrapperComponent, children: [
      {path: '', component: SubRedditComponent},
      {path: 'comments/:entryId/:entryName', component: OneEntryComponent},
    ]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
