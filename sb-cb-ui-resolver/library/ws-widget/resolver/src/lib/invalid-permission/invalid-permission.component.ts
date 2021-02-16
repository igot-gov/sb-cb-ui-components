import { Component, OnInit, Input } from '@angular/core'
import { WidgetBaseComponent } from '../widget-base.component'
import { NsWidgetResolver } from '../widget-resolver.model'

@Component({
  selector: 'ws-resolver-invalid-permission',
  templateUrl: './invalid-permission.component.html',
  styleUrls: ['./invalid-permission.component.scss'],
})
export class InvalidPermissionComponent extends WidgetBaseComponent
  implements OnInit, NsWidgetResolver.IWidgetData<any> {
  @Input() widgetType!: string
  @Input() widgetSubType!: string
  @Input() widgetInstanceId?: string
  @Input() widgetData!: any
  showData = true

  ngOnInit() { }
}
