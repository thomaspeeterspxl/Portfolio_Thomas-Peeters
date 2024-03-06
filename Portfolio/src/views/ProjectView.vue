<template>
  <header id="gs">
    <h1 id="design">design projecten</h1>
  </header>
  <main>
    <div id="main-gs">
      <article>
        <img class="zoom" src="@/assets/images/monkey2.jpg" alt="aap">
      </article>
      <article>
        <img class="zoom" src="@/assets/images/road.png" alt="spiderman_gif">
      </article>
      <article>
        <img class="zoom" src="@/assets/images/blikjes.jpg" alt="blikjes">
      </article>
      <article>
        <img class=zoom src="@/assets/images/fiets_reclame.jpg" alt="fiets_reclame">
      </article>
      <article>
        <img class="zoom" src="@/assets/images/bottle_joker.jpg" alt="fles_joker">
      </article>
      <article>
        <img class="zoom"  src="@/assets/images/info.png" alt="reclame">
      </article>
      <article>
        <img class="zoom" src="@/assets/images/reclame%20op%20laptop.png" alt="fles_joker">
      </article>
      <article>
        <img class="zoom" src="@/assets/images/berg.png" alt="fles_joker">
      </article>
      <article>
        <img class="zoom reclame" src="@/assets/images/links.png" alt="reclame">
      </article>
      <article>
        <img class="zoom reclame"  src="@/assets/images/rechts.png" alt="reclame">
      </article>

    </div>
    <section>
      <div id="knoppen-gs">
        <article id="flexitem-gs">
          <button>
            <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:91d76097-8c04-3063-aa69-420b2633e377" target="_blank">Logo rebrand</a>
          </button>

        </article>
        <article id="flexitem-gs2">
          <button>
            <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:f5b9da25-47c8-3f94-805e-d95871310f8e" target="_blank">Monogram-TP</a>
          </button>
        </article>
        <article id="flexitem-gs3">
          <button>
            <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:67b1b5b2-5ee8-3d5f-9428-c90911658fe6" target="_blank">Brandbook_illustrator</a>
          </button>
        </article>
        <article id="flexitem-gs4">
          <button>
            <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:2214ba94-caa9-3b6b-978a-4fe16ba9513c" target="_blank">Banners_photoshop</a>
          </button>
        </article>
        <article id="flexitem-gs5">
          <button>
            <a href="https://www.figma.com/proto/CrRIBgHT7MKPdtVl0PjzCu/Workshop-Figma---PXL-2023-(Copy)?page-id=1333%3A1136&node-id=1477-2552&scaling=contain" target="_blank">Spotify_figma</a>
          </button>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "ProjectView"
}
</script>

<style scoped>
#main-gs{
  display: flex;
  flex-wrap: wrap;
}
#gs h1{
  margin: 2rem 0 0 2rem;
}


.zoom {
  padding: 25px;
  /*transition: transform .2s;*/
  margin: 2rem 0 2rem 100px;
}

/*.zoom:hover {*/
/*    transform: scale(1.10);*/
/*}*/

.reclame{
  height: 300px;
  width: 300px;
}
#knoppen-gs {
  height: 10rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 600px;
  margin: 75px auto;
}
#knoppen-gs button {
  border-radius: 5px;
  padding: 15px;
  margin: 0 2rem 2rem 0;
  background: #5C9D8B;
  border: #5C9D8B solid 1px;
}

#knoppen-gs button a:link{
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: #EBFDF8;
  text-decoration: none;
}

#knoppen-gs button a:visited{
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  color: #EBFDF8;
  text-decoration: none;
}
</style>