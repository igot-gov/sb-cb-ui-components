import { Component, OnInit, Input } from '@angular/core'
import { NSContent } from '../../../../interface/content'

@Component({
  selector: 'ws-auth-root-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  @Input() comments: NSContent.IComments[] = []
  constructor() { }

  ngOnInit() {
  }

}
