<script>
  import WorkspaceSection from "../../layout/WorkspaceSection.svelte";
  import WorkspaceHeader from "../../layout/WorkspaceHeader.svelte";
  
  import VolunteerСard from '../../components/workspace/VolunteerСard.svelte';
  import volunteerList from '../../data/volunteersList';

  let sectionDataFrontEnd = {
    title: 'Front end',
    howMuch: volunteerList.frontEnd.length,
    topTitle: 'Top Volunteers',
    subTitle: 'Number of volunteers available',
    link: '/volunteer/front-end'
  };


  let topVolsFront = volunteerList.frontEnd.slice(0,2);



 import Banner from "../../layout/workspace/Banner.svelte";
 import FiltreVolunteers from '../../components/workspace/FiltreVolunteers.svelte';
</script>

<WorkspaceHeader />



<Banner bgImage='/images/workspace/bg/front_end_bg.svg'/>  
<section style="margin-top: -50px;" class="flex flex-row workspace flex justify-center  pt-4 pb-4 ">
  <WorkspaceSection sectionData={sectionDataFrontEnd}>
    <div slot="top" class="flex flex-row flex-wrap justify-center ">
      {#each topVolsFront as volunteerData}
        <VolunteerСard {volunteerData} />
      {/each}
    </div>
    <div class="flex flex-row w-full justify-center" slot="filtre">
      <FiltreVolunteers />
    </div>
    <div slot="all" class="projects-wrap w-full rounded-xl  flex flex-row flex-wrap justify-center mb-16">
      {#each volunteerList.frontEnd.slice(0,6) as volunteerData}
        <VolunteerСard {volunteerData} />
      {/each}
    </div>
  </WorkspaceSection>
</section>

