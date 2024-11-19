import './App.css';

import logo from '../src/image/logo.svg'
import search from '../src/image/search.svg'
import cart from '../src/image/cart.svg'

import broccoli from "../src/image/Photo.svg"
import banana from "../src/image/Banana.svg"
import nuts from "../src/image/Nuts.svg"
import tomato from "../src/image/Tomato.svg"
import bean from "../src/image/Bean.svg"
import hazel from "../src/image/Hazel.svg"
import eggs from "../src/image/Eggs.svg"
import rusk from "../src/image/Rusk.svg"
import arrowRight from "../src/image/Aerrow.svg";
import stars from "../src/image/Star.svg";
import fruits from "./image/Fruits.svg"; 
import icon1 from "./image/Icon.svg";
import icon2 from "./image/Icon (1).svg";
import mung from "./image/Mung.svg";
import brown from "./image/Brown.svg";
import onion from "./image/Onion.svg";
import cabbage from "./image/Cabbage.svg";
import hall from "./image/Hall.svg";
import organicFood from "./image/OrganicFood.svg";
import organicJuice from "./image/OrganicJuice.svg";
import nutsCookis from "./image/NutsCookis.svg";
import profileImg from "./image/ProfileImg.svg";

function App() {
  //Продукты блока с продуктами
  const products = [
    {
      type: "Vegetable",
      name: "Calabrese Broccoli",
      priceOld: "20.00",
      priceWithDiscount: "13.00",
      image: broccoli
    },
    {
      type: "Fresh",
      name: "Fresh Banana Fruites",
      priceOld: "20.00",
      priceWithDiscount: "13.00",
      image: banana
    },
    {
      type: "Millets",
      name: "White Nuts",
      priceOld: "20.00",
      priceWithDiscount: "13.00",
      image: nuts
    },
    {
      type: "Vegetable",
      name: "Vegan Red Tomato",
      priceOld: "20.00",
      priceWithDiscount: "13.00",
      image: tomato
    },
    {
      type: "Health",
      name: "Mung Bean",
      priceOld: "20.00",
      priceWithDiscount: "13.00",
      image: bean
    },
    {
      type: "Nuts",
      name: "Brown Hazelnut",
      priceOld: "20.00",
      priceWithDiscount: "13.00",
      image: hazel
    },
    {
      type: "Fresh",
      name: "Eggs",
      priceOld: "20.00",
      priceWithDiscount: "13.00",
      image: eggs
    },
    {
      type: "Fresh",
      name: "Zelco Suji Elaichi Rusk",
      priceOld: "20.00",
      priceWithDiscount: "13.00",
      image: rusk
    },
  ];
  //Продукты блока с оффером
  const productsOffer = [
    {
      type: "Vegetable",
      name: "Mung Bean",
      priceOld: "20.00",
      priceWithDiscount: "17.00",
      image: mung
    },
    {
      type: "Vegetable",
      name: "Brown Hazelnut",
      priceOld: "20.00",
      priceWithDiscount: "17.00",
      image: brown
    },
    {
      type: "Vegetable",
      name: "Onion",
      priceOld: "20.00",
      priceWithDiscount: "17.00",
      image: onion
    },
    {
      type: "Vegetable",
      name: "Cabbage",
      priceOld: "20.00",
      priceWithDiscount: "17.00",
      image: cabbage
    },
  ]

  return (
   <>
      {/*Контейнер для размещения контента по центру*/}
      <div className="conteiner">
        <header class = "header">
          <div className='logo-cont'>
            <img src={logo} alt = "logo"></img>
            <p className="header-text">Organic</p>
          </div>
          <ul class = "tab">
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Pages</a></li>
            <li><a href='#'>Shop</a></li>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>News</a></li>
          </ul>
          <div class = "block_input">
            <input type ="text"/>
            <img className='image-header' src ={search} alt =''/>
            <div class = "cart">
              <img className='image-header' src = {cart} alt = ''/>
              <p className='cart-text'>cart(0)</p>
            </div>
          </div>
        </header>
      </div>

      <div className="conteiner-body">
            <div className='text-body-cont'>
              <h1 className='text-body-title'>100% Natural Food</h1>
              <h1 className='text-body-text'>Choose the best<br/>healthier way<br/>of life</h1>

              <button className="button-body">
                <h1 className="explore-text">Explore Now</h1>
                <img className="arrow-right-categories" src={arrowRight} alt="" />
              </button>
            </div>
      </div>

      <div className='container-foto'>
        <div className='item foto'>
          <div className='foto-texts'>
            <h1 className='foto-title title1'>Natural!!</h1>
            <h1 className='foto-text text1'>Get Garden<br/>Fresh Fruits</h1>
          </div>
        </div>

        <div className='item foto2'>
          <div className='foto-texts'>
            <h1 className='foto-title title2'>Offer!!</h1>
            <h1 className='foto-text'>Get 10% off<br/>on Vegetables</h1>
          </div>
        </div>
      </div>

      <div className='about-main-cont'>
        <div className='container'>
          <div className='about-cont'>
            <img className='about-image' src={fruits} alt=''/>
            <div className='about-info-cont'>
              <h1 className='about-title'>About US</h1>
              <h1 className='about-text'>We Believe in Working<br/>Accredited Farmers</h1>
              <p className='about-simple'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

              <div className='about-icon'>
                <div className='about-item'>
                  <img className='icon-about' src={icon1} alt=''/>
                  <div>
                    <h1 className='about-item-title'>Organic Foods Only</h1>
                    <h1 className='about-item-text'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</h1>
                  </div>
                </div>

                <div className='about-item'>
                  <img className='icon-about' src={icon2} alt=''/>
                  <div>
                    <h1 className='about-item-title'>Quality Standards</h1>
                    <h1 className='about-item-text'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</h1>
                  </div>
                </div>

                <button className="button-about">            
                  <h1 className="more-categories-title">Shop Now</h1>
                  <img className="arrow-right-categories" src={arrowRight} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="categories-cont">
        <div className='categories'>
          <h1 className="categories-title">Categories</h1>
          <h1 className="our-products-title">Our Products</h1>
        </div>

        <div className="products_container">
          {/*Проходимся по каждому элементу обьекта и выводим его карточку*/}
          {products.map((item, i) => (
            <div key={i} className="product_card">
              <div>
                <h1 className='product-type'>{item.type}</h1>
              </div>

              <div>
                <img className='product-image' src={item.image} alt={item.name} />
              </div>

              <div>
                <h1 className="product-name">{item.name}</h1>

                <div className='product-info-cont'>
                  <div className='product-prices'>
                    <s className='product-old-price'>${item.priceOld}</s>
                    <p className='product-new-price'>${item.priceWithDiscount}</p>
                  </div>

                  <img className='product-stars' src={stars} alt=''/>
                </div>  
              </div>  
            </div>
          ))}
        </div>

        <button className="button-products">
          <h1 className="more-categories-title">Load More</h1>
          <img className="arrow-right-categories" src={arrowRight} alt="" />
        </button>
      </div>

      <div className='testination-cont'>
        <div className='testination-info-cont'>
          <div>
            <h1 className='testination-title'>Testimonial</h1>
            <h1 className='testination-text'>What Our Customer Saying?</h1>
          </div>

          <div>
            <div className='testimonial-user-cont'>
              <div>
                <img className='profile-img' src={profileImg} alt=''/>
              </div>
              <div>
                <img style={{width: '125px'}} src={stars} alt=''/>
              </div>
            </div>

            <div>
              <p className='test-text'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>

              <div>
                <h1 className='profile-name'>Sara Taylor</h1>
                <p className='consumer'>Consumer</p>
              </div>
            </div>
          </div>

          <div className='circles-cont'>
            <div className='circle'>
              <div className='circle-item'>
                <h1 className='circle-title'>100%</h1>
                <h1 className='circle-text'>Organic</h1>
              </div>
            </div>

            <div className='circle'>
              <div className='circle-item'>
                <h1 className='circle-title'>285</h1>
                <h1 className='circle-text'>Active Product</h1>
              </div>
            </div>

            <div className='circle'>
              <div className='circle-item'>
                <h1 className='circle-title'>350+</h1>
                <h1 className='circle-text'>Organic Orchads</h1>
              </div>
            </div>

            <div className='circle'>
              <div className='circle-item'>
                <h1 className='circle-title'>25+</h1>
                <h1 className='circle-text'>Years of Farming</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="offer-cont">
        <div className="container">
          <div className='offer-info-cont'>
            <div>
              <h1 className='offer-title'>Offer</h1>
              <h1 className='offer-info-title'>We Offer Organic For You</h1>
            </div>

            <button className="button-offer">
              <h1 className="explore-text">View All Product</h1>
              <img className="arrow-right-categories" src={arrowRight} alt="" />
            </button>
          </div>

         
        </div>
      </div>

     
      <div className='organic-cont'>
        <div className='organic-item'>
          <img className='organic-image' src={organicJuice} alt=''/>
          <div className='organic-info-cont'>
            <p className='organic-title'>Organic Juice</p>
          </div>
        </div>

        <div className='organic-item'>
          <img className='organic-image' src={organicFood} alt=''/>
          <div className='organic-info-cont'>
            <p className='organic-title'>Organic Food</p>
          </div>
        </div>

        <div className='organic-item'>
          <img className='organic-image' src={nutsCookis} alt=''/>
          <div className='organic-info-cont'>
            <p className='organic-title'>Nuts Cookis</p>
          </div>
        </div>
      </div>
    </>

    
  );
}

export default App;
