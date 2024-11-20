import {createClient} from '@sanity/client'
import imagerUrlBuilder from '@sanity/image-url'

export const client = createClient({
  apiVersion: '2022-03-07',
  dataset: 'production',
  projectId: 'ycxyqi2k',
  useCdn: true,
  token: 'skCbHfd497SUOOtsTe3GlI8AzOJJP7k4UsTBzDt2Otti1EHn2kiDASXmoIxQaAZibV7kUU3rX9bowKdiWhGAC7Lzlfd0lXu0qx3lnXCl1PzcJPXweebsPpiZyWf9bOTudP58f84xjDt0MdstxTpYIKWvhLZcBmNLXebCZfBOoYBqHpQwNDlf', 
});

const builder = imagerUrlBuilder(client)

export function urlFor(source: { _type: string; asset: { _ref: string; _type: string; } }) {

  return builder.image(source)

}