import { CreateContentResolverService } from './services/create-content-resolver.service'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { EditorService } from './services/editor.service'
import { EditorComponent } from './components/editor/editor.component'
import { EditorRoutingModule } from './editor-routing.module'
import { EditorSharedModule } from './shared/shared.module'
import { WebPageModule } from './routing/modules/web-page/web-page.module'
import { AuthViewerModule } from '../../../modules/viewer/viewer.module'
import { SharedModule } from '../../../modules/shared/shared.module'

@NgModule({
  declarations: [
    EditorComponent,
  ],
  imports: [
    AuthViewerModule,
    CommonModule,
    EditorRoutingModule,
    EditorSharedModule,
    SharedModule,
    WebPageModule,
  ],
  providers: [
    EditorService,
    CreateContentResolverService,
  ],
})
export class EditorModule { }
