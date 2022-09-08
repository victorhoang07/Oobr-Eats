import {createReview} from "../util/review_api_util"


export const RECEIVE_REVIEW = "RECEIVE_REVIEW"

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
})

export const saveReview = review => dispatch => (
    createReview(review).then(result => (
        dispatch(receiveReview(result))
    ))
)