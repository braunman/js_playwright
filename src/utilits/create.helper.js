import { faker, fakerRU } from '@faker-js/faker';

export const createUser = (username = '', email = '', password = '') => {
    return {
        username: username || faker.person.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }
}

export const createArticle = (title = '', about = '', body = '', tag = '') => {
    return {
        title: title || fakerRU.lorem.sentence({ min: 2, max: 8 }),
        about: about || fakerRU.lorem.lines(1),
        body: body || fakerRU.lorem.paragraph(2),
        tag: tag || fakerRU.lorem.word(),
    }
}