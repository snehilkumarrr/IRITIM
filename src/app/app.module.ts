import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';


// Import Modules
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { UserAuthModule } from './user-auth/user-auth.module';
import { CoursesComponent } from './components/courses/courses.component';
import { DiscussionTopicListComponent } from './components/discussion-topic-list/discussion-topic-list.component';
import { DiscussionTopicListModalComponent } from './components/discussion-topic-list-modal/discussion-topic-list-modal.component';
import { FormsModule } from '@angular/forms';
import { DiscussionTopicCommentsComponent } from './components/discussion-topic-comments/discussion-topic-comments.component';
import { DiscussionTopicCommentsInnerComponent } from './components/discussion-topic-comments-inner/discussion-topic-comments-inner.component';
import { DiscussionCommentReplyModalComponent } from './components/discussion-comment-reply-modal/discussion-comment-reply-modal.component';
import { CreateFacultyComponent } from './admin/faculty/faculty.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { register } from 'swiper/element/bundle';
import { AboutComponent } from './about/about.component';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
<<<<<<< HEAD
import { DirectorGeneralComponent } from './about-us-nav-bar/director-general/director-general.component';
import { AddlDirectorGeneralComponent } from './about-us-nav-bar/addl-director-general/addl-director-general.component';
import { FacultyComponent } from './about-us-nav-bar/faculty/faculty.component';
import { StaffComponent } from './about-us-nav-bar/staff/staff.component';
import { MissionComponent } from './about-us-nav-bar/mission/mission.component';
import { VisionComponent } from './about-us-nav-bar/vision/vision.component';
import { QualityPolicyComponent } from './about-us-nav-bar/quality-policy/quality-policy.component';
import { CampusComponent } from './about-us-nav-bar/campus/campus.component';
import { IritmMapComponent } from './about-us-nav-bar/iritm-map/iritm-map.component';
import { ApproachIritmComponent } from './about-us-nav-bar/approach-iritm/approach-iritm.component';
import { RtiComponent } from './about-us-nav-bar/rti/rti.component';
import { PhotoGalleryComponent } from './about-us-nav-bar/photo-gallery/photo-gallery.component';
import { IritmSongComponent } from './about-us-nav-bar/iritm-song/iritm-song.component';
import { TrainingProgrammeCalenderComponent } from './training-information-nav-bar/training-programme-calender/training-programme-calender.component';
import { ForthComingTrainingCoursesComponent } from './training-information-nav-bar/forth-coming-training-courses/forth-coming-training-courses.component';
import { TrainingProgrammeVideosComponent } from './training-information-nav-bar/training-programme-videos/training-programme-videos.component';
import { TrainingProgrammePostersComponent } from './training-information-nav-bar/training-programme-posters/training-programme-posters.component';
import { GemPortalComponent } from './tender-nav-bar/gem-portal/gem-portal.component';
import { IrepsComponent } from './tender-nav-bar/ireps/ireps.component';
import { Irts2019EolBatchComponent } from './probationers-nav-bar/irts-2019-eol-batch/irts-2019-eol-batch.component';
import { Irts2019BatchComponent } from './probationers-nav-bar/irts-2019-batch/irts-2019-batch.component';
import { Irts2018BatchComponent } from './probationers-nav-bar/irts-2018-batch/irts-2018-batch.component';
import { Irts2017BatchComponent } from './probationers-nav-bar/irts-2017-batch/irts-2017-batch.component';
import { Irts2016BatchComponent } from './probationers-nav-bar/irts-2016-batch/irts-2016-batch.component';
import { Irts2015BatchComponent } from './probationers-nav-bar/irts-2015-batch/irts-2015-batch.component';
import { Irts2014BatchComponent } from './probationers-nav-bar/irts-2014-batch/irts-2014-batch.component';
import { OutstandingIrtsProbationersComponent } from './probationers-nav-bar/outstanding-irts-probationers/outstanding-irts-probationers.component';
import { RulesRegardingEolComponent } from './probationers-nav-bar/rules-regarding-eol/rules-regarding-eol.component';
import { PreReadsReferencesComponent } from './probationers-nav-bar/pre-reads-references/pre-reads-references.component';
import { EssentialFormsComponent } from './probationers-nav-bar/essential-forms/essential-forms.component';
import { QuotationNoticesComponent } from './news-events-nav-bar/quotation-notices/quotation-notices.component';
import { NewsAnnouncementsComponent } from './news-events-nav-bar/news-announcements/news-announcements.component';
import { IrtmMagazineComponent } from './news-events-nav-bar/irtm-magazine/irtm-magazine.component';
import { VacanciesComponent } from './news-events-nav-bar/vacancies/vacancies.component';
import { RajbhashaComponent } from './news-events-nav-bar/rajbhasha/rajbhasha.component';
import { ArchivesComponent } from './news-events-nav-bar/archives/archives.component';
import { PhotographsComponent } from './news-events-nav-bar/photographs/photographs.component';
import { HelpPageComponent } from './contact-us-nav-bar/help-page/help-page.component';
import { OtherRailwaySitesComponent } from './contact-us-nav-bar/other-railway-sites/other-railway-sites.component';
import { ComplaintsCommitteeComponent } from './contact-us-nav-bar/complaints-committee/complaints-committee.component';
import { SitemapComponent } from './contact-us-nav-bar/sitemap/sitemap.component';
import { TermsConditionsComponent } from './contact-us-nav-bar/terms-conditions/terms-conditions.component';
import { LibraryComponent } from './knowledge-centre-nav-bar/library/library.component';
import { TrainsAtAGlanceComponent } from './knowledge-centre-nav-bar/trains-at-a-glance/trains-at-a-glance.component';
import { IrAnnualReportComponent } from './knowledge-centre-nav-bar/ir-annual-report/ir-annual-report.component';
import { RailwaySystemMapComponent } from './knowledge-centre-nav-bar/railway-system-map/railway-system-map.component';
import { RollingStockComponent } from './knowledge-centre-nav-bar/rolling-stock/rolling-stock.component';
import { CodesAndManualsComponent } from './knowledge-centre-nav-bar/codes-and-manuals/codes-and-manuals.component';
import { VigilanceComponent } from './knowledge-centre-nav-bar/vigilance/vigilance.component';
import { LawComponent } from './knowledge-centre-nav-bar/law/law.component';
import { CommercialComponent } from './knowledge-centre-nav-bar/commercial/commercial.component';
import { OperatingComponent } from './knowledge-centre-nav-bar/operating/operating.component';
import { SafetyDisasterManagementComponent } from './knowledge-centre-nav-bar/safety-disaster-management/safety-disaster-management.component';
import { PublicPrivatePartnershipComponent } from './knowledge-centre-nav-bar/public-private-partnership/public-private-partnership.component';
import { NonGazettedComponent } from './knowledge-centre-nav-bar/non-gazetted/non-gazetted.component';
import { TendersContractsComponent } from './knowledge-centre-nav-bar/tenders-contracts/tenders-contracts.component';
import { EstablishmentMattersComponent } from './knowledge-centre-nav-bar/establishment-matters/establishment-matters.component';
import { MiscellaneousComponent } from './knowledge-centre-nav-bar/miscellaneous/miscellaneous.component';
import { YogaPhysicalFitnessComponent } from './knowledge-centre-nav-bar/yoga-physical-fitness/yoga-physical-fitness.component';
=======
import { NgSelectModule } from '@ng-select/ng-select';
import { AboutUsComponent } from './about-us/about-us.component';
>>>>>>> main
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
    AboutComponent,
