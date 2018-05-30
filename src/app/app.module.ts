import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AClubMembersComponent } from './users/a-club-members/a-club-members.component';
import { AClubMemberComponent } from './users/a-club-members/a-club-member/a-club-member.component';
import { AClubMemberListComponent } from './users/a-club-members/a-club-member-list/a-club-member-list.component';
import { environment } from '../environments/environment';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AClubMembersComponent,
    AClubMemberComponent,
    AClubMemberListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
