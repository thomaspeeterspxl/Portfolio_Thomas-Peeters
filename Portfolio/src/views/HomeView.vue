<script setup>

</script>

<template>
  <main id="over_mij">
    <section id="profiel">
      <article>
        <img src="@/assets/images/MicrosoftTeams-image (19).png" alt="profielfoto">
      </article>
      <article id="persoonlijke-info">
        <h1>Wie ben ik?</h1>
        <p>Ik ben Thomas Peeters.</p>
        <p>20 jaar oud en wonende te Hasselt.</p>
        <p>Ik ben een vrolijk, een behulpzaam persoon en een doorzetter.</p>
        <p>Mijn hobby's zijn skeeleren en mijn studentenjob.</p>

        <p>Ik heb voor graduaat digitale vormgeving gekozen omdat ik visueel sterk ben aangelegd. Ik ben een zeer
          creatief persoon. Ik leer gemakkelijker door het in de praktijk te kunnen toepassen.</p>

        <p>Soft skills: creatief, sociaal, groepswerk, punctueel, respectvol, leergierig, enthousiast</p>
        <button id="cv"><a
            href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:c4e8ac0c-fadf-32ba-a4b0-60e66133784b"
            target="_blank">CV</a></button>
      </article>
    </section>
    <div id="hardskills_title">
      <p>Gedurende mijn 2 jaar in deze opleiding leer ik werken met een aantal software.</p>
    </div>
    <section class="hard_skills">
      <section class="vakken">
        <h1>Graphic skills -- 2022-2023</h1>
        <button class="creatie"><a href="#" target="_self">Creaties</a></button>
        <article class="boxes">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <img src="@/assets/images/Adobe%20Photoshop.png" alt="ps">
              </div>
              <div class="flip-box-back">
                <h2>70%</h2>
              </div>
            </div>
          </div>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <img src="@/assets/images/Adobe%20Illustrator.png" alt="ai">
              </div>
              <div class="flip-box-back">
                <h2>70%</h2>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section class="vakken">
        <h1>UI -- 2022-2023 - UX -- 2022-2024</h1>
        <button class="creatie"><a href="#" target="_self">Creaties</a></button>
        <article class="boxes">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <img src="@/assets/images/Adobe%20XD.png" alt="xd">
              </div>
              <div class="flip-box-back">
                <h2>60%</h2>
              </div>
            </div>
          </div>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <img class="code" src="@/assets/images/figma.png" alt="figma">
              </div>
              <div class="flip-box-back">
                <h2>65%</h2>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section class="vakken">
        <h1>Motion design -- 2023-2024</h1>
        <button class="creatie"><a href="#" target="_self">Creaties</a></button>
        <article class="boxes">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <img class="code" src="@/assets/images/Blender_logo.png" alt="blender">
              </div>
            </div>
          </div>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <img class="code" src="@/assets/images/adobe-after-effects.png" alt="blender">
              </div>
            </div>
          </div>
        </article>
      </section>
    </section>
    <section class="hard_skills">
    <section class="vakken">
      <h1>Web essentials & advanced -- 2022-2023</h1>
<!--      <p>Dit portfolio is gemaakt door mezelf, ik heb gebruik gemaakt van html, css en javascript.</p>-->
      <button class="creatie"><a href="https://github.com/thomaspeeterspxl/portfolio-semester2.git" target="_blank">Github</a>
      </button>
      <!--        <p><a href="webshop/index.html">wp2</a></p>-->
      <article class="boxes">
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img class="code" src="@/assets/images/html.png" alt="html">
            </div>
          </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img class="code" src="@/assets/images/css.png" alt="css">
            </div>
          </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img class="code" src="@/assets/images/js.png" alt="js">
            </div>
          </div>
        </div>
      </article>
    </section>
    <section class="vakken">
      <h1>Web expert -- 2023-2024</h1>
      <button class="creatie"><a href="#" target="_self">Creaties</a></button>
      <article class="boxes">
            <div class="box">
              <img class="code" src="@/assets/images/sass_logo.png" alt="sass">
            </div>
            <div class="box">
              <img class="code" src="@/assets/images/vue_logo.png" alt="vue">
            </div>
            <div class="box">
              <img class="code" src="@/assets/images/Wordpress.png" alt="vue">
            </div>
      </article>
    </section>
    </section>
  </main>
</template>

<style>
#profiel {
  margin: 5rem auto 8rem 150px;
  display: flex;
  justify-content: flex-start;
}

#over_mij #profiel img {
  width: 437px;
  height: 633px;
  margin: 20px 60px 0 0;
}

main #profiel #persoonlijke-info {
  height: 320px;
  /*margin: 10px 0 0 0;*/
}

#persoonlijke-info h1 {
  padding: 0 25px 0 20px;
  font-size: 40px;
  color: #545479;
}

#persoonlijke-info p {
  padding: 0 25px 0 20px;
  font-size: x-large;
}

#cv {
  width: 275px;
  height: 50px;
  background: #5C9D8B;
  border: #5C9D8B solid 1px;
  border-radius: 20px;
  margin-left: 20px;
}

.creatie {
  width: 150px;
  height: 35px;
  background: #5C9D8B;
  border: #5C9D8B solid 1px;
  border-radius: 20px;
}

main button a:link {
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  color: #EBFDF8;
  text-decoration: none;
}

main button a:visited {
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  color: #EBFDF8;
  text-decoration: none;
}

#hardskills_title p {
  margin: 20px 0 0 150px;
  /*width: 675px;*/
  font-size: medium;
}

.hard_skills {
  margin: 3rem auto 5rem 150px;
  display: flex;
}

.hard_skills .boxes {
  display: flex;
  flex-wrap: wrap;
}

.hard_skills .boxes .code {
  width: 107px;
  height: 107px;
  margin: 17px;
}

.flip-box {
  background-color: transparent;
  width: 145px;
  height: 145px;
  perspective: 1000px;
  margin: 25px 25px 25px 0;
}

.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/*.flip-box:hover .flip-box-inner {*/
/*    transform: rotateX(180deg);*/
/*}*/

/*.flip-box-front, .flip-box-back {*/
/*  position: absolute;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  backface-visibility: hidden;*/
/*  border-radius: 50px;*/
/*  border: #545479 solid 2px;*/
/*}*/

/*.flip-box-front {*/
/*  background-color: #EBFDF8;*/
/*  color: black;*/
/*}*/

/*.flip-box-back {*/
/*  background-color: #545479;*/
/*  color: white;*/
/*  transform: rotateX(180deg);*/
/*  margin: 0 auto;*/
/*}*/

.vakken{
 margin-right: 150px;
}
</style>