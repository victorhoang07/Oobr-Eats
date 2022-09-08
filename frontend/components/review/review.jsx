import React from "react";
import { createReview } from "../../util/review_api_util";
const Review = (props) => {

    const {restaurant} = props

    return (
        <div className="review-container">
            <div>
                <p>Reviews</p> 
                <form action="">

                </form>
            </div>

            {Object.values(restaurant.reviews || {}).map(review => {
                return (
                    <div key={review.created_at}>
                        {/* <img src="" /> */}
                        <div>{review.name}</div>
                        <div>{review.body}</div>
                    </div>
                )
            })}

        </div>
    )

}

export default Review