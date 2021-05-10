import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserContentDetailedRatingComponent } from './user-content-detailed-rating.component'
import { MatCardModule, MatIconModule, MatButtonModule, MatProgressBarModule } from '@angular/material'
import { InViewPortModule } from '@sunbird-cb/utils'

@NgModule({
  declarations: [UserContentDetailedRatingComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    InViewPortModule,
    MatProgressBarModule,
  ],
  exports: [UserContentDetailedRatingComponent],
})
export class UserContentDetailedRatingModule { }
