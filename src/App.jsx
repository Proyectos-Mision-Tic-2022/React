import CardRazasPerros from 'components/CardRazasPerros';
import "styles/styles.css";
import logo from "media/logo.png";
import borderCollie from "media/borderCollie.jpg";
import rhodesian from "media/rhodesian.jpg";

function App() {
  return (
    <div className="App">
      <header>
        
        <ul className="navbar">
          <li>
            <img src={logo} alt="imagen" className="logo" />
          </li>
          <li>
            <button className="botonGenerico mainButton">Nuevo post</button>
          </li>
          <li>
            <div className="buscar">
              <input placeholder="Buscar una raza" />
              <i className="fas fa-search botonGenerico iconoBusqueda"></i>
            </div>
          </li>
          <li>
            <button className="botonGenerico secondaryButton">Login</button>
          </li>
          <li>
            <button className="botonGenerico mainButton">Registro</button>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul className="breedCardContainer">
            <CardRazasPerros nombreRaza="BorderCollie" imagen={borderCollie} color='backGroundVerde'/>
            <CardRazasPerros nombreRaza="Rhodesain" imagen={rhodesian} color='backGroundRojo'/>
            <CardRazasPerros nombreRaza="Rhodesain" imagen={rhodesian} color='backGroundRojo' />
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
