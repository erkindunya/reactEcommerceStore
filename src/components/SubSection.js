import React, { Component } from "react";
import Store from "./Store";

const highTops = [
  {
    img:
      "https://s-media-cache-ak0.pinimg.com/736x/7d/d6/fc/7dd6fc319e49a69b8e830fc888df3a00--adidas-sneakers-sneakers-women.jpg",
    title: "1995 Addidas Neon",
    price: "$120"
  },
  {
    img:
      "https://s-media-cache-ak0.pinimg.com/originals/25/d0/d2/25d0d244f42de29fca53fdddbce88321.jpg",
    title: "1985 Black Converse",
    price: "$98"
  },
  {
    img:
      "http://coolspotters.com/files/photos/860090/reebok-classic-chi-kaze-high-top-sneakers-profile.jpg",
    title: "1976 Reebok Classics",
    price: "$240"
  },
  {
    img:
      "https://i.ebayimg.com/thumbs/images/m/mSBtCCwxoCIr7Z-PRujzghQ/s-l225.jpg",
    title: "High Top Thrasher Converse",
    price: "$200"
  },
  {
    img:
      "https://cdn-images.farfetch-contents.com/11/72/45/86/11724586_8184761_322.jpg",
    title: "1965 White Reebok Classics",
    price: "$320"
  },
  {
    img:
      "http://14042-presscdn-0-36.pagely.netdna-cdn.com/wp-content/uploads/2010/05/nike-sweet-classic-high.jpg",
    title: "Classic B&W Nike High Tops",
    price: "$256"
  },
  {
    img:
      "https://s-media-cache-ak0.pinimg.com/736x/0c/6c/8f/0c6c8f8c075481aba85c201b77c1c5dd--shoes-high-tops-top-shoes.jpg",
    title: "1985 Classic Burgandy Addidas",
    price: "$132"
  },
  {
    img:
      "https://cdna.lystit.com/photos/3988-2014/11/17/puma--classic-suede-high-top-sneakers-product-1-25549082-2-193827842-normal.jpeg",
    title: "1998 Red Puma",
    price: "$230"
  },
  {
    img:
      "http://solemovement.com/wp-content/uploads/2014/11/M25594_PRFTWSTBTY_FI.jpg",
    title: "2001 Blue And White Addidas",
    price: "$205"
  }
];

class SubStore extends Component {
  render() {
    let center = {
      textAlign: "center"
    };
    let flex = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    };

    let shoeContainer = {
      width: "31.8%",
      textAlign: "center",
      margin: 10
    };

    let shoeImage = {
      width: "50%"
    };

    let title = {
      fontFamily: 'Julius Sans One'
    }

    let page = this.props.match.params.service;
    console.log(page);
    if (page === "HighTops") {
      let shoes = highTops.map(e => {
        return (
          <div style={shoeContainer} key={Math.random()}>
            <div>
              <p>
                <img style={shoeImage} src={e.img} alt="" />
              </p>
              <h3 style={title}>
                {e.title}
              </h3>
              <p>
                {e.price}
              </p>
            </div>
          </div>
        );
      });
      return (
        <div className="highTops">
          <Store />
          <div style={flex} className="highTopShop">
            {shoes}
          </div>
        </div>
      );
    } else if (page === "LowTops") {
      return (
        <div style={center}>
          <Store />
          <h1>Low Tops</h1>
        </div>
      );
    } else if (page === "Jordans") {
      return (
        <div style={center}>
          <Store />
          <h1>Jordans</h1>
        </div>
      );
    }
  }
}

export default SubStore;
