import {IMAGE} from "./api/models";
import {BASE_URL} from "./api/constants";

export const getImageUrl = (image: IMAGE): string => {
    return image?.data?.attributes?.formats?.medium?.url || image?.data?.attributes?.url || ''
}

export const getImageSrc = (src: string): string => {
    return `${BASE_URL}${src ?? ''}`
}