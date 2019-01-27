import faker from 'faker'

export default function storiesGenerator(count = 0) {
  let stories = []
  for (let index = 0; index < count; index++) {
    stories[index] = {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      profilePhoto: faker.internet.avatar(),
      date: faker.date.recent(1).toISOString()
    }
  }
  return stories
}
