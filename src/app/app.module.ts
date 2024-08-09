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
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
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
import { OperatingComponent } from './knowledge-centre-nav-bar/operating/operating.component';
import { SafetyDisasterManagementComponent } from './knowledge-centre-nav-bar/safety-disaster-management/safety-disaster-management.component';
import { PublicPrivatePartnershipComponent } from './public_pvt/public-private-partnership/public-private-partnership.component';
import { NonGazettedComponent } from './Non-G/non-gazetted/non-gazetted.component';
import { TendersContractsComponent } from './knowledge-centre-nav-bar/tenders-contracts/tenders-contracts.component';
import { EstablishmentMattersComponent } from './knowledge-centre-nav-bar/establishment-matters/establishment-matters.component';
import { MiscellaneousComponent } from './knowledge-centre-nav-bar/miscellaneous/miscellaneous.component';
import { YogaPhysicalFitnessComponent } from './knowledge-centre-nav-bar/yoga-physical-fitness/yoga-physical-fitness.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CentralRailwayComponent } from './railway-system-map/central-railway/central-railway.component';
import { WestCentralRailwayComponent } from './railway-system-map/west-central-railway/west-central-railway.component';
import { SouthernRailwayComponent } from './railway-system-map/southern-railway/southern-railway.component';
import { SouthWesternRailwayComponent } from './railway-system-map/south-western-railway/south-western-railway.component';
import { SouthEasternRailwayComponent } from './railway-system-map/south-eastern-railway/south-eastern-railway.component';
import { SouthEastCentralRailwayComponent } from './railway-system-map/south-east-central-railway/south-east-central-railway.component';
import { SouthCentralRailwayComponent } from './railway-system-map/south-central-railway/south-central-railway.component';
import { NorthernRailwayComponent } from './railway-system-map/northern-railway/northern-railway.component';
import { NorthWesternRailwayComponent } from './railway-system-map/north-western-railway/north-western-railway.component';
import { NorthEastFrontierRailwayComponent } from './railway-system-map/north-east-frontier-railway/north-east-frontier-railway.component';
import { NorthCentralRailwayComponent } from './railway-system-map/north-central-railway/north-central-railway.component';
import { NorthEasternRailwayComponent } from './railway-system-map/north-eastern-railway/north-eastern-railway.component';
import { KolkataRailwayComponent } from './railway-system-map/kolkata-railway/kolkata-railway.component';
import { KolkataMetroComponent } from './railway-system-map/kolkata-metro/kolkata-metro.component';
import { EasternRailwayComponent } from './railway-system-map/eastern-railway/eastern-railway.component';
import { EastCoastRailwayComponent } from './railway-system-map/east-coast-railway/east-coast-railway.component';
import { EastCentralRailwayComponent } from './railway-system-map/east-central-railway/east-central-railway.component';
import { WesternRailwayComponent } from './railway-system-map/western-railway/western-railway.component';
import { DfccilMapComponent } from './railway-system-map/dfccil-map/dfccil-map.component';
import { CoachingComponent } from './rolling-stock/coaching/coaching.component';
import { WagonComponent } from './rolling-stock/wagon/wagon.component';
import { MetroComponent } from './rolling-stock/metro/metro.component';
import { LocomotiveComponent } from './rolling-stock/locomotive/locomotive.component';
import { RollingStockSpeedComponent } from './rolling-stock/rolling-stock-speed/rolling-stock-speed.component';
import { IndianRailwaysVigilanceManualComponent } from './vigilance/indian-railways-vigilance-manual/indian-railways-vigilance-manual.component';
import { CvcVigilanceManualComponent } from './vigilance/cvc-vigilance-manual/cvc-vigilance-manual.component';
import { AccidentManualComponent } from './safety-disaster-management/accident-manual/accident-manual.component';
import { GeneralSubsidiaryRulesComponent } from './safety-disaster-management/general-subsidiary-rules/general-subsidiary-rules.component';
import { ZonalDisasterManagementPlanComponent } from './safety-disaster-management/zonal-disaster-management-plan/zonal-disaster-management-plan.component';
import { BlockWorkingManualComponent } from './safety-disaster-management/block-working-manual/block-working-manual.component';
import { OperatingManualComponent } from './operating/operating-manual/operating-manual.component';
import { OperatingManualRailwayBoardComponent } from './operating-manual/operating-manual-railway-board/operating-manual-railway-board.component';
import { OperatingManualLinksComponent } from './operating-manual/operating-manual-links/operating-manual-links.component';
import { OperatingManualZonalRailwaysComponent } from './operating-manual/operating-manual-zonal-railways/operating-manual-zonal-railways.component';
import { GeneralSubsidiaryRulesZonalComponent } from './general-subsidiary-rules/general-subsidiary-rules-zonal/general-subsidiary-rules-zonal.component';
import { GeneralSubsidiaryRulesZonalLinksComponent } from './general-subsidiary-rules/general-subsidiary-rules-zonal-links/general-subsidiary-rules-zonal-links.component';
import { AccidentManualZonalComponent } from './accident-manual/accident-manual-zonal/accident-manual-zonal.component';
import { AccidentManualZonalLinksComponent } from './accident-manual/accident-manual-zonal-links/accident-manual-zonal-links.component';
import { StudeyMaterialComponent } from './tenders-contracts/studey-material/studey-material.component';
import { ProjectReportsComponent } from './tenders-contracts/project-reports/project-reports.component';
import { PptsComponent } from './tenders-contracts/ppts/ppts.component';
import { CasesComponent } from './tenders-contracts/cases/cases.component';
import { CodesManualsComponent } from './establishment-matters/codes-manuals/codes-manuals.component';
import { ImportantCourtCasesComponent } from './establishment-matters/important-court-cases/important-court-cases.component';
import { Archives2011Component } from './archives/archives-2011/archives-2011.component';
import { Archives2012Component } from './archives/archives-2012/archives-2012.component';
import { Archives2013Component } from './archives/archives-2013/archives-2013.component';
import { Archives2014Component } from './archives/archives-2014/archives-2014.component';
import { Archives2015Component } from './archives/archives-2015/archives-2015.component';
import { Archives2016Component } from './archives/archives-2016/archives-2016.component';
import { Archives2017Component } from './archives/archives-2017/archives-2017.component';
import { ReadingMaterialDisasterComponent } from './safety-disaster-management/reading-material-disaster/reading-material-disaster.component';
import { ReadingMaterialComponent } from './operating/reading-material/reading-material.component';
import { CommercialComponent } from './Commercial_bar/commercial/commercial.component';
import { LawPageComponent } from './Law/law-page/law-page.component';
import { ConsumerprotectionComponent } from './Law/consumerprotection/consumerprotection.component';
import { IndianrailwayactComponent } from './Law/indianrailwayact/indianrailwayact.component';
import { AdministrativelawComponent } from './Law/administrativelaw/administrativelaw.component';
import { CompetitionactComponent } from './Law/competitionact/competitionact.component';
import { AadharactComponent } from './Law/aadharact/aadharact.component';
import { RightToInfoComponent } from './Law/right-to-info/right-to-info.component';
import { AllIndiaServicesComponent } from './Law/all-india-services/all-india-services.component';
import { ApprenticeComponent } from './Law/apprentice/apprentice.component';
import { ArbitirationComponent } from './Law/arbitiration/arbitiration.component';
import { CentralReserveComponent } from './Law/central-reserve/central-reserve.component';
import { CentralVigilanceComponent } from './Law/central-vigilance/central-vigilance.component';
import { CitizenshipActComponent } from './Law/citizenship-act/citizenship-act.component';
import { ConsumerProtectionComponent } from './Law/consumer-protection/consumer-protection.component';
import { DisasterManagementComponent } from './Law/disaster-management/disaster-management.component';
import { EnergyConservationComponent } from './Law/energy-conservation/energy-conservation.component';
import { EnvironmentProtectionComponent } from './Law/environment-protection/environment-protection.component';
import { GSTComponent } from './Law/gst/gst.component';
import { IncomeTaxComponent } from './Law/income-tax/income-tax.component';
import { IncomeEvidenceComponent } from './Law/income-evidence/income-evidence.component';
import { IndianPenalCodeComponent } from './Law/indian-penal-code/indian-penal-code.component';
import { RailwayBoardActComponent } from './Law/railway-board-act/railway-board-act.component';
import { ITActComponent } from './Law/it-act/it-act.component';
import { MasterCircularComponent } from './Commercial_bar/master-circular/master-circular.component';
import { TariffComponent } from './Commercial_bar/tariff/tariff.component';
import { IndianRailwayCommercialComponent } from './Commercial_bar/indian-railway-commercial/indian-railway-commercial.component';
import { AuctionComponent } from './Commercial_bar/auction/auction.component';
import { GuidelinesComponent } from './public_pvt/guidelines/guidelines.component';
import { PppComponent } from './public_pvt/ppp/ppp.component';
import { GingerComponent } from './public_pvt/ginger/ginger.component';
import { FrameworkComponent } from './public_pvt/framework/framework.component';
import { PppChallangeComponent } from './public_pvt/ppp-challange/ppp-challange.component';
import { ModelComponent } from './public_pvt/model/model.component';
import { StationMasterComponent } from './Non-G/station-master/station-master.component';
import { CommercialTicketClerksComponent } from './Non-G/commercial-ticket-clerks/commercial-ticket-clerks.component';
import { TrainingModuleComponent } from './Non-G/training-module/training-module.component';
import { AboutUsComponent } from './AboutUS/about-us/about-us.component';
import { DirGenComponent } from './AboutUS/dir-gen/dir-gen.component';
import { AddlDirGenComponent } from './AboutUS/addl-dir-gen/addl-dir-gen.component';
import { IRSComponent } from './Info_services/irs/irs.component';
import { IrmsComponent } from './Info_services/irms/irms.component';
import { IrtsComponent } from './Info_services/irts/irts.component';
import { IrssComponent } from './Info_services/irss/irss.component';
import { IrpsComponent } from './Info_services/irps/irps.component';
import { LearningComponent } from './publications_our/learning/learning.component';
import { MapPdfComponent } from './iritm_map/map-pdf/map-pdf.component';
import { OurPublicationComponent } from './knowledge-centre-nav-bar/our-publication/our-publication.component';
import { EBooksComponent } from './knowledge-centre-nav-bar/e-books/e-books.component';
import { CommonContentComponent } from './common-content/common-content.component';
import { AboutusIritmMapsComponent } from './AboutUS/aboutus-iritm-maps/aboutus-iritm-maps.component';
import { AboutusRtiComponent } from './AboutUS/aboutus-rti/aboutus-rti.component';
import { KnowledgeCommercialComponent } from './knowledge-centre-nav-bar/knowledge-commercial/knowledge-commercial.component';
import { CoordinatorDashboardNewComponent } from './coordinator/coordinator-dashboard-new/coordinator-dashboard-new.component';
import { CoordinatorAppliedCourseNewComponent } from './coordinator/coordinator-applied-course-new/coordinator-applied-course-new.component';
import { CoordinatorAppliedCourseEditComponent } from './coordinator/coordinator-applied-course-edit/coordinator-applied-course-edit.component';
import { LoaderComponent } from './loader/loader.component';
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
    AboutUsComponent,
    CentralRailwayComponent,
    WestCentralRailwayComponent,
    SouthernRailwayComponent,
    SouthWesternRailwayComponent,
    SouthEasternRailwayComponent,
    SouthEastCentralRailwayComponent,
    SouthCentralRailwayComponent,
    NorthernRailwayComponent,
    NorthWesternRailwayComponent,
    NorthEastFrontierRailwayComponent,
    NorthCentralRailwayComponent,
    NorthEasternRailwayComponent,
    KolkataRailwayComponent,
    KolkataMetroComponent,
    EasternRailwayComponent,
    EastCoastRailwayComponent,
    EastCentralRailwayComponent,
    WesternRailwayComponent,
    DfccilMapComponent,
    CoachingComponent,
    WagonComponent,
    MetroComponent,
    LocomotiveComponent,
    RollingStockSpeedComponent,
    IndianRailwaysVigilanceManualComponent,
    CvcVigilanceManualComponent,
    AccidentManualComponent,
    GeneralSubsidiaryRulesComponent,
    ZonalDisasterManagementPlanComponent,
    BlockWorkingManualComponent,
    OperatingManualComponent,
    ReadingMaterialComponent,
    OperatingManualRailwayBoardComponent,
    OperatingManualLinksComponent,
    OperatingManualZonalRailwaysComponent,
    GeneralSubsidiaryRulesZonalComponent,
    GeneralSubsidiaryRulesZonalLinksComponent,
    AccidentManualZonalComponent,
    AccidentManualZonalLinksComponent,
    StudeyMaterialComponent,
    ProjectReportsComponent,
    PptsComponent,
    CasesComponent,
    CodesManualsComponent,
    ImportantCourtCasesComponent,
    Archives2011Component,
    Archives2012Component,
    Archives2013Component,
    Archives2014Component,
    Archives2015Component,
    Archives2016Component,
    Archives2017Component,
    ReadingMaterialDisasterComponent,
    LawPageComponent,
    ConsumerprotectionComponent,
    IndianrailwayactComponent,
    AdministrativelawComponent,
    CompetitionactComponent,
    AadharactComponent,
    RightToInfoComponent,
    AllIndiaServicesComponent,
    ApprenticeComponent,
    ArbitirationComponent,
    CentralReserveComponent,
    CentralVigilanceComponent,
    CitizenshipActComponent,
    ConsumerProtectionComponent,
    DisasterManagementComponent,
    EnergyConservationComponent,
    EnvironmentProtectionComponent,
    GSTComponent,
    IncomeTaxComponent,
    IncomeEvidenceComponent,
    IndianPenalCodeComponent,
    RailwayBoardActComponent,
    ITActComponent,
    ReadingMaterialComponent,
    MasterCircularComponent,
    TariffComponent,
    IndianRailwayCommercialComponent,
    AuctionComponent,
    GuidelinesComponent,
    PppComponent,
    GingerComponent,
    FrameworkComponent,
    PppChallangeComponent,
    ModelComponent,
    StationMasterComponent,
    CommercialTicketClerksComponent,
    TrainingModuleComponent,
    DirGenComponent,
    AddlDirGenComponent,
    IRSComponent,
    IrmsComponent,
    IrtsComponent,
    IrssComponent,
    IrpsComponent,
    LearningComponent,
    MapPdfComponent,
    OurPublicationComponent,
    EBooksComponent,
    CommonContentComponent,
    AboutusIritmMapsComponent,
    AboutusRtiComponent,
    KnowledgeCommercialComponent,
    CoordinatorDashboardNewComponent,
    CoordinatorAppliedCourseNewComponent,
    CoordinatorAppliedCourseEditComponent,
    LoaderComponent,
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
