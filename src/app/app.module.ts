import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueryComponent } from './Client/Http/query/query.component';
import { GroupViewComponent } from './Domain/Groups/group-view/group-view.component';
import { MyGroupsComponent } from './Domain/Groups/my-groups/my-groups.component';
import { MatchViewComponent } from './Domain/Matches/match-view/match-view.component';
import { MatchEntryComponent } from './Domain/Matches/match-entry/match-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    QueryComponent,
    GroupViewComponent,
    MyGroupsComponent,
    MatchViewComponent,
    MatchEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
