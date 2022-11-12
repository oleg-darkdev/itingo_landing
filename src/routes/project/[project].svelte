<script>
    import { page } from '$app/stores';
    import StoryTailing from "../../components/workspace/projectPage/StoryTailing.svelte";
    import ContactOrganisation from "../../components/workspace/projectPage/ContactOrganisation.svelte";
    import AboutProgect from "../../components/workspace/projectPage/AboutProject.svelte";
    import Budget from "../../components/workspace/projectPage/Budget.svelte";
    import WorkTypeCard from "../../components/workspace/projectPage/WorkTypeCard.svelte";
    import VolunteerСard from '../../components/workspace/VolunteerСard.svelte';
    import ContactSection from "../../layout/ContactSection.svelte";
    import WorkspaceHeader from "../../layout/WorkspaceHeader.svelte";
	import TrelloBoardSection from '../../layout/workspace/TrelloBoardSection.svelte';
    import Partner from '../../components/workspace/projectPage/Partner.svelte';
    import orgsList  from '../../data/orgs/orgsList';
    import volunteerList from '../../data/volunteersList';
    import tasksList from "../../data/progectPage/tasksList";
    import FeedbackSection from "../../layout/FeedbackSection.svelte";
    

    let project = orgsList[$page.params.project];
    const progectData = {
        story: [
        'Organizacja Alternatywy 5, sąsiedzki dom w kamiennym potoku - od 2 lat organizuje warsztaty i wnosi wkład w rozwój społeczności lokalnej. Po raz kolejny przyszedł gość i zapytał: jak mogę znaleźć Alternatywy 5 w internecie? Sytuacja była dość niezręczna, bo nie było nawet logo.',
        'W tym samym momencie, w tym samym miejscu - był entuzjasta IT i aktywista społeczny, Oleg Medvedev - który zgłosił się do rozwiązania problemu dostępności informacji o organizacji w Internecie.  ',
        'Oleg dobrze znał członków zespołu i być może to dało mu motywację do ukończenia projektu przez 9 dni.',
        'Teraz platforma ITingo ma kolejnego zadowolonego klienta, a organizacja 5ALT ma stylowe logo i własną stronę internetową.'
        ],
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        ],
        name: 'Strona internetowa'
    };


    function convertCodeToText (element, taskType) {
        element.title = taskType.title;
        element.bgImage = taskType.bgImage; 
        element.tasks.forEach((elementCode, numberEl) => {
            taskType.codes.forEach(task=> {
                if (elementCode == task.code) element.tasks[numberEl] = task.text; 
            }); 
        }); 
        return element;
     }   


    function identifyTypeWork(element) {
        switch (element.title) {
        case '1':
            convertCodeToText (element, tasksList.frontEndTask);
            break;
        case '2':
            convertCodeToText (element, tasksList.backEndTask);
            break;
        case '3':
            convertCodeToText (element, tasksList.designTask);
            break;
        case '4':
            convertCodeToText (element, tasksList.photoVideoTask);
            break;
        case '5':
            convertCodeToText (element, tasksList.computersTask);
            break;
        case '6':
            convertCodeToText (element, tasksList.socialMediaTask);
            break;
        case '7':
            convertCodeToText (element, tasksList.projectingTask);
            break;
        case '8':
            convertCodeToText (element, tasksList.seoTask);
            break;
        case '9':
            convertCodeToText (element, tasksList.securityTask);
            break;
        // case '10':
        //     convertCodeToText (element, tasksList.frontEndTask);
        //     break;
        }
    }

	
    function converterTaskTypes () {
        project.report.workType.forEach((workType, workNumber) => {
           return workType[workNumber] = identifyTypeWork(workType);
        }); 
        return project.report.workType;
    }
</script>

<svelte:head>
	<title>{project.report.name}</title>
</svelte:head>

<WorkspaceHeader />

<section class="lg:p-12 pt-4 pb-4">
    <div class=" flex flex-row flex-wrap justify-center ">
        <AboutProgect 
            bio={project._bio}
            report={project._report}/>

        <!-- <div class="flex flex-col"> -->
            <StoryTailing text={progectData.story} />
            <ContactOrganisation contact={project._orgContacts}/>
        <!-- </div> -->
    </div>
</section>

<section class="p-12 bg-viol flex flex-col items-center ">
    <h3 class="text-4xl font-bold tracking-tight text-lightYellow">
        Budżet projektu     
    </h3> 
    <span class=" text-6xl mb-8  font-black  tracking-tight text-white ">
        {project._report.budget} PLN
    </span>
    <div class="flex mb-6 flex-col items-center">
        <h3 class="text-2xl  font-bold tracking-tight text-lightYellow ">
            Generalny sponsor projektu
        </h3> 
        <div class="flex-row flex flex-wrap">
            <a href={project._report.generalSponsor.link}>
                <img style="width: 400px; " class="logo-partners" src={project._report.generalSponsor.logo} alt={project._report.generalSponsor.title}>
            </a>
        </div>
    </div>
    <Partner title='Sponsorzy projektu' partners={project._report.sponsors}/>
    <Partner title='Partnerzy projektu' partners={project._report.partners}/>
    <Partner title='Lokalni partnerzy projektu' partners={project._report.localPartners}/>
</section>

<section class="p-12 bg-lightYellow flex flex-col items-center">
    <h3 class="mb-2 text-3xl text-center font-bold tracking-tight text-viol ">
        Rodzaje zadań w ramach projektu
    </h3> 
    <div class="flex flex-row flex-wrap justify-center w-full">
        {#await converterTaskTypes()}
            <p>...waiting</p>
        {:then project}
            {#each converterTaskTypes() as workTask}
                <WorkTypeCard {workTask}/>
            {/each}
        {/await}
    </div>
</section>

<section class="flex items-center flex-col lg:p-12 p-4 " >
    <TrelloBoardSection boardLink={project._report.trelloBoard}>
        <h2 class="lg:w-10/12 w-full m-8 text-center lg:text-6xl text-4xl text-viol font-bold " slot='title'>
            Aktualny status zrealizowanych zadań projektowych na Trello
        </h2> 
    </TrelloBoardSection>
</section>

<FeedbackSection />

<section class="flex flex-col items-center p-12 bg-viol">
    <h3 class="mb-2 text-3xl text-center font-bold tracking-tight text-lightYellow ">
        Wolontariusze i wolontariuszki projektu
    </h3> 
    <div class="flex-row flex flex-wrap lg:w-10/12 w-12/12 justify-center">
    {#each volunteerList.frontEnd.slice(0,6) as volunteerData}
        <VolunteerСard {volunteerData} />
    {/each}
    </div>
</section>

<ContactSection />