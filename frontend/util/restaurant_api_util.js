export const fetchRestaurants = () => {
  return $.ajax({
    method: "GET",
    url: '/api/restaurants'
  })
}

export const fetchRestaurant = restaurantId => (
  $.ajax({
    method: 'GET',
    url: `/api/restaurants/${restaurantId}`
  })
);  