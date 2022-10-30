
class Volunteer {
	constructor(faker) {
		(this.firstName = faker.name.firstName()),
			(this.surName = faker.name.middleName()),
			(this.nickName = faker.internet.userName()),
			(this.sex = faker.name.sex()),
			(this.bio = faker.lorem.paragraph()),
			// faker.hacker.phrase()
			(this.avatar = faker.internet.avatar()),
			(this.id = faker.random.alphaNumeric(8)),
			(this.contact = {
				linkedIn: '',
				telegram: '',
				facebook: '',
				github: '',
				discord: '',
				instagram: '',
				bihance: '',
				email: faker.internet.email()
			}),
			(this.projects = [
				{
					projectId: faker.random.alphaNumeric(8),
					orgId: faker.random.alphaNumeric(8),
					recense: [
						{
							id: faker.random.alphaNumeric(8),
							text: '',
							stars: 3
						}
					]
				}
			]),
			(this.languages = [faker.random.locale(), faker.random.locale(), faker.random.locale()]),
			(this.skills = [
				{
					title: faker.hacker.adjective(),
					experience: '',
					description: faker.hacker.phrase()
				}
			]),
			(this.recommendations = [
				{
					idAuthor: faker.random.alphaNumeric(8),
					text: faker.hacker.phrase()
				}
			]);
	}
	set members(value) {
		this._members = value;
	}
}

export default Volunteer;
