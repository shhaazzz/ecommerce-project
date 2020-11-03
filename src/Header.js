import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider'

function Header() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="header">
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt=""></img>

            <div className="header_search">
                <input className="header_searchInput" type="text"></input>
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionlineone">
                        Hello Guest
                    </span>
                    <span className="header_optionlineTwo">
                        Sign In
                    </span>
                </div>
                <div className="header_option">
                <span className="header_optionlineone">
                        Returns 
                    </span>
                    <span className="header_optionlineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionlineone">
                        Hello Guest
                    </span>
                    <span className="header_optionlineTwo">
                        Sign In
                    </span>
                </div>
                <div className="header_option_basket">
                    <ShoppingBasketIcon/>
                    <span className="header_optionlineTwo header_basketcount">{basket?.length}</span>
                    

                </div>


            </div>

         

            
        </div>
    )
}

export default Header
