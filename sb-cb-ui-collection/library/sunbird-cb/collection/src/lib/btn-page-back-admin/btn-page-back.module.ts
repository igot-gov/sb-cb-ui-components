import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material'
import { BtnPageBackComponentAdmin } from './btn-page-back.component'

@NgModule({
  declarations: [BtnPageBackComponentAdmin],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [BtnPageBackComponentAdmin],
  entryComponents: [BtnPageBackComponentAdmin],
})
export class BtnPageBackModuleAdmin { }
