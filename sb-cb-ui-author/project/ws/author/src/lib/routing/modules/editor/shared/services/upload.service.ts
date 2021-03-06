
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { FIXED_FILE_NAME } from '../../../../../constants/upload'
import { HttpClient } from '@angular/common/http'
import { ConfigurationsService } from '@ws-widget/utils'
import { NSApiRequest } from '../../../../../interface/apiRequest'
import { NSApiResponse } from '../../../../../interface/apiResponse'
import { CONTENT_BASE, CONTENT_BASE_ZIP, CONTENT_BASE_ENCODE, CONTENT_VIDEO_ENCODE } from '../../../../../constants/apiEndpoints'
import { ApiService } from '../../../../../modules/shared/services/api.service'
import { AccessControlService } from '../../../../../modules/shared/services/access-control.service'

const PROTECTED_SLAG_V8 = '/apis/protected/v8'

const API_END_POINTS = {
  CATALOG_AUTHORING: `${PROTECTED_SLAG_V8}/social/catalog`,
}
@Injectable()
export class UploadService {
  constructor(
    private apiService: ApiService,
    private accessService: AccessControlService,
    private http: HttpClient,
    private configSvc: ConfigurationsService,
  ) { }

  upload(
    data: FormData,
    contentData: NSApiRequest.IContentData,
    options?: any,
    isZip = false,
  ): Observable<NSApiResponse.IFileApiResponse> {
    if (isZip) {
      return this.zipUpload(data, contentData, options)
    }
    const file = data.get('content') as File
    let fileName = file.name
    if (FIXED_FILE_NAME.indexOf(fileName) < 0) {
      fileName = this.appendToFilename(fileName)
    }
    const newFormData = new FormData()
    newFormData.append('content', file, fileName)
    return this.apiService.post<NSApiResponse.IFileApiResponse>(
      // tslint:disable-next-line:max-line-length
      `${CONTENT_BASE}${this.accessService.rootOrg.replace(/ /g, '_')}/${this.accessService.org.replace(/ /g, '_')}/Public/${contentData.contentId.replace('.img', '')}${contentData.contentType}`,
      newFormData,
      false,
      options,
    )
  }

  zipUpload(
    data: FormData,
    contentData: NSApiRequest.IContentData,
    options?: any,
  ): Observable<NSApiResponse.IFileApiResponse> {
    return this.apiService.post<NSApiResponse.IFileApiResponse>(
      // tslint:disable-next-line:max-line-length
      `${CONTENT_BASE_ZIP}${this.accessService.rootOrg.replace(/ /g, '_')}/${this.accessService.org.replace(/ /g, '_')}/Public/${contentData.contentId.replace('.img', '')}${contentData.contentType}`,
      data,
      false,
      options,
    )
  }

  encodedUpload(
    data: any,
    fileName: string,
    contentData: NSApiRequest.IContentData,
  ): Observable<NSApiResponse.IFileApiResponse> {
    return this.apiService.post<NSApiResponse.IFileApiResponse>(
      `${CONTENT_BASE_ENCODE}`,
      {
        fileName,
        text: this.apiService.base64(CONTENT_BASE_ENCODE, data).data,
        // tslint:disable-next-line:max-line-length
        location: `${this.accessService.rootOrg.replace(/ /g, '_')}/${this.accessService.org.replace(/ /g, '_')}/Public/${contentData.contentId.replace('.img', '')}${contentData.contentType}`,
      },
      false,
    )
  }

  startEncoding(url: string, id: string): Observable<any> {
    return this.apiService.post(CONTENT_VIDEO_ENCODE + id.replace('.img', ''), {
      authArtifactURL: url,
    })
  }

  appendToFilename(filename: string) {
    const timeStamp = new Date().getTime()
    const dotIndex = filename.lastIndexOf('.')
    if (dotIndex === -1) {
      return filename + timeStamp
    }
    return filename.substring(0, dotIndex) + timeStamp + filename.substring(dotIndex)
  }

  fetchCatalog(): Observable<any> {
    return this.http.post(`${API_END_POINTS.CATALOG_AUTHORING}`, {
      rootOrg: this.configSvc.rootOrg,
      org: this.configSvc.org,
    })
  }
}
