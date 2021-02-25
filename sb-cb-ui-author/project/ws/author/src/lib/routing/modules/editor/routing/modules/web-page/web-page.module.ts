import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { WebPageRoutingModule } from './web-page-routing.module'
import { HorizontalScrollerModule } from '@ws-widget/utils'
import { WebModuleEditorComponent } from './components/web-module-editor/web-module-editor.component'
import { UploadAudioComponent } from './components/upload-audio/upload-audio.component'
import { AudioStripsComponent } from './shared/component/audio-strips/audio-strips.component'
import { AddWebPagesComponent } from './components/web-module-editor/add-web-pages/add-web-pages.component'
import { WebStoreService } from './services/store.service'
import { SharedModule } from '../../../../../../modules/shared/shared.module'
import { EditorSharedModule } from '../../../shared/shared.module'
import { AuthViewerModule } from '../../../../../../modules/viewer/viewer.module'

@NgModule({
  declarations: [
    WebModuleEditorComponent,
    UploadAudioComponent,
    AudioStripsComponent,
    AddWebPagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    EditorSharedModule,
    DragDropModule,
    AuthViewerModule,
    WebPageRoutingModule,
    HorizontalScrollerModule,
  ],
  providers: [WebStoreService],
  entryComponents: [UploadAudioComponent],
  exports: [AddWebPagesComponent],

})
export class WebPageModule { }
