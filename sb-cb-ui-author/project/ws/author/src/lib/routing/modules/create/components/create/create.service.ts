import { Injectable } from '@angular/core'
import { ConfigurationsService } from '@ws-widget/utils'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { CONTENT_CREATE } from '../../../../../constants/apiEndpoints'
import { NSApiRequest } from '../../../../../interface/apiRequest'
import { NSApiResponse } from '../../../../../interface/apiResponse'
import { AccessControlService } from '../../../../../modules/shared/services/access-control.service'
import { ApiService } from '../../../../../modules/shared/services/api.service'

@Injectable()
export class CreateService {
  constructor(
    private apiService: ApiService,
    private configSvc: ConfigurationsService,
    private accessService: AccessControlService,
  ) { }

  create(meta: { mimeType: string; contentType: string; locale: string }): Observable<string> {
    const requestBody: NSApiRequest.ICreateMetaRequest = {
      content: {
        ...meta,
        name: 'Untitled Content',
        description: '',
        category: meta.contentType,
        createdBy: this.accessService.userId,
        authoringDisabled: false,
        isContentEditingDisabled: false,
        isMetaEditingDisabled: false,
        isExternal: meta.mimeType === 'application/html',
      },
    }
    if (this.accessService.rootOrg === 'client2') {
      if (meta.contentType === 'Knowledge Artifact') {
        try {
          const userPath = `client2/Australia/dealer_code-${this.configSvc.unMappedUser.json_unmapped_fields.dealer_group_code}`
          requestBody.content.accessPaths = userPath
        } catch {
          requestBody.content.accessPaths = 'client2'
        }
      } else {
        requestBody.content.accessPaths = 'client2'
      }
    }
    return this.apiService
      .post<NSApiRequest.ICreateMetaRequest>(
        `${CONTENT_CREATE}${this.accessService.orgRootOrgAsQuery}`,
        requestBody,
      )
      .pipe(
        map((data: NSApiResponse.IContentCreateResponse) => {
          return data.identifier
        }),
      )
  }
}
