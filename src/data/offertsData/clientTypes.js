const vols = {
	type: 'Dla IT wolontariutu',
	count: 0,
	weHelp: 'Nasze wsparcie dla IT wolontariutu',
	listText: [
		{
			colored: ['Potwierdzenie', 'projektach'],
			defaultColour: ['udziału w ', '']
		},
		{
			colored: ['Pomoc w', 'zatrudnieniu w IT'],
			defaultColour: ['następnym', '']
		},
		{
			colored: ['Listy polecające', 'po każdym skutecznie'],
			defaultColour: ['zakończonym projekcie', '']
		}
	],
	img: '/images/clients/volunteers.svg',
	link: 'https://forms.gle/HopVuyRc8i3zi5YV7',
	alt: 'Volunteers image',
	animation: 'fade-left',
	btnText: 'Dołączyć do ekipy'
};

const ngo = {
	type: 'Dla NGO',
	count: 0,
	weHelp: 'Nasze wsparcie dla NGO',
	listText: [
		{
			colored: ['Kreatywne podejście', 'IT tematów'],
			defaultColour: ['do rozwiązywania', '']
		},
		{
			colored: ['Możliwość nawiązywania', 'z firmami'],
			defaultColour: ['współpracy', '']
		},
		{
			colored: ['Dostęp do', 'IT wolontariuszy'],
			defaultColour: [' chętnych', '']
		}
	],
	img: '/images/clients/ngo.svg',
	link: 'https://forms.gle/M5eVAR7oRuXVoder8',
	alt: 'Ngo image',
	animation: 'fade-up',
	btnText: 'Zgłosić projekt'
};

const bussines = {
	type: 'Dla biznesu',
	count: 0,
	weHelp: 'Nasze wsparcie dla Dla biznesu',
	listText: [
		{
			colored: ['Nasza platforma', ''],
			defaultColour: ['wasz CSR', '']
		},
		{
			colored: ['Społeczność IT inżynierów', 'i osób z doświadczeniem '],
			defaultColour: ['dla Waszych HR', '']
		},
		{
			colored: ['Pomoc', 'w trzecim sektorze'],
			defaultColour: ['w inwestycjach', '']
		}
	],
	img: '/images/clients/business.svg',
	link: '/',
	alt: 'Business image',
	animation: 'fade-left',
	btnText: 'Zaoferować pomoc'
};

const startups = {
	type: 'Dla startupow',
	count: 0,
	weHelp: 'Masz pomysł i szukasz ekipy dla realizacji open-source projekta?',
	listText: [
		{
			colored: ['Potwierdzenie', ''],
			defaultColour: ['udziału w ', '']
		},
		{
			colored: ['Potwierdzenie', 'projektach'],
			defaultColour: ['udziału', 'adasdads']
		},
		{
			colored: ['Potwierdzenie', 'projektach'],
			defaultColour: ['udziału', 'adasdads']
		}
	],
	img: '/images/clients/startups.svg',
	link: '/',
	alt: 'Startups image',
	animation: 'fade-left',
	btnText: 'Zgłosić projekt'
};

const localPartners = {
	type: 'Dla partnerów lokalnych',
	count: 0,
	weHelp: 'Pomoc w inwestycjach w trzecim sektorze i rekrutacja osób z doświadczeniem',
	listText: [
		{
			colored: ['Potwierdzenie', ''],
			defaultColour: ['udziału w ', '']
		},
		{
			colored: ['Potwierdzenie', 'projektach'],
			defaultColour: ['udziału', 'adasdads']
		},
		{
			colored: ['Potwierdzenie', 'projektach'],
			defaultColour: ['udziału', 'adasdads']
		}
	],
	img: '/images/clients/local_partners.svg',
	link: '/',
	alt: 'Business image',
	animation: 'fade-right',
	btnText: 'Zaoferować pomoc'
};

const clientTypes = [ vols, ngo, bussines, startups, localPartners];

export { clientTypes, vols, ngo, bussines, startups, localPartners };
