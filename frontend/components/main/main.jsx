import React, {useEffect} from "react";
import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import NavBarContainer from "../nav/navbar";
import { tns } from "tiny-slider";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import RestarantIndex from "../restaurant/restaurant_index";
import { receiveFilter, removeFilter } from "../../actions/filter_actions";
import {useHistory} from "react-router-dom"

const CATEGORIES = {
        "All": 'https://oobreats.s3.amazonaws.com/deals.png',
        "Alcohol":'https://oobreats.s3.amazonaws.com/alcohol.png',
        "Sandwich":'https://oobreats.s3.amazonaws.com/sandwich.png',
        "Drinks":'https://oobreats.s3.amazonaws.com/coffeeandtea.png',
        "Comfort": 'https://oobreats.s3.amazonaws.com/comfortfood.png',
        'Italian': 'https://oobreats.s3.amazonaws.com/italian.png',
        'American': 'https://oobreats.s3.amazonaws.com/american.png',
        'Pizza': 'https://oobreats.s3.amazonaws.com/pizza.png',
        'Chinese': 'https://oobreats.s3.amazonaws.com/asian.png',
        'Japanese': 'https://oobreats.s3.amazonaws.com/sushi.png',
        'Korean': 'https://oobreats.s3.amazonaws.com/healthy.png'
    }


const SLIDER = {
    1: {
        text: '',
        img: 'https://oobreats.s3.amazonaws.com/github.jpeg',
        path: 'https://github.com/victorhoang07',
    },
    
    2: {
        text: 'Hungry? Try Pocha 32',
        img: 'https://oobreats.s3.amazonaws.com/restaurantphotos/pocha32.jpeg',
        path: '#/restaurant/12'
    
    },

    3: {
        text: '',
        img: 'https://oobreats.s3.amazonaws.com/linkedin.png',
        path: 'https://www.linkedin.com/in/victorhoang07/'
    },

    4: {
        text: 'Grab a refreshing drink',
        img: 'https://oobreats.s3.amazonaws.com/restaurantphotos/lazy_sundaes/white_chocolate_matcha_latte.webp',
        path: '#/restaurant/5'
    },

    5: {
        text: 'My Favorite',
        img: 'https://oobreats.s3.amazonaws.com/luffyeating.gif',
        path: '#/restaurant/7'
    },
}

const Main = (props) => {

    const history = useHistory()

    useEffect(() => {
        let slider = tns({
            container: '.my-slider',
            'slideBy': 3,
            'speed': 1500,
            'nav': false,
            'controlsContainer': '.controller',
            "items": 3,
            "gutter" : 0
        })
    }, [])

    const handleFilterClick = (type) => {
        props.removeFilter()
        props.receiveFilter(type)
    }

    const renderCategories = () => {
        return (
            <div className="categories-container">
                {Object.keys(CATEGORIES).map((category, i) => {
                    return (
                        <button onClick={() => handleFilterClick(category)} key={i} className="category-button">
                            <img className="category-icon" src={CATEGORIES[category]}/>
                            <div className="category-text">
                                {category}
                            </div>
                        </button>
                    )
                })}
            </div>
        )
    }

    const renderCarousel = () => {
       
        return (
        <div id="slider">
            <div className="slider-container">
                    <div className="controller">
                        <button className="previous"><BsArrowLeft className="direction-icon"/></button>
                        <button className="next"><BsArrowRight className="direction-icon"/></button>
                    </div>
                    <div className="my-slider">
                        {Object.values(SLIDER).map((slide, i) => {
                            return (
                                <a href={slide.path} key={i}>
                                    <div className="slide">
                                        <div className="slide-text">{slide.text}</div>
                                        <div>
                                            <img className="slide-img"src={slide.img} alt=""/>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                
            </div>
        </div>
        );
        
    }



    return (
        <div>
            <NavBarContainer />
            {renderCategories()}
            {renderCarousel()}
            <RestarantIndex />
        </div>

    )
}


const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    receiveFilter: (type) => dispatch(receiveFilter(type)),
    removeFilter: () => dispatch(removeFilter())
})


export default connect(null, mDTP)(Main)
