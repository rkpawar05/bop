
import './App.css';

function App() {
  return (
   <>
  <div className='img'>
    <img src="https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210927-152300-_1-283625.jpg?v=1683005479" alt="" />
  </div>

  <div className='cart-details'>
    <span className='main-title'><b>Ajrakh dust Neo Stole</b></span>
    <br />
    <span className='ruppes'>&#8377; 1900</span>
    <br />

    <button className='add-btn'>+</button>
    <span className='quantity'>1</span>
    <button className='add-btn'>-</button>

    <button className='add-to-cart'>Add To Cart</button>

    <span className='label'>Size</span>
    <br />
    <button className='size'>220*50 cms</button>
    <br />
    <span className='label'>Material</span>
    <br />
    <button className='size'>Modal</button>
    <br />

    <span className='label'>Colour</span>
    <br />
    <button className='size'>The Colours seen in the image may vary from the actual product due to photograph due to photogenic lighting source, diffrent computer screen resolution and displays</button>

  </div>


  <div className='bottom'>
<span>Description</span>
<hr />
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam eos ipsum ea, totam ex doloribus iusto consectetur maiores vero rerum dicta suscipit explicabo velit nemo natus beatae soluta, deserunt alias atque! Error dolorem inventore ipsum.</p>
  </div>


   </>
  );
}

export default App;
