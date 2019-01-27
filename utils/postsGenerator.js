import faker from 'faker'

export default function postsGenerator(count = 0) {
  let posts = []
  for (let index = 0; index < count; index++) {
    posts[index] = {
      id: faker.fake('{{random.uuid}}'),
      user: {
        photo: faker.fake('{{image.avatar}}'),
        username: faker.fake(
          '{{name.firstName}}{{name.lastName}}{{random.number}}'
        )
      },
      location: faker.fake(
        '{{address.city}}, {{address.state}}, {{address.country}}'
      ),
      photo: faker.fake('{{image.imageUrl}}'),
      likePhotos: [
        faker.fake('{{image.avatar}}'),
        faker.fake('{{image.avatar}}'),
        faker.fake('{{image.avatar}}')
      ],
      likes: faker.fake(
        'Les gusta a {{name.firstName}}{{name.lastName}}{{random.number}} y {{random.number}} personas más'
      ),
      caption: faker.fake('{{lorem.sentence}}'),
      comments: [
        {
          id: faker.fake('{{random.uuid}}'),
          username: faker.fake(
            '{{name.firstName}}{{name.lastName}}{{random.number}}'
          ),
          comment: faker.fake('{{lorem.sentence}}')
        },
        {
          id: faker.fake('{{random.uuid}}'),
          username: faker.fake(
            '{{name.firstName}}{{name.lastName}}{{random.number}}'
          ),
          comment: faker.fake('{{lorem.sentence}}')
        },
        {
          id: faker.fake('{{random.uuid}}'),
          username: faker.fake(
            '{{name.firstName}}{{name.lastName}}{{random.number}}'
          ),
          comment: faker.fake('{{lorem.sentence}}')
        }
      ],
      date: faker.fake('{{date.recent}}')
    }
  }
  return posts
}
