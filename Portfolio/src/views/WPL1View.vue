<template>
  <main id="main-wpl1">
    <section id="txt-wpl">
      <h1>WPL1</h1>
      <p>Tijdens wpl1 hebben we enkele opdrachten moeten maken, via de knoppen op deze pagina kan je enkele van deze opdrachten bekijken.</p>
    </section>

    <div id="knoppen-wpl">
      <article id="flexitem-wpl1">
        <button>
          <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:792b8a90-ac0a-4df3-8244-4bfd50671f5d" target="_blank">POP-Personal
            branding</a>
        </button>

      </article>
      <article id="flexitem-wpl2">
        <button>
          <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:74b083cb-76fa-4b60-a79e-c214088908ae" target="_blank">POP-motivatie,
            waarden en kernwaarden</a>
        </button>
      </article>
      <article id="flexitem-wpl3">
        <button>
          <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:cf560ab6-3b17-3394-a039-84355c506ab1" target="_blank">POP-feedback
            en reflecteren</a>
        </button>
      </article>
      <article id="flexitem-wpl4">
        <button>
          <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:9b6962e9-b495-392c-b3eb-97a5c0555f7a" target="_blank">Reflectie
            seminaries</a>
        </button>
      </article>
      <article id="flexitem-wpl5">
        <button>
          <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:6f694779-c031-3cd1-97a9-a74a42c8cd81" target="_blank">Analyse
            arbeidsmarkt</a>
        </button>
      </article>
    </div>
  </main>
</template>

<script>
export default {
  name: "WPL1"
}
</script>

<style scoped>
#txt-wpl{
  margin: 50px 0 0 75px;
}
#txt-wpl h1{
  font-size: 40px;
  color: #545479;
}
#txt-wpl p{
  font-size: large;
}

#knoppen-wpl {
  height: 10rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 600px;
  margin: 75px auto;
}
#knoppen-wpl button {
  border-radius: 5px;
  padding: 10px;
  margin: 0 2rem 2rem 0;
  background: #5C9D8B;
  border: #5C9D8B solid 1px;
}

#knoppen-wpl button a:link{
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: #EBFDF8;
  text-decoration: none;
}

#knoppen-wpl button a:visited{
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  color: #EBFDF8;
  text-decoration: none;
}
</style>