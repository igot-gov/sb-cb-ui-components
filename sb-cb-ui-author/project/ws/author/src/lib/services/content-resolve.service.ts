import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router'
import { Observable, of } from 'rxjs'
import { ApiService } from '../modules/shared/services/api.service'
import { NSContent } from '../interface/content'
import { CONTENT_READ } from '../constants/apiEndpoints'
import { catchError } from 'rxjs/operators'
import { AccessControlService } from '../modules/shared/services/access-control.service'

@Injectable()
export class ContentTOCResolver implements Resolve<NSContent.IContentMeta> {

  constructor(
    private apiService: ApiService,
    private accessService: AccessControlService,
    private router: Router,
  ) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<NSContent.IContentMeta> {
    const id = route.params['id']
    return this.apiService.get<NSContent.IContentMeta>(
      `${CONTENT_READ}${id}${this.accessService.orgRootOrgAsQuery}`,
    ).pipe(
      catchError((v: any) => {
        this.router.navigateByUrl('/error-somethings-wrong')
        return of(v)
      }),
    )
  }
}
