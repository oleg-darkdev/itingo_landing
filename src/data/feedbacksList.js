import { faker } from '@faker-js/faker';

const feedback = [
	{
		position: faker.company.bsBuzz(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		text: faker.lorem.sentence(4),
		title: faker.lorem.text(),
		avatarImg: faker.image.avatar(), // faker.internet.avatar()
		company: 'lorem'
	},
	{
		position: faker.company.bsBuzz(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		text: faker.lorem.sentence(4),
		title: faker.lorem.text(),
		avatarImg: faker.image.avatar(), // faker.internet.avatar()
		company: 'lorem'
	},
	{
		position: faker.company.bsBuzz(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		text: faker.lorem.sentence(4),
		title: faker.lorem.text(),
		avatarImg: faker.image.avatar(), // faker.internet.avatar()
		company: 'lorem'
	},
	{
		position: faker.company.bsBuzz(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		text: faker.lorem.sentence(4),
		title: faker.lorem.text(),
		avatarImg: faker.image.avatar(), // faker.internet.avatar()
		company: 'lorem'
	},
	{
		position: faker.company.bsBuzz(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		text: faker.lorem.sentence(4),
		title: faker.lorem.text(),
		avatarImg: faker.image.avatar(), // faker.internet.avatar()
		company: 'lorem'
	},
	{
		position: faker.company.bsBuzz(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		text: faker.lorem.sentence(4),
		title: faker.lorem.text(),
		avatarImg: faker.image.avatar(), // faker.internet.avatar()
		company: 'lorem'
	}
];

export default feedback;
