import faker from 'faker'

export default function suggestionsGenerator(count = 0) {
  let suggestions = []
  for (let index = 0; index < count; index++) {
    suggestions[index] = {
      id: faker.random.uuid(),
      username: faker.internet.userName(),
      profilePhoto: faker.internet.avatar(),
      label: faker.fake(
        '{{internet.userName}} y {{random.number}} siguen a este usuario'
      )
    }
  }
  return suggestions
}
