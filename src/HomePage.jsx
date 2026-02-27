import athleticCottonSocksImage from './assets/products/athletic-cotton-socks-6-pairs.jpg';
import intermediateCompositeBasketballImage from './assets/products/intermediate-composite-basketball.jpg';
import adultsPlainCottonTshirt2PackTealImage from './assets/products/adults-plain-cotton-tshirt-2-pack-teal.jpg';
import rating45Image from './assets/ratings/rating-45.png';
import rating40Image from './assets/ratings/rating-40.png';
import checkmarkIcon from './assets/icons/checkmark.png';
import { Header } from './components/Header';
import { products } from '../starting-code/data/products';

export function HomePage() {
  return (
    <div>
      <Header />

      <div className="home-page">

       
      <div className="products-grid">

        {products.map((product) => (
        <div key={product.id} className="product-container">
          
          <div className="product-image-container">
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-name limit-text-to-2-lines">
            {product.name}
          </div>

          <div className="product-rating-container">
            <img
              className="product-rating-stars"
              src={product.rating.stars === 4.5 ? rating45Image : rating40Image}
              alt="rating"
            />
            <div className="product-rating-count link-primary">
              {product.rating.count}
            </div>
          </div>

          <div className="product-price">
            ${product.priceCents / 100}
          </div>

          <div className="product-quantity-container">
            <select defaultValue="1">
              {[...Array(10)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="product-spacer"></div>

          <button
            className="add-to-cart-button button-primary"
            onClick={() => product.id}
          >
            Add to Cart
          </button>

        </div>
      ))}


        
        <div className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src={athleticCottonSocksImage} />
          </div>

          <div className="product-name limit-text-to-2-lines">
            Black and Gray Athletic Cotton Socks - 6 Pairs
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src={rating45Image} />
            <div className="product-rating-count link-primary">
              87
            </div>
          </div>

          <div className="product-price">
            $10.90
          </div>

          <div className="product-quantity-container">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src={checkmarkIcon} />
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>

        <div className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src={intermediateCompositeBasketballImage} />
          </div>

          <div className="product-name limit-text-to-2-lines">
            Intermediate Size Basketball
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src={rating40Image} />
            <div className="product-rating-count link-primary">
              127
            </div>
          </div>

          <div className="product-price">
            $20.95
          </div>

          <div className="product-quantity-container">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src={checkmarkIcon} />
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>

        <div className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src={adultsPlainCottonTshirt2PackTealImage} />
          </div>

          <div className="product-name limit-text-to-2-lines">
            Adults Plain Cotton T-Shirt - 2 Pack
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src={rating45Image} />
            <div className="product-rating-count link-primary">
              56
            </div>
          </div>

          <div className="product-price">
            $7.99
          </div>

          <div className="product-quantity-container">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src={checkmarkIcon} />
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>

      </div>
      </div>
    </div>
  );

}