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
import { AboutComponent } from "./about/about.component"
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
import { AboutUsComponent } from './about-us/about-us.component';
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
import { ReadingMaterialComponent } from './Commercial_bar/reading-material/reading-material.component';
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
