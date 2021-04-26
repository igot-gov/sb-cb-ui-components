import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material'
import { BtnPageBackAdminComponent } from './btn-page-back.component'

@NgModule({
  declarations: [BtnPageBackAdminComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [BtnPageBackAdminComponent],
  entryComponents: [BtnPageBackAdminComponent],
})
export class BtnPageBackModuleAdmin { }
