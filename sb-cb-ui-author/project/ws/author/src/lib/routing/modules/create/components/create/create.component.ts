import { Component, OnDestroy, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { NOTIFICATION_TIME } from '../../../../../constants/constant'
import { Notify } from '../../../../../constants/notificationMessage'
import { ICreateEntity } from '../../../../../interface/create-entity'
import { ErrorParserComponent } from '../../../../../modules/shared/components/error-parser/error-parser.component'
import { NotificationComponent } from '../../../../../modules/shared/components/notification/notification.component'
import { AccessControlService } from '../../../../../modules/shared/services/access-control.service'
import { AuthInitService } from '../../../../../services/init.service'
import { LoaderService } from '../../../../../services/loader.service'
import { CreateService } from './create.service'

@Component({
  selector: 'ws-auth-generic',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit, OnDestroy {
  entity: ICreateEntity[] = []
  resourceEntity!: ICreateEntity
  routerSubscription = <Subscription>{}
  allLanguages: any
  language = ''
  languageName = ''
  error = false

  constructor(
    private snackBar: MatSnackBar,
    private svc: CreateService,
    private router: Router,
    private loaderService: LoaderService,
    private accessControlSvc: AccessControlService,
    private authInitService: AuthInitService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.authInitService.creationEntity.forEach(v => {
      if (!v.parent && v.available) {
        if (v.id === 'resource') {
          this.resourceEntity = v
        } else {
          this.entity.push(v)
        }
      }
    })
    this.loaderService.changeLoadState(false)
    this.allLanguages = this.authInitService.ordinals.subTitles || []
    this.language = this.accessControlSvc.locale

    const selectedLang = this.allLanguages.find((i: any) => i.srclang === this.language)
    if (selectedLang && selectedLang.srclang) {
      this.languageName = selectedLang.label
    }
  }

  ngOnDestroy() {
    this.loaderService.changeLoad.next(false)
  }

  contentClicked(content: ICreateEntity) {
    this.loaderService.changeLoad.next(true)
    this.svc
      .create({
        contentType: content.contentType,
        mimeType: content.mimeType,
        locale: this.language,
        ...(content.additionalMeta || {}),
      })
      .subscribe(
        (id: string) => {
          this.loaderService.changeLoad.next(false)
          this.snackBar.openFromComponent(NotificationComponent, {
            data: {
              type: Notify.CONTENT_CREATE_SUCCESS,
            },
            duration: NOTIFICATION_TIME * 1000,
          })
          this.router.navigateByUrl(`/author/editor/${id}`)
        },
        error => {
          if (error.status === 409) {
            this.dialog.open(ErrorParserComponent, {
              width: '80vw',
              height: '90vh',
              data: {
                errorFromBackendData: error.error,
              },
            })
          }
          this.loaderService.changeLoad.next(false)
          this.snackBar.openFromComponent(NotificationComponent, {
            data: {
              type: Notify.CONTENT_FAIL,
            },
            duration: NOTIFICATION_TIME * 1000,
          })
        },
      )
  }

  setCurrentLanguage(lang: string, label: string) {
    this.languageName = label
    this.language = lang
  }
}
