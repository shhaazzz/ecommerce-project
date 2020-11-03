import React from 'react';
import './Home.css';
import Product from './Product'


function Home() {
    return (
        <div className="home">
            <div className="home__containers">
                <img className="home_image" src="https://buddyonmove.com/wp-content/uploads/2020/10/Copy-of-Pastel-Themed-Fashion-Blog-Header-Made-with-PosterMyWall.jpg" alt=""/>

            <div className="home_row">
                <Product 
                id="776542467"
                title="PLAGG Women Cotton Round Neck Half Sleeve Regular Fit with Pocket"
                price={20.99}
                image="https://buddyonmove.com/wp-content/uploads/2020/10/61l9kCBZzvL._AC_UL320_.jpg"
                rating={5} />
                <Product 
                id="776542467"
                title="PLAGG Women Cotton Round Neck Half Sleeve Regular Fit with Pocket"
                price={20.99}
                image="https://buddyonmove.com/wp-content/uploads/2020/10/61l9kCBZzvL._AC_UL320_.jpg"
                rating={3} />
                <Product 
                id="78123532"
                title="Veirdo 100% Cotton Stylish Solid Round-Neck 3/4 Sleeve T-Shirt for Women/Girls - Combo (PO2)"
                price={55.87}
                image="https://oyyari.com/wp-content/uploads/2020/10/71mXbcyFyxL._UX679_.jpg"
                rating={5} />
            </div>

            <div className="home_row">
                <Product 
                id = "145245342"
                title="Style Quotient Women Grey Solid Top"
                price={19.99}
                image="https://oyyari.com/wp-content/uploads/2020/10/61RuUIV2xzL._UY741_.jpg"
                rating={5}/>
                
                <Product 
                id = "5645245342"
                title="Veirdo Women's T-Shirt"
                price={35.76}
                image="https://oyyari.com/wp-content/uploads/2020/10/71iXfy4sAL._UL1500_.jpg"
                rating={4}/> 
                <Product title="Ytrick Women's Round Neck Cotton Black Tshirt"
                price={12.22}
                image="https://oyyari.com/wp-content/uploads/2020/10/613IwKgT0L._UL1500_.jpg"
                rating={4} />
            </div>
            <div className="home_row">
                <Product 
                id="7675467854"
                title="PLAGG Women Cotton Round Neck Half Sleeve Regular Fit with Pocket Tshirt"
                price={14.67}
                image="https://oyyari.com/wp-content/uploads/2020/10/61nBp-RAcIL._UX679_.jpg"
                rating={4}/>
            
            </div>



            </div>
        </div>

    )
}

export default Home;
