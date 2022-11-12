class Org {
	constructor() {
		this.bio = {
			category: ['lorem', 'dolor'], // sport, Kultura i sztuka, LGBT, Zwierzęta, środowisko, Edukacja, Dom Sąsiedzki
			nameOrg: 'Lorem ipsum dolor',
			// helloMessage:
			// 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			id: 'Lorem ipsum dolor',
			since: '2022',
			activities: [
				{
					link: '',
					title: 'Lorem ipsum dolor sit amet',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				}
			],
			authOnPlatform: false,
			addres: '1 maja 12',
			index: '81-828',
			town: 'Sopot',
			areaOfOperation: 'Sopot'
		};
		this.orgContacts = {
			number: '+48234324232',
			contactTime: '16:00 - 18:00', //Wolontariusze mogą звонить w godzinach
			briefing: {
				time: '16:00 - 20:00',
				data: 'every tuesday',
				platform: 'zoom'
			},
			nameOfContact: 'Lorem ipsum',
			positionOfContact: 'Lorem',
			email: 'ipsum@gmail.com',
			social: {
				facebook: '',
				site: '',
				linkedIn: '',
				instagram: '',
				twitter: ''
			},

			nip: '1231231321',
			krs: '32742379832234'
		};
		this.report = {
			size: '',
			name: '',
			datePublic: '',
			dateStart: '',
			dateEnd: '',
			status: false,
			trelloBoard: '',
			gitHub: '',
			site: '',
			zoom: '',
			budget: 0,
			sponsors: [
				{
					title: '',
					id: '',
					logo: '',
					link: ''
				}
			],
			partners: [
				{
					title: '',
					id: '',
					logo: '',
					link: ''
				}
			],
			localPartners: [
				{
					title: '',
					id: '',
					logo: '',
					link: ''
				}
			],
			workType: [
				{
					title: '1',
					tasks: ['']
				}
			],
			textForSite: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			]
		};
		this.benefits = {
			bussines: [''],
			ngo: ['']
		};
		this.readyToPay = {
			domain: 0,
			hosting: 0,
			volounter: 0,
			other: [
				{
					title: 'Lorem ipsum dolor ',
					budjet: 0
				}
			]
		};
		this.members = [
			{
				github: '',
				facebook: '',
				firstName: '',
				secondName: ''
			}
		];
	}

	get bio() {
		return this._bio;
	}
	get orgContacts() {
		return this._orgContacts;
	}
	get report() {
		return this._report;
	}
	get benefits() {
		return this._benefitsVolunteering;
	}
	get readyToPay() {
		return this._readyToPay;
	}
	get members() {
		return this._members;
	}
	set members(value) {
		this._members = value;
	}
	set bio(value) {
		this._bio = value;
	}
	set orgContacts(value) {
		this._orgContacts = value;
	}
	set report(value) {
		this._report = value;
	}
	set benefits(value) {
		this._benefitsVolunteering = value;
	}
	set readyToPay(value) {
		this._readyToPay = value;
	}
};



export default Org;


