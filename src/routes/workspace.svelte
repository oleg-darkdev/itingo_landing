<script>
  import WorkspaceSection from "../layout/WorkspaceSection.svelte";
  
  import VolunteerСard from '../components/workspace/VolunteerСard.svelte';
  import volunteerList from '../data/volunteersList';

  let sectionDataFrontEnd = {
    title: 'Front end',
    howMuch: volunteerList.frontEnd.length,
    topTitle: 'Top Volunteers',
    subTitle: 'Number of volunteers available',
    link: '/volunteers/front-end'
  };


  let topVolsFront = volunteerList.frontEnd.slice(0,2);
</script>


<WorkspaceSection sectionData={sectionDataFrontEnd}>
  <div slot="top" class="flex flex-row flex-wrap justify-center ">
    {#each topVolsFront as volunteerData}
      <VolunteerСard {volunteerData} />
    {/each}
  </div>
  <div slot="all" class="projects-wrap w-full rounded-xl  flex flex-row flex-wrap justify-center mb-16">
    {#each volunteerList.frontEnd.slice(0,6) as volunteerData}
      <VolunteerСard {volunteerData} />
    {/each}
  </div>
</WorkspaceSection>