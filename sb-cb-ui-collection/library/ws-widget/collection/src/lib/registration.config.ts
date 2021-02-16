import { NsWidgetResolver } from '@ws-widget/resolver'
// Components
import { AvatarPhotoModule } from './avatar-photo/avatar-photo.module'
import { CardBreadcrumbComponent } from './card-breadcrumb/card-breadcrumb.component'
import { CardBreadcrumbModule } from './card-breadcrumb/card-breadcrumb.module'
import { CardChannelComponent } from './card-channel/card-channel.component'
import { CardChannelModule } from './card-channel/card-channel.module'
import { CardContentComponent } from './card-content/card-content.component'
import { CardContentModule } from './card-content/card-content.module'
import { CardLearnComponent } from './card-learn/card-learn.component'
import { CardLearnModule } from './card-learn/card-learn.module'
import { CardWelcomeComponent } from './card-welcome/card-welcome.component'
import { CardNetworkComponent } from './card-network/card-network.component'
import { CardHubsListComponent } from './card-hubs-list/card-hubs-list.component'
import { CardWelcomeModule } from './card-welcome/card-welcome.module'
import { CardNetworkModule } from './card-network/card-network.module'
import { CardHomeNetworkModule } from './card-home-network/card-home-network.module'
import { CardHomeTopModule } from './card-home-top/card-home-top.module'
import { CardBrowseCourseModule } from './card-browse-course/card-browse-course.module'
import { CardHomeDiscussModule } from './card-home-discuss/card-home-discuss.module'
import { ROOT_WIDGET_CONFIG } from './collection.config'
// import { CardActivityComponent } from './card-home-top/card-activity/card-activity.component'
import { CardNetworkHomeComponent } from './card-network-home/card-network-home.component'
import { CardHomeDiscussComponent } from './card-home-discuss/card-home-discuss.component'
import { CardBrowseCourseComponent } from './card-browse-course/card-browse-course.component'
import { CardActivityModule } from './card-activity/card-activity.module'

export const WIDGET_REGISTERED_MODULES = [
  AvatarPhotoModule,
  CardActivityModule,
  CardBreadcrumbModule,
  CardChannelModule,
  CardContentModule,
  CardLearnModule,
  CardWelcomeModule,
  CardHomeNetworkModule,
  CardHomeTopModule,
  CardHomeDiscussModule,
  CardNetworkModule,
  CardBrowseCourseModule,

]

export const WIDGET_REGISTRATION_CONFIG: NsWidgetResolver.IRegistrationConfig[] = [
  {
    widgetType: ROOT_WIDGET_CONFIG.card._type,
    widgetSubType: ROOT_WIDGET_CONFIG.card.breadcrumb,
    component: CardBreadcrumbComponent,
  },
  {
    widgetType: ROOT_WIDGET_CONFIG.card._type,
    widgetSubType: ROOT_WIDGET_CONFIG.card.channel,
    component: CardChannelComponent,
  },
  {
    widgetType: ROOT_WIDGET_CONFIG.card._type,
    widgetSubType: ROOT_WIDGET_CONFIG.card.content,
    component: CardContentComponent,
  },
  {
    widgetType: ROOT_WIDGET_CONFIG.card._type,
    widgetSubType: ROOT_WIDGET_CONFIG.card.learning,
    component: CardLearnComponent,
  },
  {
    widgetType: ROOT_WIDGET_CONFIG.card._type,
    widgetSubType: ROOT_WIDGET_CONFIG.card.welcome,
    component: CardWelcomeComponent,
  },
  {
    widgetType: ROOT_WIDGET_CONFIG.card._type,
    widgetSubType: ROOT_WIDGET_CONFIG.card.network,
    component: CardNetworkComponent,
  },
  // {
  //   widgetType: ROOT_WIDGET_CONFIG.card._type,
  //   widgetSubType: ROOT_WIDGET_CONFIG.card.home_activity,
  //   component: CardActivityComponent,
  // },
  {
    widgetType: ROOT_WIDGET_CONFIG.card._type,
    widgetSubType: ROOT_WIDGET_CONFIG.card.browse_course,
    component: CardBrowseCourseComponent,
  },
  {
    widgetType: ROOT_WIDGET_CONFIG.card._type,
    widgetSubType: ROOT_WIDGET_CONFIG.card.home_network,
    component: CardNetworkHomeComponent,
  },
  {
    widgetType: ROOT_WIDGET_CONFIG.card._type,
    widgetSubType: ROOT_WIDGET_CONFIG.card.home_discuss,
    component: CardHomeDiscussComponent,
  },
  {
    widgetType: ROOT_WIDGET_CONFIG.card._type,
    widgetSubType: ROOT_WIDGET_CONFIG.card.home_hubs,
    component: CardHubsListComponent,
  },
]
