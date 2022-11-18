<script>
    import Header from '../layout/Header.svelte';
	import BannerSection from "../layout/BannerSection.svelte";
	import ClientsSection from '../layout/landing/ClientsSection.svelte';
	import StepsSection from '../layout/landing/StepsSection.svelte';
	import RegistrationBlock from "../layout/landing/RegistrationBlock.svelte";
	import ImpactSection from '../layout/landing/ImpactSection.svelte';
	import OurFamilySection from '../layout/landing/OurFamilySection.svelte';
	import FaqSection from '../layout/FaqSection.svelte';
	import ContactSection from '../layout/ContactSection.svelte';
	import dataForTimeline from '../data/ngo/dataForTimeline';
	import faqList from '../data/faq/landingFaqList';
	import FeedbackSection from "../layout/FeedbackSection.svelte";
	import SupportSection from '../layout/SupportSection.svelte';


	const supportNgo = 
		{
		title: 'Pomoc w realizacji stron www dla NGO',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		donateTypes: [
			{
				title: 'Hosting dla strony  na 1 miesiąc',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				img: 'images/support/support_ngo_server.svg',
				value: '22',
				animation: 'fade-right'
			},
			{
				title: 'Nazwa domeny na 1 rok',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				img: 'images/support/support_ngo_domain.svg',
				value: '45',
				animation: 'fade-down'
			},
			{
				title: 'Strona www',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				img: 'images/support/support_ngo_www.svg',
				value: '240',
				animation: 'fade-left'
			}
		]
	};

	const supportVols = 	{
		title: 'Pomoc IT wolontariuszom',
		description: 'Zebrane pieniądze przeznaczamy na wynajem serwerów i stworzenie nowych funkcjonalności dla platformy ITingo, zakup oprogramowania open-source - co pomaga nam znacznie skuteczniej pomagać organizacjom pozarządowym oraz IT wolontariaty.',
		donateTypes: [
        {
            title: 'Wynajem serwera na miesiąc dla ITingo',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'images/support/support_vols_edu.svg',
            value: '40',
				animation: 'fade-right'
        },
        {
            title: 'Stworzenie nowych funkcji dla platformy ITingo',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'images/support/support_vols_food.svg',
            value: '100',
				animation: 'fade-down'
        },
        {
            title: 'Zakupy oprogramowania typu open source',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'images/support/',
            value: '200',
				animation: 'fade-left'
        }
    ]
	};
	const supportCoordinator = 	{
		title: 'Wspierać koordynatora projektu',
		description: 'Założyciel ITingo to uchodźca polityczny z Białorusi, twórca wielu inicjatyw społecznych i po prostu niezły człowiek - potrzebujący osobistego wsparcia.',
		donateTypes: [
        {
            title: 'Olegowi na kawkę',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'images/support/support_oleg_coffe.svg',
            value: '15',
				animation: 'fade-right'
        },
        {
            title: 'Olegowi na obiad',
            description: 'Oleg być może jest kreatywnym inżynierem, ale jego gotowanie jest okropne. Nakarm Olega - smacznym obiadem.',
            img: 'images/support/support_oleg_eat.svg',
            value: '50',
				animation: 'fade-down'
        },
        {
            title: 'Olegowi na butlę z gazem',
            description: 'Oleg nie ma domu, nie może wrócić na Białoruś. Butle z gazem są jedynym środkiem do gotowania i ogrzewania przyczepy kempingowej, w której mieszka Oleg.',
            img: 'images/support/support_oleg_gas.svg',
            value: '100',
				animation: 'fade-left'
        }
    ]
};
	
	const supportITingo = 	{
		title: 'Udostępnij IT wolontariuszom możliwość pomagania NGO',
		description: 'Zebrane pieniądze przeznaczamy na wynajem serwerów i stworzenie nowych funkcjonalności dla platformy ITingo, zakup oprogramowania open-source - co pomaga nam znacznie skuteczniej pomagać organizacjom pozarządowym oraz IT wolontariaty.',
		donateTypes: [
        {
            title: 'Wynajem serwera na miesiąc dla ITingo',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'images/support/support_itingo_server.svg',
            value: '40',
				animation: 'fade-right'
        },
        {
            title: 'Stworzenie nowych funkcji dla platformy ITingo',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'images/support/support_itingo_code.svg',
            value: '100',
				animation: 'fade-down'
        },
        {
            title: 'Zakupy oprogramowania typu open source',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: 'images/support/support_itingo_tools.svg',
            value: '200',
				animation: 'fade-left'
        }

    ]
};

</script>

<Header />

<svelte:head>
	<title>ITingo - home</title>
</svelte:head>

<BannerSection bgImg='/images/landing/bg/banner_main-bg.svg'/> <!-- white -->

<ClientsSection /> <!-- yellow -->

<ImpactSection /> <!-- viol -->




<!-- <StepsSection text='Znajdz wykwalifikowanych IT wolontariuszy w 3 prostych krokach' {dataForTimeline}>
	<svelte:fragment slot="block">
		<RegistrationBlock /> 
	</svelte:fragment>
</StepsSection> -->


<!-- Closses progects --> <!-- white -->

<SupportSection supportData={[supportCoordinator, supportNgo, supportITingo, supportVols,]}/> <!-- viol , -->

<!-- Presentation --> <!-- white -->


<FeedbackSection /> <!-- yellow -->


<!-- become us --> <!-- viol -->

<!-- roadmap --> <!-- yellow -->


<!-- del <OurFamilySection /> -->


<FaqSection title='Pytania i odpowiedzi: sprawy ogólne' {faqList} bgImgClass='faq-bg-main'/> <!-- white -->

<ContactSection />


<style>
	.title {
		height: 300px;
	}




</style>

