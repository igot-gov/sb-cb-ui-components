import { NSContent } from '../../lib/interface/content'

export interface IConditionsV2 {
  fit?: { [key in keyof NSContent.IContentMeta]: any[] }[]
  notFit?: { [key in keyof NSContent.IContentMeta]: any[] }[]
}
