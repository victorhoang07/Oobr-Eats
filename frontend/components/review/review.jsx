import React, {useState, useEffect} from "react";
import { saveReview } from "../../actions/review_actions"
import { connect } from "react-redux";

const icons = [
    "https://oobreats.s3.amazonaws.com/reviewicons/apple.svg",
    "https://oobreats.s3.amazonaws.com/reviewicons/avocado.svg",
    "https://oobreats.s3.amazonaws.com/reviewicons/grape.svg",
    "https://oobreats.s3.amazonaws.com/reviewicons/pineapple.svg",
    "https://oobreats.s3.amazonaws.com/reviewicons/tangerine.svg",
    "https://oobreats.s3.amazonaws.com/reviewicons/corn.svg"
]

const Review = (props) => {
    
    const {restaurant} = props

    return (
        <div className="review-container">
           <div className="review-text-container">
            <p className="review-text">Reviews</p> 
            </div>
            <div className="review-index">
                {Object.values(restaurant.reviews || {}).reverse().map(review => {
                    return (
                        <div className="review" key={review.created_at}>
                            <img className="review-icon" src={icons[Math.floor(Math.random() * 6)]} />
                            <span className="review-name">{review.name}</span>
                            <div className="review-body">{review.body}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

const mSTP = state => ({
    review: state.entities.review
})

const mDTP = dispatch => {
    return {
        saveReview: (review) => dispatch(saveReview(review)),
        requestRestaurant: (id) => dispatch(requestRestaurant(id))
    }
}

export default connect(mSTP, mDTP)(Review)