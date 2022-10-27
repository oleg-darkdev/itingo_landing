<div class="wrap-social-container mb-4 flex-col items-center justify-center">
    <div class="social-animation-container">
        <a href="/"><i class="icon-facebook fb soc-icon"></i></a>
        
        <a href="/"><i class="icon-twitter tw soc-icon"></i></a>
        <!-- <i class="icon-youtube yt"></i> -->
        <a href="/"><i class="icon-linkedin ln soc-icon"></i></a>
        <a href="/"><i class="icon-github gh soc-icon"></i></a>
       
    </div>
    <h2 class="w-full text-center text-3xl text-white font-black m-0"><i class="icon-hand-up text-lightYellow"></i> w mediach <i class="icon-hand-up text-lightYellow"></i></h2>
</div>


<style>
    	
@-webkit-keyframes wiggle {
  0% {
    transform: rotateZ(2deg);
  }
  50% {
    transform: rotateZ(-2deg);
  }
  100% {
    transform: rotateZ(2deg);
  }
}


:global(.wrap-social-container) {
  width: 100%;
  text-align: center;
}

:global(.social-animation-container) {
  font-size: 2.5em;
  height: 60px;
  max-width: 360px;
  overflow: hidden;
  border-bottom: 1px solid #abc;
}

:global(.soc-icon) {
  position: relative;
  top: 25px;
  margin: 0 10px;
  transition: all 100ms cubic-bezier(0.42, 0, 0.58, 1);
  /* ease-in-out */
}
:global(.soc-icon:hover) {
  top: 5px;
}

.fb {
  color: #ea4c89;
}

.tw {
  color: #09AEEC;
}

.dr {
  color: #ea4c89;
}

.ln {
  color: #00A5E6;
}

.gh {
  color: #fff;
}
</style>