<<<<<<< HEAD
    DirectorGeneralComponent,
    AddlDirectorGeneralComponent,
    FacultyComponent,
    StaffComponent,
    MissionComponent,
    VisionComponent,
    QualityPolicyComponent,
    CampusComponent,
    IritmMapComponent,
    ApproachIritmComponent,
    RtiComponent,
    PhotoGalleryComponent,
    IritmSongComponent,
    TrainingProgrammeCalenderComponent,
    ForthComingTrainingCoursesComponent,
    TrainingProgrammeVideosComponent,
    TrainingProgrammePostersComponent,
    GemPortalComponent,
    IrepsComponent,
    Irts2019EolBatchComponent,
    Irts2019BatchComponent,
    Irts2018BatchComponent,
    Irts2017BatchComponent,
    Irts2016BatchComponent,
    Irts2015BatchComponent,
    Irts2014BatchComponent,
    OutstandingIrtsProbationersComponent,
    RulesRegardingEolComponent,
    PreReadsReferencesComponent,
    EssentialFormsComponent,
    QuotationNoticesComponent,
    NewsAnnouncementsComponent,
    IrtmMagazineComponent,
    VacanciesComponent,
    RajbhashaComponent,
    ArchivesComponent,
    PhotographsComponent,
    HelpPageComponent,
    OtherRailwaySitesComponent,
    ComplaintsCommitteeComponent,
    SitemapComponent,
    TermsConditionsComponent,
    LibraryComponent,
    TrainsAtAGlanceComponent,
    IrAnnualReportComponent,
    RailwaySystemMapComponent,
    RollingStockComponent,
    CodesAndManualsComponent,
    VigilanceComponent,
    LawComponent,
    CommercialComponent,
    OperatingComponent,
    SafetyDisasterManagementComponent,
    PublicPrivatePartnershipComponent,
    NonGazettedComponent,
    TendersContractsComponent,
    EstablishmentMattersComponent,
    MiscellaneousComponent,
    YogaPhysicalFitnessComponent,
=======
    AboutUsComponent,
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    AdminModule,
    UserModule,
    FormsModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
