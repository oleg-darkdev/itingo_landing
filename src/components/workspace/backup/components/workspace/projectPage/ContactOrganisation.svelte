<script>

export let contact;
</script>

<a class="bg-viol m-4 contacts-wrap rounded-lg border border-gray-200  shadow-md flex max-w-sm flex-col  p-4 sm:p-6 ">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white ">
        Skontaktuj się
    </h5> 
    <p class="font-normal text-1xl m-1 text-white leading-tight ">
        <i class="icon-contacts-org icon-phone mr-2"></i>{contact.number} <span class="font-bold text-lightYellow ">({contact.nameOfContact})</span>
    </p>    
    <p class="font-normal text-1xl m-1 text-white leading-tight ">
        <i class="icon-contacts-org icon-time mr-2"></i>godzina na kontakt: <span class="font-bold text-lightYellow ">{contact.contactTime}</span>
    </p>
    <p class="font-normal text-1xl m-1 text-white leading-tight ">
        <i class="icon-contacts-org icon-envelope mr-2"></i><span class="font-bold text-lightYellow ">{contact.email}</span>
    </p>
    <div class="wrap-social-container mb-8 flex-col items-center justify-center">
        <div class="social-animation-container">
            <a target="_blank" href="{contact.facebook}"><i class="icon-facebook fb soc-icon"></i></a>
            <a target="_blank" href="{contact.twitter}"><i class="icon-twitter tw soc-icon"></i></a>
            <a target="_blank" href="{contact.linkedin}"><i class="icon-linkedin ln soc-icon"></i></a> 
            <a target="_blank" href="{contact.instagram}"><i class="icon-instagram in soc-icon"></i></a>
        </div>
        <h2 class="w-full text-center text-3xl text-white font-black m-0"><i class="icon-hand-up text-lightYellow"></i> w mediach <i class="icon-hand-up text-lightYellow"></i></h2>
    </div>
</a>



<style>
    .contacts-wrap {
        max-height: 300px;
    }
    .icon-contacts-org  {
      color: #FFC800;

    }
</style>