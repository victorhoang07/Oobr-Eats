import React, {useEffect} from "react";
import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import NavBarContainer from "../nav/navbar";
import { tns } from "tiny-slider";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import RestarantIndex from "../restaurant/restaurant_index";


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
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6'
}

const Main = (props) => {

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

    const renderCategories = () => {
        return (
            <div className="categories-container">
                {Object.keys(CATEGORIES).map((category, i) => {
                    return (
                        <button key={i} className="category-button">
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
                        {Object.keys(SLIDER).map((slide, i) => {
                            return (
                                <div key={i}>
                                    <div className="slide">
                                        <div>
                                            <img className="slide-img"src="https://oobreats.s3.amazonaws.com/splash1.jpeg" alt=""/>
                                        </div>
                                    </div>
                                </div>
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
    logout: () => dispatch(logout())
    })


export default connect(null, mDTP)(Main)
