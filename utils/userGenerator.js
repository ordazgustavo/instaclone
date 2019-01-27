import faker from 'faker'

export default function userGenerator() {
  return {
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    profilePhoto: faker.internet.avatar()
  }
}
