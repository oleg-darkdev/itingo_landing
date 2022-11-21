<script>
    import Header from '../layout/Header.svelte';
	import BannerSection from "../layout/BannerSection.svelte";
    import WeDoForBlock from '../components/WeDoForBlock.svelte';
    import FeedbackSection from "../layout/FeedbackSection.svelte";
    import ContactSection from '../layout/ContactSection.svelte';	
</script>

<svelte:head>
	<title>ITingo - about</title>
</svelte:head>

<Header />

<BannerSection bgImg='/images/landing/bg/banner_main-bg.svg'/> 

<a id="about-us"></a>
<WeDoForBlock />

<a id="feedback"></a>
<FeedbackSection />

<a id="manifest"></a>
<a id="philosophy"></a>
<a id="support"></a>
<a id="roadmap"></a>


<a id="contact"></a>
<ContactSection />