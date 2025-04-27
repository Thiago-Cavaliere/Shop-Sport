import { Search } from "lucide-react";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <section className="home__container">
        <nav className="navbar">
          <div className="logo">
            <span className="logo__top">SPORT</span>
            <span className="logo__bottom">HUB</span>
          </div>

          <div className="search__container">
            <Search className="search__icon" />
            <input
              type="text"
              className="search__input"
              placeholder="Search..."
            />
          </div>

          <ul className="nav__links">
            <li>
              <a href="#">MAIN</a>
            </li>
            <li>
              <a href="#">OFFERS</a>
            </li>
            <li>
              <a href="#">PRODUCTS</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
          </ul>
        </nav>

        <img src="./fundo.png" alt="fundo da imagem" />
      </section>

      <section>
        <div className="home__content">
          <h1 className="home__title">
            READY TO <span className="highlight">PLAY</span>
          </h1>
          <p className="home__description">
            All types of sports products available here!
          </p>

          <section className="images-section">
            <div className="rectangle-container">
              <img
                src="/RectangleYellow.png"
                alt=""
                className="yellow-rectangle"
              />
              <img src="/pngegg17.png" alt="" className="overlay-image" />
            </div>

            <div className="rectangle-container">
              <img
                src="RectangleBlue.png"
                alt=""
                className="yellow-rectangle"
              />
              <img src="pngegg18.png" alt="" className="overlay-image" />
            </div>

            <div className="rectangle-container">
              <img
                src="RectangleWhite.png"
                alt=""
                className="yellow-rectangle"
              />
              <img src="SeekPng2.png" alt="" className="overlay-image" />
            </div>

            <div className="rectangle-container">
              <img
                src="RectangleOrange.png"
                alt=""
                className="yellow-rectangle"
              />
              <img src="PngItem14348.png" alt="" className="overlay-image" />
            </div>
          </section>

          {/* Botão SHOP NOW */}
          <div className="button-container">
            <button className="shop-now-button">SHOP NOW!</button>
          </div>
        </div>
      </section>
    </main>
  );
}
