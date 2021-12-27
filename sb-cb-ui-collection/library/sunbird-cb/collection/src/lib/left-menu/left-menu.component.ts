import { LeftMenuService } from './left-menu.service'
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { NsWidgetResolver, WidgetBaseComponent } from '@sunbird-cb/resolver'
import { ILeftMenu, IMenu } from './left-menu.model'
import { defaultImg } from './base64.json'
@Component({
  selector: 'ws-widget-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
})
export class LeftMenuComponent extends WidgetBaseComponent
  implements OnInit, OnDestroy, NsWidgetResolver.IWidgetData<ILeftMenu>  {
  @Input() widgetData!: ILeftMenu
  @Output() clickedTab = new EventEmitter<any>()
  // @Input() Source
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private leftMenuService: LeftMenuService) {
    super()
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.')
  }

  ngOnInit(): void {

  }
  get defaultImage() {
    // tslint:disable
    // console.log('defaultImage')
    // tslint:enable
    return defaultImg
  }
  changeToDefaultImg($event: any) {
    // tslint:disable
    // console.log('changeToDefaultImg')
    // tslint:enable
    $event.target.src = defaultImg
  }
  public isLinkActive(url?: string, index?: number): boolean {
    let returnVal = false
    if (url && index) {
      returnVal = (this.activatedRoute.snapshot.fragment === url)
    } else if (index === 0) {
      returnVal = true
    } else {
      returnVal = false
    }
    return returnVal
  }
  public isLinkActive2(url?: string): boolean {
    let returnval = false
    if (url) {
      const st = this.router.url.split('?')
      if (st && st[0] && st[0] === (url)) {
        returnval = true
      }
      // if(route.url.con)
    }
    return returnval
  }
  getLink(tab: IMenu) {
    if (tab && tab.customRouting && this.activatedRoute.snapshot && this.activatedRoute.snapshot.firstChild && tab.paramaterName) {
      return (tab.routerLink.replace('<param>', this.activatedRoute.snapshot.firstChild.params[tab.paramaterName]))
    }
    return
  }

  isAllowed(tab: IMenu): boolean {
    let returnValue = false
    if (tab.requiredRoles && tab.requiredRoles.length > 0) {
      (tab.requiredRoles).forEach(v => {
        if ((this.widgetData.userRoles || new Set()).has(v)) {
          returnValue = true
        }
      })
    } else {
      returnValue = true
    }
    return returnValue
  }
  public menuClick(tab: any) {
    this.leftMenuService.sendMessage(tab)
  }
}
