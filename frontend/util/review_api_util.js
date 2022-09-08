export default createReview = (review) => (
  $.ajax({
    method: 'POST',
    url: `/api/reviews`,
    data: {review}
  })
);  