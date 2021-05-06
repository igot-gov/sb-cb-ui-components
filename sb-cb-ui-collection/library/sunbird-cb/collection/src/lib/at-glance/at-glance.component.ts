import { Component, OnInit, Input } from '@angular/core'
import { IAtGlanceComponentData } from './at-glance.model'
import { WidgetBaseComponent, NsWidgetResolver } from '@sunbird-cb/resolver'
@Component({
  selector: 'ws-widget-at-glance',
  templateUrl: './at-glance.component.html',
  styleUrls: ['./at-glance.component.scss'],
})
export class AtGlanceComponent extends WidgetBaseComponent
  implements OnInit, NsWidgetResolver.IWidgetData<IAtGlanceComponentData.IData> {
  @Input() widgetData!: IAtGlanceComponentData.IData
  containerClass = ''

  ngOnInit() {

  }
  get getPreviewLink() {
    if (this.widgetData && this.widgetData.contentId) {
      return `/author/toc/${this.widgetData.contentId}/overview`
    }
    return null
  }
  get getCourseLink() {
    return this.widgetData.customLink
  }
  get getDuration(): number {
    if (this.widgetData && this.widgetData.duration) {
      return parseInt(this.widgetData.duration, 10)
    } return 0
  }
}
