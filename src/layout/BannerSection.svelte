<script>
    import HelloSection from '../layout/landing/HelloSection.svelte';
    import SocialMedia from "../layout/contact/SocialMedia.svelte";

	export let bgImg;
</script>


<section style="background-image: url({bgImg});" class="lg:pt-10 pt-16 banner items-center  w-full  flex flex-col justify-start">
	<!-- <div style="width: 100px; height: 0;">
		<svg class="spin gear_sm gear_top_left"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.6 43.6"><defs><style>.cls-1{fill:#306;}</style></defs><path class="cls-1" d="M42.73,26.21l.53-5.73-4.41-.75a16.67,16.67,0,0,0-2-6.1l3.13-3L36.23,6.19,32.59,8.73a16.85,16.85,0,0,0-5.82-3l.06-4.21L21,1l-.72,4.15a16.89,16.89,0,0,0-6.47,2L11.07,4.29,6.6,8l2.29,3.22a16.85,16.85,0,0,0-3.24,6.14L1.9,17.26,1.36,23l3.74.64a16.46,16.46,0,0,0,2.22,6.69L4.68,32.86l3.71,4.43,3.12-2.18a17.09,17.09,0,0,0,6.34,3.07l-.06,3.76,5.79.53.68-3.93a16.8,16.8,0,0,0,6.46-2.24l2.83,2.89L38,35.51,35.54,32a16.75,16.75,0,0,0,2.89-5.88ZM21.14,31.06a9.22,9.22,0,1,1,10.14-8.33A9.27,9.27,0,0,1,21.14,31.06Z"/></svg>
		<svg class="spin-back gear_md gear_top_right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.56 58.56"><defs><style>.cls-1{fill:#306;}</style></defs><path class="cls-1" d="M56.63,34.77l.72-7.67-5.9-1a22.32,22.32,0,0,0-2.75-8.18l4.2-4L47.93,8l-4.87,3.4a22.63,22.63,0,0,0-7.81-4l.09-5.63L27.58,1l-1,5.55A22.72,22.72,0,0,0,18,9.2L14.22,5.4l-6,4.92,3.07,4.31A22.32,22.32,0,0,0,7,22.86l-5-.08-.72,7.68,5,.85a22.12,22.12,0,0,0,3,9L5.66,43.68l5,5.93L14.8,46.7a22.68,22.68,0,0,0,8.5,4.13l-.08,5,7.76.72.91-5.25a22.78,22.78,0,0,0,8.67-3l3.77,3.85,6-4.93L47,42.58a22.31,22.31,0,0,0,3.88-7.89ZM27.7,41.27A12.36,12.36,0,1,1,41.29,30.12,12.4,12.4,0,0,1,27.7,41.27Z"/></svg>
		<svg class="spin-back gear_md gear_bottom_right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.56 58.56"><defs><style>.cls-1{fill:#306;}</style></defs><rect class="cls-1" x="18.65" y="51.47" width="1.25" height="0.63"/><rect class="cls-1" x="13.65" y="51.47" width="1.25" height="0.63"/><rect class="cls-1" x="36.15" y="51.47" width="1.25" height="0.63"/><rect class="cls-1" x="16.15" y="51.47" width="1.25" height="0.63"/><rect class="cls-1" x="46.16" y="51.47" width="1.25" height="0.63"/><rect class="cls-1" x="43.66" y="51.47" width="1.25" height="0.63"/><rect class="cls-1" x="23.65" y="51.47" width="1.25" height="0.63"/><rect class="cls-1" x="38.66" y="51.47" width="1.25" height="0.63"/><rect class="cls-1" x="33.65" y="51.47" width="1.25" height="0.63"/><rect class="cls-1" x="11.15" y="51.47" width="1.25" height="0.63"/><rect class="cls-1" x="41.16" y="51.47" width="1.25" height="0.63"/><rect class="cls-1" x="21.15" y="51.47" width="1.25" height="0.63"/><rect class="cls-1" x="6.46" y="46.16" width="0.63" height="1.25"/><rect class="cls-1" x="6.46" y="11.15" width="0.63" height="1.25"/><rect class="cls-1" x="6.46" y="18.65" width="0.63" height="1.25"/><rect class="cls-1" x="6.46" y="16.15" width="0.63" height="1.25"/><rect class="cls-1" x="6.46" y="33.65" width="0.63" height="1.25"/><polygon class="cls-1" points="6.46 32.4 7.09 32.4 7.09 32.4 9.89 32.4 9.89 26.16 7.09 26.16 7.09 26.15 6.46 26.15 6.46 26.16 3.66 26.16 3.66 32.4 6.46 32.4 6.46 32.4"/><rect class="cls-1" x="6.46" y="13.65" width="0.63" height="1.25"/><rect class="cls-1" x="6.46" y="36.15" width="0.63" height="1.25"/><rect class="cls-1" x="6.46" y="38.66" width="0.63" height="1.25"/><rect class="cls-1" x="6.46" y="23.65" width="0.63" height="1.25"/><rect class="cls-1" x="6.46" y="43.66" width="0.63" height="1.25"/><rect class="cls-1" x="6.46" y="41.16" width="0.63" height="1.25"/><rect class="cls-1" x="6.46" y="21.15" width="0.63" height="1.25"/><rect class="cls-1" x="43.66" y="6.46" width="1.25" height="0.63"/><rect class="cls-1" x="16.15" y="6.46" width="1.25" height="0.63"/><rect class="cls-1" x="33.65" y="6.46" width="1.25" height="0.63"/><rect class="cls-1" x="13.65" y="6.46" width="1.25" height="0.63"/><rect class="cls-1" x="11.15" y="6.46" width="1.25" height="0.63"/><rect class="cls-1" x="41.16" y="6.46" width="1.25" height="0.63"/><rect class="cls-1" x="46.16" y="6.46" width="1.25" height="0.63"/><rect class="cls-1" x="18.65" y="6.46" width="1.25" height="0.63"/><rect class="cls-1" x="36.15" y="6.46" width="1.25" height="0.63"/><rect class="cls-1" x="21.15" y="6.46" width="1.25" height="0.63"/><rect class="cls-1" x="23.65" y="6.46" width="1.25" height="0.63"/><rect class="cls-1" x="38.66" y="6.46" width="1.25" height="0.63"/><rect class="cls-1" x="51.47" y="46.16" width="0.63" height="1.25"/><rect class="cls-1" x="51.47" y="11.15" width="0.63" height="1.25"/><rect class="cls-1" x="51.47" y="43.66" width="0.63" height="1.25"/><rect class="cls-1" x="51.47" y="13.65" width="0.63" height="1.25"/><polygon class="cls-1" points="52.09 26.15 51.47 26.15 51.47 26.16 48.66 26.16 48.66 32.4 51.47 32.4 51.47 32.4 52.09 32.4 52.09 32.4 54.9 32.4 54.9 26.16 52.09 26.16 52.09 26.15"/><rect class="cls-1" x="51.47" y="21.15" width="0.63" height="1.25"/><rect class="cls-1" x="51.47" y="23.65" width="0.63" height="1.25"/><rect class="cls-1" x="51.47" y="18.65" width="0.63" height="1.25"/><rect class="cls-1" x="51.47" y="16.15" width="0.63" height="1.25"/><rect class="cls-1" x="51.47" y="36.15" width="0.63" height="1.25"/><rect class="cls-1" x="51.47" y="41.16" width="0.63" height="1.25"/><polygon class="cls-1" points="52.09 48.66 51.47 48.66 51.47 48.67 48.66 48.67 48.66 51.47 48.66 51.47 48.66 52.09 48.66 52.09 48.66 54.9 54.9 54.9 54.9 48.67 52.09 48.67 52.09 48.66"/><rect class="cls-1" x="51.47" y="33.65" width="0.63" height="1.25"/><rect class="cls-1" x="51.47" y="38.66" width="0.63" height="1.25"/><polygon class="cls-1" points="9.89 48.67 7.09 48.67 7.09 48.66 6.46 48.66 6.46 48.67 3.66 48.67 3.66 54.9 9.89 54.9 9.89 52.09 9.9 52.09 9.9 51.47 9.89 51.47 9.89 48.67"/><polygon class="cls-1" points="9.89 3.66 3.66 3.66 3.66 9.89 6.46 9.89 6.46 9.9 7.09 9.9 7.09 9.89 9.89 9.89 9.89 7.09 9.9 7.09 9.9 6.46 9.89 6.46 9.89 3.66"/><polygon class="cls-1" points="48.66 3.66 48.66 6.46 48.66 6.46 48.66 7.09 48.66 7.09 48.66 9.89 51.47 9.89 51.47 9.9 52.09 9.9 52.09 9.89 54.9 9.89 54.9 3.66 48.66 3.66"/><polygon class="cls-1" points="32.4 3.66 26.16 3.66 26.16 6.46 26.15 6.46 26.15 7.09 26.16 7.09 26.16 9.89 32.4 9.89 32.4 7.09 32.4 7.09 32.4 6.46 32.4 6.46 32.4 3.66"/><polygon class="cls-1" points="32.4 48.67 26.16 48.67 26.16 51.47 26.15 51.47 26.15 52.09 26.16 52.09 26.16 54.9 32.4 54.9 32.4 52.09 32.4 52.09 32.4 51.47 32.4 51.47 32.4 48.67"/></svg>
	</div> -->

	<div style="" 
		
		 class="h-auto p-2 bg-viol lg:w-5/12 md:w-6/12  w-12/12  flex flex-col lg:rounded-xl md:rounded-xl justify-center">
		<h1 class="w-full text-center lg:text-7xl md:text-6xl text-4xl text-white font-black mb-8">
			<span style="" class="text-logo-letter-spacing text-lightYellow text-stantley">ITingo</span>
			 - dom IT wolontariatu</h1>
		<SocialMedia />
	</div>

		
	<!-- куда её ? -->
	<!-- <HelloSection>
	<ButtonGroup>
		<Button outline size="lg" color="purple">Znajdź wolontariuszy</Button>
		<Button size="lg" color="purple">Zostań wolontariuszem</Button>
	</ButtonGroup>
	</HelloSection> -->
</section>


<style>
.gear_sm, .gear_md, .gear_lg {
 	    display: block;
    float: left;
	position: absolute;
}

.gear_top_left {
	left: 32%;
	top: 12%;
}

.gear_bottom_right {
	right: 12%;
	bottom: 32%;
}

.gear_sm {
	width: 63.6px;
	height: 63.6px;
}
  
.gear_top_right {
	left: 34.5%;
	top: 16%;
}

.gear_md {
	width: 88.56px;
	height: 88.56px;
}

#gear_lg {
    top: 45px;
    left: 110px;
}

.spin {
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
}

.spin-back {
    -webkit-animation:spin-back 4s linear infinite;
    -moz-animation:spin-back 4s linear infinite;
    animation:spin-back 4s linear infinite;
}

@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

@-moz-keyframes spin-back { 100% { -moz-transform: rotate(-360deg); } }
@-webkit-keyframes spin-back { 100% { -webkit-transform: rotate(-360deg); } }
@keyframes spin-back { 100% { -webkit-transform: rotate(-360deg); transform:rotate(-360deg); } }
	
	@media (min-device-width: 320px) and (max-device-width: 1024px) {
		.banner {
			background-size: 100%; 
			margin-bottom: 10px;
			background-size: cover;
			background-position: right;
		}

		.text-logo-letter-spacing {
			letter-spacing: .3rem;
		}
	}
</style>