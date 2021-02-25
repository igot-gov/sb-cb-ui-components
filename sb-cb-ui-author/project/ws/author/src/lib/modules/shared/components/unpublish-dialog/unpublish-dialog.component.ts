import { ErrorParserComponent } from './../error-parser/error-parser.component'
import { Component, OnInit, Inject } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatDialog, MatSnackBar } from '@angular/material'
import { ValueService } from '@ws-widget/utils'
import { HttpHeaders } from '@angular/common/http'
import { mergeMap, catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { UNPUBLISH } from '../../../../constants/apiEndpoints'
import { NOTIFICATION_TIME } from '../../../../constants/constant'
import { Notify } from '../../../../constants/notificationMessage'
import { ISearchContent } from '../../../../interface/search'
import { NotificationService } from '../../../../services/notification.service'
import { NotificationComponent } from '../notification/notification.component'
import { AccessControlService } from '../../services/access-control.service'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'ws-auth-unpublish-dialog',
  templateUrl: './unpublish-dialog.component.html',
  styleUrls: ['./unpublish-dialog.component.scss'],
})
export class UnpublishDialogComponent implements OnInit {
  commentsForm!: FormGroup
  contentMeta!: ISearchContent
  isSubmitPressed = false
  onAction = false
  children = 0
  isNew = 'No'
  isMobile = false
  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<UnpublishDialogComponent>,
    private accessService: AccessControlService,
    @Inject(MAT_DIALOG_DATA) public data: ISearchContent,
    private apiService: ApiService,
    private valueSvc: ValueService,
    private notificationSvc: NotificationService,
  ) {
    dialogRef.disableClose = true
  }

  ngOnInit() {
    this.valueSvc.isXSmall$.subscribe(isMobile => (this.isMobile = isMobile))
    this.contentMeta = this.data
    this.children = this.contentMeta.children ? this.contentMeta.children.length : 0
    this.isNew = !(
      this.contentMeta.identifier.includes('.img') || this.contentMeta.status === 'Live'
    )
      ? 'Yes'
      : 'No'
    this.commentsForm = this.formBuilder.group({
      comments: ['', [Validators.required]],
      action: ['', [Validators.required]],
    })
  }

  submitData() {
    if (this.commentsForm.valid && this.commentsForm.value.action) {
      this.unpublish()
    } else {
      this.isSubmitPressed = true
    }
  }

  unpublish() {
    this.onAction = true
    const requestBody = {
      unpublish: true,
      identifier: this.contentMeta.identifier,
      author: this.accessService.userId,
      isAdmin: this.accessService.hasRole(['editor', 'admin']),
      actorName: this.accessService.userName,
      action: 'unpublished',
      comment: this.commentsForm.value.comments,
    }
    this.apiService
      .post<any>(`${UNPUBLISH}${this.accessService.orgRootOrgAsQuery}`, requestBody, true, {
        headers: new HttpHeaders({
          Accept: 'text/plain',
        }),
        responseType: 'text',
      }).pipe(
        mergeMap(() =>
          this.notificationSvc
            .unpublishContent(
              this.contentMeta as any,
              this.commentsForm.value.comments,
            )
            .pipe(
              catchError(() => {
                return of({} as any)
              }),
            ),
        ),
      ).subscribe(
        () => {
          this.dialogRef.close(true)
          this.snackBar.openFromComponent(NotificationComponent, {
            data: {
              type: Notify.SUCCESS,
            },
            duration: NOTIFICATION_TIME * 1000,
          })
        },
        error => {
          this.onAction = false
          if (error.status === 409) {
            this.dialog.open(ErrorParserComponent, {
              width: this.isMobile ? '90vw' : '600px',
              height: 'auto',
              data: {
                errorFromBackendData: error.error,
              },
            })
          }
          this.snackBar.openFromComponent(NotificationComponent, {
            data: {
              type: Notify.CONTENT_FAIL,
            },
            duration: NOTIFICATION_TIME * 1000,
          })
        },
      )
  }
}
