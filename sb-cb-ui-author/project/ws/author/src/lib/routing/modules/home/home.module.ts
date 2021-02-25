import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AuthHomeComponent } from './components/home/home.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { RouterModule } from '@angular/router'
import { DashBoardService } from './components/dashboard/dashboard.service'
import { SharedModule } from '../../../modules/shared/shared.module'

@NgModule({
  declarations: [
    AuthHomeComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
    DashBoardService,
  ],
})
export class HomeModule { }
