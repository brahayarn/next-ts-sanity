import {createClient} from '@sanity/client'
import imagerUrlBuilder from '@sanity/image-url'

export const client = createClient({
  apiVersion: '2022-03-07',
  dataset: 'production',
  projectId: 'ycxyqi2k',
  useCdn: true,
});

const builder = imagerUrlBuilder(client)

export function urlFor(source: { _type: string; asset: { _ref: string; _type: string; } }) {

  return builder.image(source)

}