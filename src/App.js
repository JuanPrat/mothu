import './App.css';
import cakesLogo from './assets/img/nav_icons/torta.png';
import bakeryLogo from './assets/img/nav_icons/panaderia.png';
import customLogo from './assets/img/nav_icons/personalizado.png';
import desertLogo from './assets/img/nav_icons/postre.png';
import mothuLogo from './assets/img/LOGO-MOTHU.png';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Catalog from './pages/Catalog';

const handleClick = () =>{

}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/catalog">
          <Catalog />
        </Route>
        <Route path="/">
          <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Mothú</title>
            <link rel="icon" href="./assets/img/LOGO-MOTHÚ.png" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@400;500&display=swap" rel="stylesheet" />
          </head>
          <nav>
            <div className="primary-nav" id="primary-nav">
              <a href="#jumbotron"><img id="logo" src={mothuLogo} /></a>
              <div className="secondary-nav">
                <a href="#cakes">
                  <div className="nav__item">
                    <img className="nav__icon" src={cakesLogo} alt="" />
                    <p>Tortas</p>
                  </div>
                </a>
                <a href="#bakery">
                  <div className="nav__item">
                    <img className="nav__icon" src={bakeryLogo} alt="" />
                    <p>Panadería</p>
                  </div>
                </a>
                <a href="#deserts">
                  <div className="nav__item">
                    <img className="nav__icon" src={desertLogo} alt="" />
                    <p>Postres</p>
                  </div>
                </a>
                <a href="#custom">
                  <div className="nav__item">
                    <img className="nav__icon" src={customLogo} alt="" className="nav__icon" />
                    <p>Pers.</p>
                  </div>
                </a>
              </div>
            </div>
          </nav>
          <section className="jumbotron" id="jumbotron"></section>
          <main>
            <div className="golden-bg">
              <section className="cakes">
                <div className="title">
                  <h1 className="h1-dark" id="cakes">Tortas</h1>
                </div>
              </section>
              <section className="description">
                <h1>Cocinamos con amor y dedicación todo tipo de tortas</h1>
                <div className="parragraph">
                  <p align="center">En mothú buscamos la perfección de nuestras tortas y ello lo logramos con la calidad de los
                    ingredientes que
                    usamos. En nuestros productos buscamos la suavidad, un sabor exquisito y una decoración hermosa para las
                    ocasiones en donde tengamos el placer de llegar.</p>
                    <button className="view-more-button"><Link to="/catalog" >Yo quiero 🤤</Link></button>
                </div>
              </section>
              <div className="content">
                <section className="collage-grid">
                  <div className="collage-grid__image">
                    <img src={'assets/img/collage/torta1.jpg'} />
                  </div>
                  <div className="collage-grid__image">
                    <img src="assets/img/collage/torta2.jpg" />
                  </div>
                  <div className="collage-grid__image">
                    <img src="assets/img/collage/torta3.jpg" />
                  </div>
                  <div className="collage-grid__image">
                    <img src="assets/img/collage/torta4.jpg" />
                  </div>
                  <div className="collage-grid__image">
                    <img src="assets/img/collage/torta5.jpg" />
                  </div>
                  <div className="collage-grid__image">
                    <img src="assets/img/collage/torta6.jpg" />
                  </div>
                  <div className="collage-grid__image">
                    <img src="assets/img/collage/torta7.jpg" />
                  </div>
                  <div className="collage-grid__image">

                  </div>
                  <div className="collage-grid__image">

                  </div>
                </section>
              </div>
            </div>
            <div className="dark-bg">
              <section className="bakery">
                <div className="title">
                  <h1 id="bakery">Panadería</h1>
                </div>
                <div className="content">
                </div>
              </section>
              <section className="description">
                <h1>Cocinamos con amor y dedicación todo tipo de panes</h1>
                <div className="parragraph">
                  <p align="center">El gluten es la estrella en mothú y en nuestros hornos crece los mejores panes gracias al amor
                    y dedicación
                    que tenemos en nuestras manos. Chocolate, queso y demás sabores se juntaran con la suavidad de nuestra miga
                    para traer felicidad al paladar de nuestros clientes.</p>
                    <button className="view-more-button"><Link to="/catalog" >Yo quiero 🤤</Link></button>
                </div>
              </section>

              <div className="content">
                <section className="collage-grid">
                  <div className="collage-grid__image">
                    <img src="assets/img/collage/panaderia1.jpg" />
                  </div>
                  <div className="collage-grid__image">
                    <img src="assets/img/collage/panaderia2.jpg" />
                  </div>
                  <div className="collage-grid__image">
                    <img src="assets/img/collage/panaderia3.jpg" />
                  </div>
                  <div className="collage-grid__image">
                    <img src="assets/img/collage/panaderia4.jpg" />
                  </div>
                  <div className="collage-grid__image">
                    <img src="assets/img/collage/panaderia5.jpg" />
                  </div>
                  <div className="collage-grid__image">
                    <img src="assets/img/collage/panaderia6.jpg" />
                  </div>
                  <div className="collage-grid__image">
                    <img src="assets/img/collage/panaderia7.jpg" />
                  </div>
                  <div className="collage-grid__image">

                  </div>
                  <div className="collage-grid__image">

                  </div>
                </section>
              </div>
            </div>
            <div className="golden-bg">
              <section className="deserts">
                <div className="title">
                  <h1 className="h1-dark" id="deserts">Postres</h1>
                </div>
              </section>
              <section className="description">
                <h1>Cocinamos con amor y dedicación todo tipo de postres</h1>
                <div className="parragraph">
                  <p align="center">En mothú se encuentran los mejores postres y con las mejores tendencias para los amantes de
                    nuestros
                    productos, buscamos endulzar vuestros momentos con cheesecakes, mousse y demás preparaciones que tenemos.</p>
                    <button className="view-more-button"><Link to="/catalog" >Yo quiero 🤤</Link></button>
                </div>
                <div className="content">
                </div>
              </section>
              <div className="content">
                <section className="collage-grid">
                  <div className="collage-grid__image">
                    <img src="assets/img/collage/postre1.jpg" />
                  </div>
                  <div className="collage-grid__image">

                  </div>
                  <div className="collage-grid__image">

                  </div>
                  <div className="collage-grid__image">

                  </div>
                  <div className="collage-grid__image">

                  </div>
                  <div className="collage-grid__image">

                  </div>
                  <div className="collage-grid__image">

                  </div>
                  <div className="collage-grid__image">

                  </div>
                  <div className="collage-grid__image">

                  </div>
                </section>
              </div>
            </div>
            <div className="dark-bg">
              <section className="custom">
                <div className="title">
                  <h1 className="h1" id="custom">Personalizados</h1>
                </div>
                <div className="content">
                </div>
              </section>
              <section className="description">
                <h1>Cocinamos con amor y dedicación todo tipo de tortas</h1>
                <div className="parragraph">
                  <p align="center">En mothú buscamos la perfección de nuestras tortas y ello lo logramos con la calidad de los
                    ingredientes que
                    usamos. En nuestros productos buscamos la suavidad, un sabor exquisito y una decoración hermosa para las
                    ocasiones en donde tengamos el placer de llegar.</p>
                    <button className="view-more-button"><Link to="/catalog" >Yo quiero 🤤</Link></button>
                </div>
              </section>
              <div className="content">
                <section className="collage-grid">
                  <div className="collage-grid__image">
                    <img src="assets/img/collage/personalizada1.jpg" />
                  </div>
                  <div className="collage-grid__image">
                    <img src="assets/img/collage/personalizada2.jpg" />
                  </div>
                  <div className="collage-grid__image">
                    <img src="assets/img/collage/personalizada3.jpg" />
                  </div>
                  <div className="collage-grid__image">
                    <img src="assets/img/collage/personalizada4.jpg" />
                  </div>
                  <div className="collage-grid__image">

                  </div>
                  <div className="collage-grid__image">

                  </div>
                  <div className="collage-grid__image">

                  </div>
                  <div className="collage-grid__image">

                  </div>
                  <div className="collage-grid__image">

                  </div>
                </section>
              </div>
            </div>
          </main>
          <footer>
            <section className="social-media">
              <a href="https://www.instagram.com/mothugastro/" target="_blank"><img
                src="https://img.icons8.com/ios/100/000000/instagram-new--v1.png" /></a>
              <a target="_blank"><img src="https://img.icons8.com/ios/100/000000/whatsapp--v1.png" /></a>
            </section>
            <section className="IT">Made With 🧡 By <a href="https://www.linkedin.com/in/juanjose96/" target="_blank">Tech Team</a>
            </section>
          </footer>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
