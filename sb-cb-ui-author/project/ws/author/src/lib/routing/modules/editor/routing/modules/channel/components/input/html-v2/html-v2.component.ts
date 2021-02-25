import { IWidgetElementHtml } from '@ws-widget/collection'
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { CONTENT_BASE_WEBHOST_ASSETS } from '../../../../../../../../../constants/apiEndpoints'

@Component({
  selector: 'ws-auth-html-v2',
  templateUrl: './html-v2.component.html',
  styleUrls: ['./html-v2.component.scss'],
})
export class HtmlV2Component implements OnInit {
  showInfo = ''
  @Input() isSubmitPressed = false
  @Input() content!: IWidgetElementHtml
  @Input() identifier = ''
  location = CONTENT_BASE_WEBHOST_ASSETS
  @Output() data = new EventEmitter<{ content: IWidgetElementHtml; isValid: boolean }>()
  dataType: 'html' | 'editor' = 'html'

  constructor() { }

  update(value: any, dataType: any) {
    if (dataType === 'editor') {
      this.content.html = value
    } else if (dataType === 'html') {
      this.content.html = value.target.value
    }
  }

  ngOnInit() { }
}
