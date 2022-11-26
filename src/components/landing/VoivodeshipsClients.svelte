<script lang="ts">
    
interface Voivodeship {
    title: string;
    img: string; 
    link: string;
    towns: string[];
}

const voivodeshipsListNow: Voivodeship[ ] = [
    {
        title: 'Pomorskie',
        img: 'pomorskie.svg',
        link: '',
        towns: ['Sopot', 'Gdańsk']
    },
    {
        title: 'Mazowieckie',
        img: 'mazowieckie.svg',
        link: '',
        towns: ['Warszawa']
    }
];

const voivodeshipsListNowFuture: Voivodeship[ ]= [
    {
        title: 'Zachodniopomorskie',
        img: 'zachodniopomorskie.svg',
        link: '',
        towns: ['']
    },
    {
        title: 'Wielkopolskie',
        img: 'wielkopolskie.svg',
        link: '',
        towns: ['']
    },
    {
        title: 'Warmińsko-mazurskie',
        img: 'warmińsko_mazurskie.svg',
        link: '',
        towns: ['']
    },
    {
        title: 'Świętokrzyskie',
        img: 'świętokrzyskie.svg',
        link: '',
        towns: ['']
    },
    {
        title: 'Śląskie',
        img: 'śląskie.svg',
        link: '',
        towns: ['']
    },
    {
        title: 'Podlaskie',
        img: 'podlaskie.svg',
        link: '',
        towns: ['']
    },
    {
        title: 'Podkarpackie',
        img: 'podkarpackie.svg',
        link: '',
        towns: ['']
    },
    {
        title: 'Opolskie',
        img: 'opolskie.svg',
        link: '',
        towns: ['']
    },
    {
        title: 'Małopolskie',
        img: 'małopolskie.svg',
        link: '',
        towns: ['']
    },
    {
        title: 'Lubuskie',
        img: 'lubuskie.svg',
        link: '',
        towns: ['']
    },
    {
        title: 'Lubelskie',
        img: 'lubelskie.svg',
        link: '',
        towns: ['']
    },
    {
        title: 'Łódzkie',
        img: 'łódzkie.svg',
        link: '',
        towns: ['']
    },
    {
        title: 'Kujawsko-pomorskie',
        img: 'kujawsko_pomorskie.svg',
        link: '',
        towns: ['']
    },
    {
        title: 'Dolnośląskie',
        img: 'dolnośląskie.svg',
        link: '',
        towns: ['']
    },
];   
    
</script>


<div class="lg:w-8/12 md:w-8/12 w-full flex-col  bg-viol  rounded-xl lg:p-10 md:p-10 p-2  justify-center items-center mb-12">
    <h2 class="text-center lg:text-6xl md:text-6xl text-4xl text-white font-black mb-4 ">
    Geografia naszych odbiorców
        <!-- Wspieramy  w zakresie IT na terenie całej Polski i nie tylko! -->
    </h2>
    <h3 class=" text-center lg:text-4xl md:text-4xl text-2xl text-white font-black mb-2 w-8/12">
        Województwa, które już otrzymały nasze wsparcie 
    </h3>
    <div class="flex flex-wrap flex-row justify-center lg:mb-8 md:mb-8 mb-4">
        {#each voivodeshipsListNow as voivodeship}
            <img class=" w-3/12 max-w-sm m-1" src="./images/clients/poland_voivodeships/{voivodeship.img}" alt={voivodeship.title}/> 
        {/each}
    </div>

    <h3 class="text-center lg:text-4xl md:text-4xl text-2xl text-white font-black mb-2 w-8/12">
        Województwa, do których jeszcze nie dojechaliśmy
    </h3>
    <div class="flex flex-wrap flex-row justify-center lg:w-8/12 md:w-10/12 w-12/12">
        {#each voivodeshipsListNowFuture as voivodeship}
            <img class="lg:w-1/12 md:w-1/12 w-2/12 max-w-sm m-1" src="./images/clients/poland_voivodeships/{voivodeship.img}" alt={voivodeship.title}/> 
        {/each}
    </div>
</div>
