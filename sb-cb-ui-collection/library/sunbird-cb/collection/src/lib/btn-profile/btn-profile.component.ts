import { Component, Input, OnInit, OnDestroy, HostBinding } from '@angular/core'
import { NsWidgetResolver, WidgetBaseComponent } from '@sunbird-cb/resolver'
import { ConfigurationsService, LogoutComponent, NsAppsConfig, NsPage } from '@sunbird-cb/utils'
import { IBtnAppsConfig } from '../btn-apps/btn-apps.model'
import { MatDialog } from '@angular/material'
import { Subscription } from 'rxjs'
import { ROOT_WIDGET_CONFIG } from '../collection.config'
/* tslint:disable*/
import _ from 'lodash'
interface IGroupWithFeatureWidgets extends NsAppsConfig.IGroup {
  featureWidgets: NsWidgetResolver.IRenderConfigWithTypedData<NsPage.INavLink>[]
}
@Component({
  selector: 'ws-widget-btn-profile',
  templateUrl: './btn-profile.component.html',
  styleUrls: ['./btn-profile.component.scss'],
})

export class BtnProfileComponent extends WidgetBaseComponent
  implements OnInit, OnDestroy, NsWidgetResolver.IWidgetData<any> {
  @HostBinding('id')
  public id = 'Profile_link'
  @Input() widgetData!: any
  portalLinks: any[] = []
  private readonly featuresConfig: IGroupWithFeatureWidgets[] = []
  @HostBinding('class')
  public class = 'profile-link'

  sizeM = 'm'
  basicBtnAppsConfig: NsWidgetResolver.IRenderConfigWithTypedData<IBtnAppsConfig> = {
    widgetType: 'actionButton',
    widgetSubType: 'actionButtonApps',
    widgetData: { allListingUrl: '/app/features' },
  }
  settingBtnConfig: NsWidgetResolver.IRenderConfigWithTypedData<IBtnAppsConfig> = {
    widgetType: 'actionButton',
    widgetSubType: 'actionButtonSetting',
    widgetData: { allListingUrl: '/app/features' },
  }
  isPinFeatureAvailable = true
  pinnedApps: NsWidgetResolver.IRenderConfigWithTypedData<NsPage.INavLink>[] = []

  btnAppsConfig!: NsWidgetResolver.IRenderConfigWithTypedData<IBtnAppsConfig>
  btnSettingsConfig!: NsWidgetResolver.IRenderConfigWithTypedData<IBtnAppsConfig>
  private pinnedAppsSubs?: Subscription
  givenName = 'Guest'
  profileImage!: string | null
  disableViewProfile = false
  disableAllFeatures = false
  disableSettings = false
  constructor(
    private configSvc: ConfigurationsService,
    private dialog: MatDialog,
  ) {
    super()
    this.btnAppsConfig = { ...this.basicBtnAppsConfig }
    this.btnSettingsConfig = { ... this.settingBtnConfig }
    if (this.configSvc.userProfile) {
      this.givenName = this.configSvc.userProfile.givenName || ''
      // this.profileImage = this.configSvc.userProfile.source_profile_picture || null
      if (localStorage.getItem(this.configSvc.userProfile.userId)) {
        this.profileImage = localStorage.getItem(this.configSvc.userProfile.userId)
      }
    }
    console.log(this.configSvc.appsConfig)
    if (this.configSvc.appsConfig) {
      const appsConfig = this.configSvc.appsConfig
      const availGroups: NsAppsConfig.IGroup[] = []
      appsConfig.groups.forEach((group: any) => {
        availGroups.push(group)
        // if (group.hasRole.length === 0 || this.accessService.hasRole(group.hasRole)) {
        //   availGroups.push(group)
        // }
      })
      this.featuresConfig = availGroups.map(
        (group: NsAppsConfig.IGroup): IGroupWithFeatureWidgets => (
          {
            ...group,
            featureWidgets: _.compact(group.featureIds.map(
              (id: string): NsWidgetResolver.IRenderConfigWithTypedData<NsPage.INavLink> | undefined => {
              return ({
                    widgetType: ROOT_WIDGET_CONFIG.actionButton._type,
                    widgetSubType: ROOT_WIDGET_CONFIG.actionButton.feature,
                    widgetHostClass: 'my-2 px-2 w-1/2 sm:w-1/3 md:w-1/6 w-lg-1-8 box-sizing-box',
                    widgetData: {
                      config: {
                        type: 'feature-item',
                        useShortName: false,
                        treatAsCard: true,
                      },
                      actionBtn: appsConfig.features[id],
                    },
                  })
                return undefined
              },
            )),
          }),
      )
      console.log(this.featuresConfig)
    }
  }

  ngOnInit() {
    // tslint:disable
    // console.log(this.widgetData)
    // tslint:enable
    this.setPinnedApps()
    this.getPortalLinks()
    if (this.widgetData) {
      if (this.widgetData.actionBtnId) {
        this.id = this.widgetData.actionBtnId
      }
      if (this.widgetData.disableViewProfile) {
        this.disableViewProfile = this.widgetData.disableViewProfile
      }
      if (this.widgetData.disableSettings) {
        this.disableSettings = this.widgetData.disableSettings
      }
      if (this.widgetData.disableAllFeatures) {
        this.disableAllFeatures = this.widgetData.disableAllFeatures
      }
    }

  }

  ngOnDestroy() {
    if (this.pinnedAppsSubs) {
      this.pinnedAppsSubs.unsubscribe()
    }
  }

  logout() {
    this.dialog.open<LogoutComponent>(LogoutComponent)
  }

  setPinnedApps() {
    this.pinnedAppsSubs = this.configSvc.pinnedApps.subscribe(pinnedApps => {
      const appsConfig = this.configSvc.appsConfig
      if (!appsConfig) {
        return
      }
      this.pinnedApps = Array.from(pinnedApps)
        .filter(id => id in appsConfig.features)
        .map(id => ({
          widgetType: ROOT_WIDGET_CONFIG.actionButton._type,
          widgetSubType: ROOT_WIDGET_CONFIG.actionButton.feature,
          widgetHostClass: 'w-1/3 px-2 py-3 box-sizing-box',
          widgetData: {
            config: {
              type: 'feature-item',
              useShortName: true,
            },
            actionBtn: appsConfig.features[id],
          },
        }))
    })
  }

  getPortalLinks() {
    this.featuresConfig.forEach((feature: any) => {
      // console.log(feature)
      if (feature.id === 'portal_admin' && feature.featureWidgets.length > 0) {
        feature.featureWidgets.forEach((fw: any) => {
          this.portalLinks.push(fw)
        })
      } else if (feature.id === 'portal_frac' && feature.featureWidgets.length > 0) {
        feature.featureWidgets.forEach((fw: any) => {
          this.portalLinks.push(fw)
        })
      }
    })
    // console.log(this.portalLinks)
  }
}
