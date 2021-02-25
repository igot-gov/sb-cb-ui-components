
import { Pipe, PipeTransform } from '@angular/core'
import { AUTHORING_CONTENT_BASE } from '../../../constants/apiEndpoints'

@Pipe({
  name: 'relativeUrl',
})
export class RelativeUrlPipe implements PipeTransform {

  transform(value: string): any {
    return value ? `${AUTHORING_CONTENT_BASE}${encodeURIComponent(value)}` : ''
  }

}
