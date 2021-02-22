import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ViewerComponent } from './viewer.component'
import { ViewerResolve } from './viewer.resolve'
import { AudioComponent } from './routes/audio/audio.component'
import { AudioModule } from './routes/audio/audio.module'
import { AudioNativeComponent } from './routes/audio-native/audio-native.component'
import { AudioNativeModule } from './routes/audio-native/audio-native.module'
import { HtmlComponent } from './routes/html/html.component'
import { HtmlModule } from './routes/html/html.module'
import { PdfComponent } from './routes/pdf/pdf.component'
import { PdfModule } from './routes/pdf/pdf.module'
import { ChannelComponent } from './routes/channel/channel.component'
import { ChannelModule } from './routes/channel/channel.module'
import { VideoComponent } from './routes/video/video.component'
import { VideoModule } from './routes/video/video.module'
import { YoutubeComponent } from './routes/youtube/youtube.component'
import { YoutubeModule } from './routes/youtube/youtube.module'

const routes: Routes = [
  {
    path: 'audio/:resourceId',
    component: AudioComponent,
    data: {
      resourceType: 'audio',
    },
    resolve: {
      content: ViewerResolve,
    },
  },
  {
    path: 'audio-native/:resourceId',
    component: AudioNativeComponent,
    data: {
      resourceType: 'audio-native',
    },
    resolve: {
      content: ViewerResolve,
    },
  },
  {
    path: 'certification',
    data: {
      resourceType: 'certification',
    },
    loadChildren: './routes/certification/certification.module#CertificationModule',
    // () =>
    //   import('./routes/certification/certification.module').then(u => u.CertificationModule),
  },
  {
    path: 'class-diagram',
    data: {
      resourceType: 'class-diagram',
    },
    loadChildren: './routes/class-diagram/class-diagram.module#ClassDiagramModule',
    // () =>
    //   import('./routes/class-diagram/class-diagram.module').then(u => u.ClassDiagramModule),
  },
  {
    path: 'dnd-quiz',
    data: {
      resourceType: 'dnd-quiz',
    },
    loadChildren: './routes/dnd-quiz/dnd-quiz.module#DndQuizModule',
    // () =>
    //   import('./routes/dnd-quiz/dnd-quiz.module').then(u => u.DndQuizModule),
  },
  {
    path: 'hands-on',
    data: {
      resourceType: 'hands-on',
    },
    loadChildren: './routes/hands-on/hands-on.module#HandsOnModule',
    //  () =>
    //   import('./routes/hands-on/hands-on.module').then(u => u.HandsOnModule),
  },
  {
    path: 'html/:resourceId',
    component: HtmlComponent,
    data: {
      resourceType: 'html',
    },
    resolve: {
      content: ViewerResolve,
    },
  },
  {
    path: 'html-picker',
    data: {
      resourceType: 'html-picker',
    },
    loadChildren: './routes/html-picker/html-picker.module#HtmlPickerModule',
    // () =>
    //   import('./routes/html-picker/html-picker.module').then(u => u.HtmlPickerModule),
  },
  {
    path: 'channel/:resourceId',
    data: {
      resourceType: 'channel',
    },
    resolve: {
      content: ViewerResolve,
    },
    component: ChannelComponent,
  },
  {
    path: 'iap',
    data: {
      resourceType: 'iap',
    },
    loadChildren: './routes/iap/iap.module#IapModule',
    // () =>
    //   import('./routes/iap/iap.module').then(u => u.IapModule),
  },
  {
    path: 'interactive-exercise',
    data: {
      resourceType: 'interactive-exercise',
    },
    loadChildren: './routes/interactive-exercise/interactive-exercise.module#InteractiveExerciseModule',
    // () =>
    //   import('./routes/interactive-exercise/interactive-exercise.module').then(u => u.InteractiveExerciseModule),
  },
  {
    path: 'pdf/:resourceId',
    component: PdfComponent,
    data: {
      resourceType: 'pdf',
    },
    resolve: {
      content: ViewerResolve,
    },
  },
  {
    path: 'quiz',
    data: {
      resourceType: 'quiz',
    },
    loadChildren: './routes/quiz/quiz.module#QuizModule',
    // () =>
    //   import('./routes/quiz/quiz.module').then(u => u.QuizModule),
  },
  {
    path: 'rdbms-hands-on',
    data: {
      resourceType: 'rdbms-hands-on',
    },
    loadChildren: './routes/rdbms-hands-on/rdbms-hands-on.module#RdbmsHandsOnModule',
    //  () =>
    //   import('./routes/rdbms-hands-on/rdbms-hands-on.module').then(u => u.RdbmsHandsOnModule),
  },
  {
    path: 'resource-collection',
    data: {
      resourceType: 'resource-collection',
    },
    loadChildren: './routes/resource-collection/resource-collection.module#ResourceCollectionModule',
    // () => import('./routes/resource-collection/resource-collection.module')
    //   .then(u => u.ResourceCollectionModule),
  },
  {
    path: 'video/:resourceId',
    component: VideoComponent,
    data: {
      resourceType: 'video',
    },
    resolve: {
      content: ViewerResolve,
    },
  },
  {
    path: 'web-module',
    data: {
      resourceType: 'web-module',
    },
    loadChildren: './routes/web-module/web-module.module#WebModuleModule',
    // () =>
    //   import('./routes/web-module/web-module.module').then(u => u.WebModuleModule),
  },
  {
    path: 'youtube/:resourceId',
    component: YoutubeComponent,
    data: {
      resourceType: 'youtube',
    },
    resolve: {
      content: ViewerResolve,
    },
  },
  {
    path: ':resourceId',
    component: ViewerComponent,
    data: {
      resourceType: 'unknown',
    },
    resolve: {
      content: ViewerResolve,
    },
  },
  {
    path: '**',
    data: {
      resourceType: 'error',
    },
    resolve: {
      content: ViewerResolve,
    },
  },
]

@NgModule({
  imports: [
    AudioModule,
    AudioNativeModule,
    HtmlModule,
    PdfModule,
    VideoModule,
    YoutubeModule,
    ChannelModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewerComponent,
        children: routes,
      },
    ])],
  exports: [RouterModule],
  providers: [
    ViewerResolve,
  ],
})
export class ViewerRoutingModule { }
