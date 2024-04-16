import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';



// Import Modules
import { AdminModule } from './admin/admin.module';
import { UserAuthModule } from './user-auth/user-auth.module';
import { CoursesComponent } from './components/courses/courses.component';
import { DiscussionTopicListComponent } from './components/discussion-topic-list/discussion-topic-list.component';
import { DiscussionTopicListModalComponent } from './components/discussion-topic-list-modal/discussion-topic-list-modal.component';
import { FormsModule } from '@angular/forms';
import { DiscussionTopicCommentsComponent } from './components/discussion-topic-comments/discussion-topic-comments.component';
import { DiscussionTopicCommentsInnerComponent } from './components/discussion-topic-comments-inner/discussion-topic-comments-inner.component';
import { DiscussionCommentReplyModalComponent } from './components/discussion-comment-reply-modal/discussion-comment-reply-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CoursesComponent,
    DiscussionTopicListComponent,
    DiscussionTopicListModalComponent,
    DiscussionTopicCommentsComponent,
    DiscussionTopicCommentsInnerComponent,
    DiscussionCommentReplyModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    AdminModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
