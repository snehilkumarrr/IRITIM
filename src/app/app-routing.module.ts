import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './user-auth/login/login.component';
import { SignupComponent } from './user-auth/signup/signup.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { CreatecourseComponent } from './admin/createcourse/createcourse.component';
import { ViewCourseComponent } from './admin/view-course/view-course.component';
import { ScheduleCourseComponent } from './admin/schedule-course/schedule-course.component';
import { CreatecoordinatorComponent } from './admin/createcoordinator/createcoordinator.component';
import { ViewcoordinatorComponent } from './admin/viewcoordinator/viewcoordinator.component';
import { EditcoordinatorComponent } from './admin/editcoordinator/editcoordinator.component';
import { EditcourseComponent } from './admin/editcourse/editcourse.component'
import { VehicleReqComponent } from './admin/vehicle-req/vehicle-req.component';
import { DiscussionTopicListComponent } from './components/discussion-topic-list/discussion-topic-list.component';
import { DiscussionTopicCommentsComponent } from './components/discussion-topic-comments/discussion-topic-comments.component';
import { VehicleComponent } from "./user/vehicle/vehicle.component"
import { HostelComponent } from "./user/hostel/hostel.component"
import { AppliedCourseComponent } from "./user/applied-course/applied-course.component"
import { HostelReqtsComponent } from './admin/hostel-reqts/hostel-reqts.component';
import { ViewScheduleCourseComponent } from "./admin/view-schedule-course/view-schedule-course.component"
import { FeedbackComponent } from './user/feedback/feedback.component';
import { CreateFacultyComponent } from './admin/faculty/faculty.component';
import { EditFacultyComponent } from './admin/edit-faculty/edit-faculty.component';
import { ViewFacultyComponent } from './admin/view-faculty/view-faculty.component';
import { AboutComponent } from "./AboutUS/about/about.component"
import { AppliedCoursesComponent } from './admin/applied-courses/applied-courses.component';
import { AddlDirectorGeneralComponent } from './about-us-nav-bar/addl-director-general/addl-director-general.component';
import { ApproachIritmComponent } from './about-us-nav-bar/approach-iritm/approach-iritm.component';
import { CampusComponent } from './about-us-nav-bar/campus/campus.component';
import { DirectorGeneralComponent } from './about-us-nav-bar/director-general/director-general.component';
import { IritmMapComponent } from './about-us-nav-bar/iritm-map/iritm-map.component';
import { IritmSongComponent } from './about-us-nav-bar/iritm-song/iritm-song.component';
import { MissionComponent } from './about-us-nav-bar/mission/mission.component';
import { PhotoGalleryComponent } from './about-us-nav-bar/photo-gallery/photo-gallery.component';
import { QualityPolicyComponent } from './about-us-nav-bar/quality-policy/quality-policy.component';
import { RtiComponent } from './about-us-nav-bar/rti/rti.component';
import { StaffComponent } from './about-us-nav-bar/staff/staff.component';
import { VisionComponent } from './about-us-nav-bar/vision/vision.component';
import { ComplaintsCommitteeComponent } from './contact-us-nav-bar/complaints-committee/complaints-committee.component';
import { EssentialFormsComponent } from './probationers-nav-bar/essential-forms/essential-forms.component';
import { Irts2014BatchComponent } from './probationers-nav-bar/irts-2014-batch/irts-2014-batch.component';
import { Irts2015BatchComponent } from './probationers-nav-bar/irts-2015-batch/irts-2015-batch.component';
import { Irts2016BatchComponent } from './probationers-nav-bar/irts-2016-batch/irts-2016-batch.component';
import { Irts2017BatchComponent } from './probationers-nav-bar/irts-2017-batch/irts-2017-batch.component';
import { Irts2018BatchComponent } from './probationers-nav-bar/irts-2018-batch/irts-2018-batch.component';
import { Irts2019BatchComponent } from './probationers-nav-bar/irts-2019-batch/irts-2019-batch.component';
import { Irts2019EolBatchComponent } from './probationers-nav-bar/irts-2019-eol-batch/irts-2019-eol-batch.component';
import { OutstandingIrtsProbationersComponent } from './probationers-nav-bar/outstanding-irts-probationers/outstanding-irts-probationers.component';
import { PreReadsReferencesComponent } from './probationers-nav-bar/pre-reads-references/pre-reads-references.component';
import { RulesRegardingEolComponent } from './probationers-nav-bar/rules-regarding-eol/rules-regarding-eol.component';
import { FacultyComponent } from './about-us-nav-bar/faculty/faculty.component';
import { HelpPageComponent } from './contact-us-nav-bar/help-page/help-page.component';
import { OtherRailwaySitesComponent } from './contact-us-nav-bar/other-railway-sites/other-railway-sites.component';
import { SitemapComponent } from './contact-us-nav-bar/sitemap/sitemap.component';
import { TermsConditionsComponent } from './contact-us-nav-bar/terms-conditions/terms-conditions.component';
import { ForthComingTrainingCoursesComponent } from './training-information-nav-bar/forth-coming-training-courses/forth-coming-training-courses.component';
import { TrainingProgrammeCalenderComponent } from './training-information-nav-bar/training-programme-calender/training-programme-calender.component';
import { TrainingProgrammePostersComponent } from './training-information-nav-bar/training-programme-posters/training-programme-posters.component';
import { TrainingProgrammeVideosComponent } from './training-information-nav-bar/training-programme-videos/training-programme-videos.component';
import { GemPortalComponent } from './tender-nav-bar/gem-portal/gem-portal.component';
import { IrepsComponent } from './tender-nav-bar/ireps/ireps.component';
import { ArchivesComponent } from './news-events-nav-bar/archives/archives.component';
import { IrtmMagazineComponent } from './news-events-nav-bar/irtm-magazine/irtm-magazine.component';
import { NewsAnnouncementsComponent } from './news-events-nav-bar/news-announcements/news-announcements.component';
import { PhotographsComponent } from './news-events-nav-bar/photographs/photographs.component';
import { QuotationNoticesComponent } from './news-events-nav-bar/quotation-notices/quotation-notices.component';
import { RajbhashaComponent } from './news-events-nav-bar/rajbhasha/rajbhasha.component';
import { VacanciesComponent } from './news-events-nav-bar/vacancies/vacancies.component';
import { CodesAndManualsComponent } from './knowledge-centre-nav-bar/codes-and-manuals/codes-and-manuals.component';
import { EstablishmentMattersComponent } from './knowledge-centre-nav-bar/establishment-matters/establishment-matters.component';
import { IrAnnualReportComponent } from './knowledge-centre-nav-bar/ir-annual-report/ir-annual-report.component';
import { LawComponent } from './knowledge-centre-nav-bar/law/law.component';
import { LibraryComponent } from './knowledge-centre-nav-bar/library/library.component';
import { MiscellaneousComponent } from './knowledge-centre-nav-bar/miscellaneous/miscellaneous.component';
import { NonGazettedComponent } from './Non-G/non-gazetted/non-gazetted.component';
import { OperatingComponent } from './knowledge-centre-nav-bar/operating/operating.component';
import { PublicPrivatePartnershipComponent } from './public_pvt/public-private-partnership/public-private-partnership.component';
import { RailwaySystemMapComponent } from './knowledge-centre-nav-bar/railway-system-map/railway-system-map.component';
import { RollingStockComponent } from './knowledge-centre-nav-bar/rolling-stock/rolling-stock.component';
import { SafetyDisasterManagementComponent } from './knowledge-centre-nav-bar/safety-disaster-management/safety-disaster-management.component';
import { TendersContractsComponent } from './knowledge-centre-nav-bar/tenders-contracts/tenders-contracts.component';
import { TrainsAtAGlanceComponent } from './knowledge-centre-nav-bar/trains-at-a-glance/trains-at-a-glance.component';
import { VigilanceComponent } from './knowledge-centre-nav-bar/vigilance/vigilance.component';
import { YogaPhysicalFitnessComponent } from './knowledge-centre-nav-bar/yoga-physical-fitness/yoga-physical-fitness.component';
import { HostelManagementComponent } from './admin/hostel-management/hostel-management.component';
import { CentralRailwayComponent } from './railway-system-map/central-railway/central-railway.component';
import { DfccilMapComponent } from './railway-system-map/dfccil-map/dfccil-map.component';
import { EastCentralRailwayComponent } from './railway-system-map/east-central-railway/east-central-railway.component';
import { EastCoastRailwayComponent } from './railway-system-map/east-coast-railway/east-coast-railway.component';
import { EasternRailwayComponent } from './railway-system-map/eastern-railway/eastern-railway.component';
import { KolkataMetroComponent } from './railway-system-map/kolkata-metro/kolkata-metro.component';
import { KolkataRailwayComponent } from './railway-system-map/kolkata-railway/kolkata-railway.component';
import { NorthCentralRailwayComponent } from './railway-system-map/north-central-railway/north-central-railway.component';
import { NorthEastFrontierRailwayComponent } from './railway-system-map/north-east-frontier-railway/north-east-frontier-railway.component';
import { NorthEasternRailwayComponent } from './railway-system-map/north-eastern-railway/north-eastern-railway.component';
import { NorthWesternRailwayComponent } from './railway-system-map/north-western-railway/north-western-railway.component';
import { NorthernRailwayComponent } from './railway-system-map/northern-railway/northern-railway.component';
import { SouthCentralRailwayComponent } from './railway-system-map/south-central-railway/south-central-railway.component';
import { SouthEastCentralRailwayComponent } from './railway-system-map/south-east-central-railway/south-east-central-railway.component';
import { SouthEasternRailwayComponent } from './railway-system-map/south-eastern-railway/south-eastern-railway.component';
import { SouthWesternRailwayComponent } from './railway-system-map/south-western-railway/south-western-railway.component';
import { SouthernRailwayComponent } from './railway-system-map/southern-railway/southern-railway.component';
import { WestCentralRailwayComponent } from './railway-system-map/west-central-railway/west-central-railway.component';
import { WesternRailwayComponent } from './railway-system-map/western-railway/western-railway.component';
import { OperatingManualComponent } from './operating/operating-manual/operating-manual.component';
import { ReadingMaterialComponent } from './operating/reading-material/reading-material.component';
import { OperatingManualLinksComponent } from './operating-manual/operating-manual-links/operating-manual-links.component';
import { OperatingManualRailwayBoardComponent } from './operating-manual/operating-manual-railway-board/operating-manual-railway-board.component';
import { OperatingManualZonalRailwaysComponent } from './operating-manual/operating-manual-zonal-railways/operating-manual-zonal-railways.component';
import { CoachingComponent } from './rolling-stock/coaching/coaching.component';
import { LocomotiveComponent } from './rolling-stock/locomotive/locomotive.component';
import { MetroComponent } from './rolling-stock/metro/metro.component';
import { RollingStockSpeedComponent } from './rolling-stock/rolling-stock-speed/rolling-stock-speed.component';
import { WagonComponent } from './rolling-stock/wagon/wagon.component';
import { AccidentManualComponent } from './safety-disaster-management/accident-manual/accident-manual.component';
import { BlockWorkingManualComponent } from './safety-disaster-management/block-working-manual/block-working-manual.component';
import { GeneralSubsidiaryRulesComponent } from './safety-disaster-management/general-subsidiary-rules/general-subsidiary-rules.component';
import { ZonalDisasterManagementPlanComponent } from './safety-disaster-management/zonal-disaster-management-plan/zonal-disaster-management-plan.component';
import { ReadingMaterialDisasterComponent } from './safety-disaster-management/reading-material-disaster/reading-material-disaster.component';
import { CasesComponent } from './tenders-contracts/cases/cases.component';
import { PptsComponent } from './tenders-contracts/ppts/ppts.component';
import { ProjectReportsComponent } from './tenders-contracts/project-reports/project-reports.component';
import { StudeyMaterialComponent } from './tenders-contracts/studey-material/studey-material.component';
import { CvcVigilanceManualComponent } from './vigilance/cvc-vigilance-manual/cvc-vigilance-manual.component';
import { IndianRailwaysVigilanceManualComponent } from './vigilance/indian-railways-vigilance-manual/indian-railways-vigilance-manual.component';
import { AccidentManualZonalComponent } from './accident-manual/accident-manual-zonal/accident-manual-zonal.component';
import { AccidentManualZonalLinksComponent } from './accident-manual/accident-manual-zonal-links/accident-manual-zonal-links.component';
import { GeneralSubsidiaryRulesZonalComponent } from './general-subsidiary-rules/general-subsidiary-rules-zonal/general-subsidiary-rules-zonal.component';
import { GeneralSubsidiaryRulesZonalLinksComponent } from './general-subsidiary-rules/general-subsidiary-rules-zonal-links/general-subsidiary-rules-zonal-links.component';
import { CodesManualsComponent } from './establishment-matters/codes-manuals/codes-manuals.component';
import { ImportantCourtCasesComponent } from './establishment-matters/important-court-cases/important-court-cases.component';
import { Archives2011Component } from './archives/archives-2011/archives-2011.component';
import { Archives2012Component } from './archives/archives-2012/archives-2012.component';
import { Archives2013Component } from './archives/archives-2013/archives-2013.component';
import { Archives2014Component } from './archives/archives-2014/archives-2014.component';
import { Archives2015Component } from './archives/archives-2015/archives-2015.component';
import { Archives2016Component } from './archives/archives-2016/archives-2016.component';
import { Archives2017Component } from './archives/archives-2017/archives-2017.component';
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
import { CommercialComponent } from './Commercial_bar/commercial/commercial.component';
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
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'register', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent },
  { path: 'userDashboard', component: UserDashboardComponent },
  { path: 'CreateCourse', component: CreatecourseComponent },
  { path: 'ViewCourse', component: ViewCourseComponent },
  { path: 'ScheduleCourse', component: ScheduleCourseComponent },
  { path: 'CreateCoordinator', component: CreatecoordinatorComponent },
  { path: 'ViewCoordinator', component: ViewcoordinatorComponent },
  { path: 'Editcoordinator/:id', component: EditcoordinatorComponent },
  { path: 'Editcourse/:id', component: EditcourseComponent },
  { path: 'DiscussionTopicList', component: DiscussionTopicListComponent },
  { path: 'DiscussionTopicComments', component: DiscussionTopicCommentsComponent },
  { path: 'Vehicle', component: VehicleComponent },
  { path: 'Hostel', component: HostelComponent },
  { path: "ApplyCourse", component: AppliedCourseComponent },
  { path: "HostelRequest", component: HostelReqtsComponent },
  { path: "ViewScheduleCourse", component: ViewScheduleCourseComponent },
  { path: "VehicleReq", component: VehicleReqComponent },
  { path: "FeedBack", component: FeedbackComponent },
  { path: 'CreateFaculty', component: CreateFacultyComponent },
  { path: 'EditFaculty/:id', component: EditFacultyComponent },
  { path: 'ViewFaculty', component: ViewFacultyComponent },
  { path: 'Mission', component: AboutComponent },
  { path: 'AppliedCourse', component: AppliedCoursesComponent },
  { path: 'addl-director-general', component: AddlDirectorGeneralComponent},
  { path: 'approach-iritm', component:ApproachIritmComponent},
  { path: 'campus' , component:CampusComponent},
  { path: 'director-general',component:DirectorGeneralComponent},
  { path: 'faculty',component:FacultyComponent},
  { path: 'iritm-map',component:IritmMapComponent},
  { path: 'iritm-song',component:IritmSongComponent},
  { path: 'mission',component:MissionComponent},
  { path: 'photo-gallery',component:PhotoGalleryComponent},
  { path: 'quality-policy',component:QualityPolicyComponent},
  { path: 'rti',component:RtiComponent},
  { path: 'staff',component:StaffComponent},
  { path: 'vision',component:VisionComponent},
  { path: 'complaints-committee', component:ComplaintsCommitteeComponent},
  { path: 'help-page', component:HelpPageComponent},
  { path: 'other-railway-sites', component:OtherRailwaySitesComponent},
  { path: 'sitemap', component:SitemapComponent},
  { path: 'terms-conditions', component:TermsConditionsComponent},
  { path: 'essential-forms', component:EssentialFormsComponent},
  { path: 'irts-2014-batch', component:Irts2014BatchComponent},
  { path: 'irts-2015-batch', component:Irts2015BatchComponent},
  { path: 'irts-2016-batch', component:Irts2016BatchComponent},
  { path: 'irts-2017-batch', component:Irts2017BatchComponent},
  { path: 'irts-2018-batch', component:Irts2018BatchComponent},
  { path: 'irts-2019-batch', component:Irts2019BatchComponent},
  { path: 'irts-2019-eol-batch', component:Irts2019EolBatchComponent},
  { path: 'outstanding-irts-probationers', component:OutstandingIrtsProbationersComponent},
  { path: 'pre-reads-references', component:PreReadsReferencesComponent},
  { path: 'rules-regarding-eol', component:RulesRegardingEolComponent},
  { path: 'forth-coming-training-courses', component:ForthComingTrainingCoursesComponent},
  { path: 'training-programme-calender', component:TrainingProgrammeCalenderComponent},
  { path: 'training-programme-posters', component:TrainingProgrammePostersComponent},
  { path: 'training-programme-videos', component:TrainingProgrammeVideosComponent},
  { path: 'gem-portal', component:GemPortalComponent},
  { path: 'ireps', component:IrepsComponent},
  { path: 'archives', component:ArchivesComponent},
  { path: 'irtm-magazine', component:IrtmMagazineComponent},
  { path: 'news-announcements', component:NewsAnnouncementsComponent},
  { path: 'photographs', component:PhotographsComponent},
  { path: 'quotation-notices', component:QuotationNoticesComponent},
  { path: 'rajbhasha', component:RajbhashaComponent},
  { path: 'vacancies', component:VacanciesComponent},
  { path: 'codes-and-manuals',component:CodesAndManualsComponent},
  { path: 'commercial',component:CommercialComponent},
  { path: 'establishment-matters', component:EstablishmentMattersComponent},
  { path: 'ir-annual-report', component:IrAnnualReportComponent},
  { path: 'law', component:LawComponent},
  { path: 'library', component:LibraryComponent},
  { path: 'miscellaneous', component:MiscellaneousComponent},
  { path: 'non-gazetted', component:NonGazettedComponent},
  { path: 'operating', component:OperatingComponent},
  { path: 'public-private-partnership', component:PublicPrivatePartnershipComponent},
  { path: 'railway-system-map', component:RailwaySystemMapComponent},
  { path: 'rolling-stock', component:RollingStockComponent},
  { path: 'safety-disaster-management', component:SafetyDisasterManagementComponent},
  { path: 'tenders-contracts', component:TendersContractsComponent},
  { path: 'trains-at-a-glance',component:TrainsAtAGlanceComponent},
  { path: 'vigilance', component:VigilanceComponent},
  { path: 'yoga-physical-fitness', component:YogaPhysicalFitnessComponent},
  { path: 'HostelManagement', component: HostelManagementComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'DirectorGeneral', component: DirGenComponent },
  { path: 'AddlDirectorGeneral', component: AddlDirGenComponent },
  { path: 'central-railway', component:CentralRailwayComponent},
  { path: 'dfccil-map', component:DfccilMapComponent},
  { path: 'east-central-railway', component:EastCentralRailwayComponent},
  { path: 'east-coast-railway', component:EastCoastRailwayComponent},
  { path: 'eastern-railway', component:EasternRailwayComponent},
  { path: 'kolkata-metro', component:KolkataMetroComponent},
  { path: 'kolkata-railway', component:KolkataRailwayComponent},
  { path: 'north-central-railway', component:NorthCentralRailwayComponent},
  { path: 'north-east-frontier-railway', component:NorthEastFrontierRailwayComponent},
  { path: 'north-eastern-railway', component:NorthEasternRailwayComponent},
  { path: 'north-western-railway', component:NorthWesternRailwayComponent},
  { path: 'northern-railway', component:NorthernRailwayComponent},
  { path: 'south-central-railway', component:SouthCentralRailwayComponent},
  { path: 'south-east-central-railway', component:SouthEastCentralRailwayComponent},
  { path: 'south-eastern-railway', component:SouthEasternRailwayComponent},
  { path: 'south-western-railway', component:SouthWesternRailwayComponent},
  { path: 'southern-railway', component:SouthernRailwayComponent},
  { path: 'west-central-railway', component:WestCentralRailwayComponent},
  { path: 'western-railway', component:WesternRailwayComponent},
  { path: 'operating-manual', component:OperatingManualComponent},
  { path: 'reading-material', component:ReadingMaterialComponent},
  { path: 'operating-manual-links', component:OperatingManualLinksComponent},
  { path: 'operating-manual-railway-board', component:OperatingManualRailwayBoardComponent},
  { path: 'operating-manual-zonal-railways', component:OperatingManualZonalRailwaysComponent},
  { path: 'coaching', component:CoachingComponent},
  { path: 'locomotive', component:LocomotiveComponent},
  { path: 'metro', component:MetroComponent},
  { path: 'rolling-stock-speed', component:RollingStockSpeedComponent},
  { path: 'wagon', component:WagonComponent},
  { path: 'accident-manual', component:AccidentManualComponent},
  { path: 'block-working-manual', component:BlockWorkingManualComponent},
  { path: 'general-subsidiary-rules', component:GeneralSubsidiaryRulesComponent},
  { path: 'zonal-disaster-management-plan', component:ZonalDisasterManagementPlanComponent},
  { path: 'reading-material-disaster', component:ReadingMaterialDisasterComponent},
  { path: 'cases', component:CasesComponent},
  { path: 'ppts', component:PptsComponent},
  { path: 'project-reports', component:ProjectReportsComponent},
  { path: 'studey-material', component:StudeyMaterialComponent},
  { path: 'cvc-vigilance-manual', component:CvcVigilanceManualComponent},
  { path: 'indian-railways-vigilance-manual', component:IndianRailwaysVigilanceManualComponent},
  { path: 'accident-manual-zonal', component:AccidentManualZonalComponent},
  { path: 'accident-manual-zonal-links', component:AccidentManualZonalLinksComponent},
  { path: 'general-subsidiary-rules-zonal', component:GeneralSubsidiaryRulesZonalComponent},
  { path: 'general-subsidiary-rules-zonal-links', component:GeneralSubsidiaryRulesZonalLinksComponent},
  { path: 'codes-manuals', component:CodesManualsComponent},
  { path: 'important-court-cases', component:ImportantCourtCasesComponent},
  { path: 'archives-2011', component:Archives2011Component},
  { path: 'archives-2012', component:Archives2012Component},
  { path: 'archives-2013', component:Archives2013Component},
  { path: 'archives-2014', component:Archives2014Component},
  { path: 'archives-2015', component:Archives2015Component},
  { path: 'archives-2016', component:Archives2016Component},
  { path: 'archives-2017', component:Archives2017Component},
  { path: 'lawPage', component: LawPageComponent },
  { path: 'consumerprotection', component: ConsumerprotectionComponent },
  { path: 'indianrailwayact', component:IndianrailwayactComponent  },
  { path: 'administrativelaw', component:AdministrativelawComponent  },
  { path: 'competitionact', component:CompetitionactComponent  },
  { path: 'aadharact', component:AadharactComponent  },
  { path: 'right_to_info', component:RightToInfoComponent  },
  { path: 'apprentice', component:ApprenticeComponent  },
  { path: 'arbitiration', component:ArbitirationComponent  },
  { path: 'central_reserve', component:CentralReserveComponent  },
  { path: 'central_vigilance', component:CentralVigilanceComponent  },
  { path: 'citizenship_act', component:CitizenshipActComponent  },
  { path: 'consumer_protection', component:ConsumerProtectionComponent  },
  { path: 'disaster_management', component:DisasterManagementComponent  },
  { path: 'energy_conservation', component:EnergyConservationComponent  },
  { path: 'environment_protection', component:EnvironmentProtectionComponent  },

  { path: 'GST', component:GSTComponent  },
  { path: 'income_tax', component:IncomeTaxComponent  },

  { path: 'income_evidence', component:IncomeEvidenceComponent  },
  { path: 'indian_penal_code', component:IndianPenalCodeComponent  },
  { path: 'railway_board_act', component:RailwayBoardActComponent  },
  { path: 'IT_act', component:ITActComponent  },
  { path: 'reading_material', component:ReadingMaterialComponent  },
  { path: 'master_circular', component:MasterCircularComponent  },
  { path: 'tariff', component:TariffComponent  },
  { path: 'indian_railway_commercial', component:IndianRailwayCommercialComponent  },
  { path: 'auction', component:AuctionComponent  },

  { path: 'guidelines', component:GuidelinesComponent  },
  { path: 'ppp', component:PppComponent  },
  { path: 'ginger', component:GingerComponent  },
  { path: 'framework', component:FrameworkComponent  },
  { path: 'ppp_challange', component:PppChallangeComponent  },

  { path: 'model', component:ModelComponent  },
  { path: 'station_master', component:StationMasterComponent  },
  { path: 'commercial_ticket_clerks', component:CommercialTicketClerksComponent  },
  { path: 'training_module', component:TrainingModuleComponent  },









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }