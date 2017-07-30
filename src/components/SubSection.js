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

const lowTops = [
  {
    img:
      "https://cdnb.lystit.com/1200/630/tr/photos/34ce-2016/01/22/givenchy-black-classic-low-top-sneakers-product-0-404098699-normal.jpeg",
    title: "2000 Black Addidas Low Tops",
    price: "$142"
  },
  {
    img:
      "https://cdn-images.farfetch-contents.com/11/57/64/95/11576495_7504164_322.jpg",
    title: "1994 Brown Reebok Low tops",
    price: "$200"
  },
  {
    img:
      "https://s-media-cache-ak0.pinimg.com/736x/1b/53/8d/1b538d9055523d122b1a244227302397--skate-shoes-womens-vans-skate-shoes.jpg",
    title: "1998 Back & White Vans Low Tops",
    price: "$110"
  },
  {
    img:
      "https://cdn-images.farfetch-contents.com/11/48/84/61/11488461_7066215_322.jpg",
    title: "2005 Red Reebok Low Tops",
    price: "$220"
  },
  {
    img:
      "http://www.enkaband.net/image/cache/data/category_75/2017-winter-nike-classic-cortez-textile-w-blue-shoes-low-top-trainers-women-903265-1347-500x416_0.jpg",
    title: "1996 Blue And White Nike Low Tops",
    price: "$210"
  },
  {
    img:
      "https://cdnd.lystit.com/photos/d493-2015/06/12/santoni-blue-classic-low-top-sneakers-product-1-837366930-normal.jpeg",
    title: "RARE - 1982 Baby Blue Nikes",
    price: "$350"
  },
  {
    img:
      "https://cdnc.lystit.com/photos/3273-2015/06/16/saint-laurent-gold-classic-court-low-top-trainers-product-2-638423782-normal.jpeg",
    title: "2003 Gold Reebok Low Tops",
    price: "$175"
  },
  {
    img:
      "http://d3d71ba2asa5oz.cloudfront.net/62000033/images/zz960001g_1.jpg",
    title: "2003 Blue And White New Balance",
    price: "$167"
  },
  {
    img:
      "http://www.enkaband.net/image/cache/data/category_76/2017-winter-reebok-classic-classic-leather-spp-black-white-shoes-low-top-trainer-4325-500x416_0.jpg",
    title: "1994 Blue And White Reeboks",
    price: "$215"
  }
];

const jordans = [
  {
    img:
      "http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/eaww6vgyna0s0mxmlcts.jpg",
    title: "2002 Red And White Air Jordans",
    price: "$175"
  },
  {
    img:
      "http://14042-presscdn-0-36.pagely.netdna-cdn.com/wp-content/uploads/2010/10/aj-cement.jpg",
    title: "1998 White Classic Jordans",
    price: "$220"
  },
  {
    img:
      "http://i.ebayimg.com/00/s/NjUwWDEwNjI=/z/RaIAAOSweW5VJMso/$_32.JPG",
    title: "1994 Red Air Jordans",
    price: "$165"
  },
  {
    img:
      "http://images.jordansdaily.com/wp-content/uploads/2012/04/the-daily-jordan-jordan-spizike-white-varsity-red-classic-green-2006-05-570x379.jpg",
    title: "1999 Red And Green Jordans",
    price: "$275"
  },
  {
    img:
      "http://www.greekboysgyro.com/images/pic/Jordans%20c7sAcI9s.jpg",
    title: "1998 All White Jordans",
    price: "$300"
  },
  {
    img:
      "http://www.classicairjordanshoes.us/images/classic-air-jordan-9-retro-medium-grey-white-cool-grey-shoes-q52329.jpg",
    title: "2000 Gray Jordans",
    price: "$255"
  },
  {
    img:
      "http://i.ebayimg.com/00/s/ODcyWDEwMjI=/z/tCsAAOSwPhdVJMso/$_32.JPG",
    title: "1997 Red And White J's",
    price: "$298"
  },
  {
    img:
      "http://www.originaljordansforsale.com/images/Classic--Jordan-5-Original-Blue-Purple-Pink-For-Women.jpg",
    title: "2002 Teal And Pink Womens Jordans",
    price: "$185"
  },
  {
    img:
      "http://www.classicairjordanshoes.com/images/2015-Kids-Air-Jordan-7-Retro-White-Silver-Red-Black-Shoes.jpg",
    title: "1993 Yellow, Red, And White Jordans",
    price: "$215"
  }
];

class SubStore extends Component {
  render() {
    let flex = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "baseline"
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
              <p>
                <button id={e.price}>Buy</button>
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
      let shoes = lowTops.map(e => {
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
              <p>
                <button id={e.price}>Buy</button>
              </p>
            </div>
          </div>
        );
      });
      return (
        <div className="lowTops">
          <Store />
          <div style={flex} className="lowTopShoes">
            {shoes}
          </div>
        </div>
      );
    } else if (page === "Jordans") {
       let shoes = jordans.map(e => {
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
              <p>
                <button id={e.price}>Buy</button>
              </p>
            </div>
          </div>
        );
      });
      return (
        <div className="jordans">
          <Store />
          <div style={flex} className="jordanShoes">
            {shoes}
          </div>
        </div>
      );
    }
  }
}

export default SubStore;
