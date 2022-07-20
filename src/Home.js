import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FxqtE2xrNPRtFLcsqcQXSRB-768-80.gif&f=1&nofb=1"
        />
        <div className="home__row">
          <Product
            id={123456}
            title="Moondrop Aria High Performance LCP Diaphragm Dynamic Driver IEMs in-Ear Earphone"
            price={79.25}
            image="https://m.media-amazon.com/images/I/41fu9ZdwDcL._AC_.jpg"
            rating={5}
          />
          <Product
            id={167856}
            title="Amazon Essentials Women's Lace-Up Combat Boot"
            price={35.55}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.toptenthebest.com%2Fwp-content%2Fuploads%2F2017%2F04%2F8.-Amazon-Essentials-Womens-Lace-Up-Combat-Boot.jpg&f=1&nofb=1"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={129876}
            title="BLACK+DECKER MOUSE 1.2 Amp Electric Detail Sander (BDEMS600)"
            price={39.55}
            image="https://m.media-amazon.com/images/I/81-6JGGmZyL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id={107605}
            title="Ensure Original Nutrition Shake with Fiber, Vanilla, 8 fl oz, 24 Count"
            price={39.25}
            image="https://m.media-amazon.com/images/I/61e9961P2uS._AC_SL1300_.jpg"
            rating={5}
          />
          <Product
            id={623545}
            title="FIJI Natural Artesian Water, 16.9 Fl Oz (Pack of 24)"
            price={21.41}
            image="https://m.media-amazon.com/images/I/61MX2BjMkeS._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={727841}
            title="Z-Edge 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide, 200Hz Refresh Rate, Curved Monitor, R1500 Curvature, MPRT 1ms FPS-RTS"
            price={289.75}
            image="https://m.media-amazon.com/images/I/71awP-m6s6L._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={722841}
            title="Bono - Stays in one place, eats woaches and ngangaws. Prefers wewow squash and pechay - Doesn't understand the concept of glass"
            price={0.99}
            image="https://highdesertmuseum.org/wp-content/uploads/2019/09/Bearded-Dragon.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
