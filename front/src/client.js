
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "c87nclcs",
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: "sk6xvu4z9jR7JFnG0nyLyKpFX82Y8YUqiuIZNA3K0sZfXpmA73puGAvfrMqDQr8UqBlzEtNRPtOWtTqKRdv3SgrzkFwJNgRowX3VTQdGwmK5CX5VfSD7gfyiQ2tV5o1aWfkiyjFQoox9kXWqVQzlYisiW9cXRjPwFZf41chqWw2WvKDqsPZz",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);