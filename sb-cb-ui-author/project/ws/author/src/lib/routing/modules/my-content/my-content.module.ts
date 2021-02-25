import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { PipeContentRouteModule } from '@ws-widget/collection'
import { ContentCardComponent } from './components/content-card/content-card.component'
import { MyContentComponent } from './components/my-content/my-content.component'
import { MyContentRoutingModule } from './my-content-routing.module'
import { MyContentService } from './services/my-content.service'
import { ContentCardV2Component } from './components/content-card-v2/content-card-v2.component'
import { SharedModule } from '../../../modules/shared/shared.module'

@NgModule({
  declarations: [MyContentComponent, ContentCardComponent, ContentCardV2Component],
  imports: [CommonModule, SharedModule, MyContentRoutingModule, PipeContentRouteModule],
  providers: [MyContentService],
})
export class MyContentModule { }
