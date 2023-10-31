<script lang="ts">
    import Header from '../layout/landing/Header.svelte';
	import BannerSection from "../layout/landing/BannerSection.svelte";
    import WeDoForBlock from '../components/landing/WeDoForBlock.svelte';
    import FeedbackSection from "../layout/landing/FeedbackSection.svelte";
    import ContactSection from '../layout/landing/ContactSection.svelte';	
    import SiteMapSection from '../layout/landing/resources/SiteMapSection.svelte';

    const siteMapWorkspace: {name: string, route: string, description: string, path: any}[] = [
    {
      name: 'Home',
      route: '/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      path: [
        {
          link: '/',
          title: 'Home'
        },
        {
          link: '/',
          title: 'Home'
        },
      ]
    },
    
  ];
</script>

<svelte:head>
	<title>ITingo - about</title>
</svelte:head>

<Header />

<BannerSection bgImg='/images/landing/bg/banner_main-bg.svg'/> 

<a id="about-us"></a>
<WeDoForBlock />

<a id="feedback"></a>
<!-- <FeedbackSection /> -->

<a id="manifest"></a>
<a id="philosophy"></a>
<a id="support"></a>
<a id="roadmap"></a>

<a id="sitemap"></a>
<section class="flex flex-col items-center w-full pt-12 pb-12 ">
    <h2 class=" lg:text-5xl md:text-5xl text-4xl mb-6 text-violDark  font-black">
        Mapa platformy
    </h2>
    <div class="flex flex-col">
        <div class="flex-col m-1">
            <div class="rounded-lg max-w-sm p-4 flex flex-col bg-viol justify-center items-center">
                <h3 class=" lg:text-4xl md:text-4xl text-3xl mb-2 text-white  font-bold">
                    Workspace
                </h3>

                {#each siteMapWorkspace as page}
                    <SiteMapSection {page}/>
                {/each}
            </div>
        </div>
        <div class="flex-col m-1">
            <div class="rounded-lg max-w-sm p-4 flex flex-col bg-viol justify-center items-center">
                <h3 class=" lg:text-4xl md:text-4xl text-3xl mb-2 text-white  font-bold">
                    FAQ
                </h3>

                {#each siteMapWorkspace as page}
                    <SiteMapSection {page}/>
                {/each}
            </div>
        </div>
        <div class="flex-col m-1">
            <div class="rounded-lg max-w-sm p-4 flex flex-col bg-viol justify-center items-center">
                <h3 class=" lg:text-4xl md:text-4xl text-3xl mb-2 text-white  font-bold">
                    Registration
                </h3>

                {#each siteMapWorkspace as page}
                    <SiteMapSection {page}/>
                {/each}
            </div>
        </div>
    </div>
</section>
<a id="contact"></a>
<ContactSection />