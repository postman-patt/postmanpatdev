import { ImageType } from './ImageType'
import { DateString } from './DateType'

export type ProjectType = {
    id: string,
    projectName?: string,
    summary?: string,
    image?: ImageType, 
    startDate: DateString,
    endDate: DateString,
    tags: string[],
    demoURL?: string, 
    githubURL?: string
}