import { ImageType } from './ImageType'

export interface ProfileType {
  firstName?: string
  lastName?: string
  position?: string
  summary?: string
  image?: ImageType
  tags?: string[]
  location?: string
}
