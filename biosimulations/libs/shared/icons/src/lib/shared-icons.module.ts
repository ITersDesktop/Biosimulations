import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { MatIconModule } from '@angular/material/icon';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { FaIconComponent } from './fa-icon/fa-icon.component';
import {
  fas,
  faHome,
  faLink,
  faExternalLinkAlt,
  faAngleDoubleUp,
  faEnvelope,
  faFileAlt,
  faUser,
  faUserEdit,
  faUserCog,
  faPencilAlt,
  faTasks,
  faSignInAlt,
  faSignOutAlt,
  faQuestionCircle,
  faBookOpen,
  faInfoCircle,
  faBalanceScale,
  faShieldAlt,
  faCommentDots,
  faBug,
  faExclamation,
  faFolderOpen,
  faProjectDiagram,
  faChartBar,
  faPaintBrush,
  faList,
  faTable,
  faDownload,
  faUpload,
  faTerminal,
  faFilter,
  faColumns,
  faSyncAlt,
  faDna,
  faCalculator,
  faCertificate,
  faCog,
  faCogs,
  faDatabase,
  faHashtag,
  faTag,
  faTags,
  faTachometerAlt,
  faCalendarAlt,
  faStopwatch,
  faCopy,
  faCodeBranch,



} from '@fortawesome/free-solid-svg-icons';
import { fab, faGitAlt, faGithub, faDocker, faLinkedin, faOrcid, faCreativeCommons, faCreativeCommonsBy, faCreativeCommonsNc, faCreativeCommonsZero, faCreativeCommonsSa, faCreativeCommonsShare } from '@fortawesome/free-brands-svg-icons';
import { far, faFile, } from '@fortawesome/free-regular-svg-icons';
import { MatIconComponent } from './mat-icon/mat-icon.component';
import { CCIconComponent } from './cc-icon/cc-icon.component';
export { biosimulationsIcon } from './icon/icon.component'
@NgModule({
  imports: [CommonModule, MatIconModule, FontAwesomeModule],
  declarations: [
    IconComponent,
    FaIconComponent,
    MatIconComponent,
    CCIconComponent,
  ],
  exports: [IconComponent,],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BiosimulationsIconsModule {
  constructor(library: FaIconLibrary) {

    library.addIcons(
      faHome,
      faLink,
      faExternalLinkAlt,
      faAngleDoubleUp,
      faEnvelope,
      faFileAlt,
      faUser,
      faUserEdit,
      faUserCog,
      faPencilAlt,
      faTasks,
      faSignInAlt,
      faSignOutAlt,
      faQuestionCircle,
      faBookOpen,
      faInfoCircle,
      faBalanceScale,
      faShieldAlt,
      faCommentDots,
      faBug,
      faExclamation,
      faFolderOpen,
      faProjectDiagram,
      faChartBar,
      faPaintBrush,
      faList,
      faTable,
      faDownload,
      faUpload,
      faTerminal,
      faFilter,
      faColumns,
      faSyncAlt,
      faDna,
      faCalculator,
      faCertificate,
      faCog,
      faCogs,
      faDatabase,
      faHashtag,
      faTag,
      faTags,
      faTachometerAlt,
      faCalendarAlt,
      faStopwatch,
      faCopy,
      faCodeBranch,
      faGitAlt,
      faGithub, faDocker, faLinkedin, faOrcid, faCreativeCommons, faCreativeCommonsBy, faCreativeCommonsNc, faCreativeCommonsZero, faCreativeCommonsSa, faCreativeCommonsShare)

  }
}
