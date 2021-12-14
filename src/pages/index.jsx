import CardRazasPerros from "components/CardRazasPerros";
import Layout from "layouts/Layout";
import borderCollie from "media/borderCollie.jpg";
import rhodesian from "media/rhodesian.jpg";

function Index() {
  return (
    <Layout>
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul className="breedCardContainer">
            <CardRazasPerros
              nombreRaza="BorderCollie"
              imagen={borderCollie}
              color="backGroundVerde"
            />
            <CardRazasPerros
              nombreRaza="Rhodesain"
              imagen={rhodesian}
              color="backGroundRojo"
            />
            <CardRazasPerros
              nombreRaza="Rhodesain"
              imagen={rhodesian}
              color="backGroundRojo"
            />
          </ul>
        </section>
        <section></section>
      </main>
    </Layout>
  );
}

export default Index;
