<script>
	import Header from '../layout/Header.svelte';

	import FaqSection from '../layout/FaqSection.svelte';
	import mainfaqList from '../data/landing/landingFaqList';
	import ngoFaqList from '../data/ngo/ngoFaqList';
	import businessFaqList from '../data/ngo/ngoFaqList';
	import volounteersFaqList from '../data/ngo/ngoFaqList';
	
</script>

<svelte:head>
	<title>ITingo - FAQ</title>
</svelte:head>

<Header />

<FaqSection faqList={mainfaqList}/>
<FaqSection faqList={ngoFaqList}/>
<FaqSection faqList={businessFaqList}/>
<FaqSection faqList={volounteersFaqList}/>

<style>
    
</style>