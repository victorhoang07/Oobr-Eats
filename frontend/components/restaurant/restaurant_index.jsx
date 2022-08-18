import React from "react";


const ResaturantIndex = (props) => {


    return (
        <div className="restaurant-index-container">
            <h2 className="restaurant-index-text">Popular near you </h2>
            <div className="main-filter-container">
                <div className="main-filter">
                    <p>Sort</p>
                    <p>Price Range</p>
                    <div className="price-range-buttons-container">
                        <button>$</button>
                        <button>$$</button>
                        <button>$$$</button>
                        <button>$$$$</button>
                    </div>
                </div>
            </div>
            <div className="restaurant_index">
                <div className="restaurants-container">
                    <div className="restaurant">1</div>
                    <div className="restaurant">2</div>
                    <div className="restaurant">3</div>
                    <div className="restaurant">4</div>
                    <div className="restaurant">1</div>
                    <div className="restaurant">2</div>
                    <div className="restaurant">3</div>
                    <div className="restaurant">4</div>
                    <div className="restaurant">1</div>
                    <div className="restaurant">2</div>
                    <div className="restaurant">3</div>
                    <div className="restaurant">4</div>
                    <div className="restaurant">1</div>
                    <div className="restaurant">2</div>
                    <div className="restaurant">3</div>
                    <div className="restaurant">4</div>
                    <div className="restaurant">1</div>
                    <div className="restaurant">2</div>
                    <div className="restaurant">3</div>
                    <div className="restaurant">4</div>
                </div>
            </div>
        </div>
    )

}

export default ResaturantIndex