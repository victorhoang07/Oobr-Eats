# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.delete_all
MenuItem.delete_all
User.delete_all
# make sure to db:drop,db:create, db:migrate and db:seed, take out associations before seeding
demo_user = User.create!(
        first_name: "Demo",
        last_name: "User",
        email: "Demo@user.com",
        password: "demouser"
)


restaurant1 = Restaurant.create!(
        name: "Chipotle",
        address: "680 Avenue of Americas",
        description: "American All Comfort",
        lat: 40.741772,
        lng: -73.993479,
        rating: 4.3,
        pricing_rating: "$",
        hours: "10:45 AM - 9:30 PM",
        review_count: 637,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/chipotle.jpeg"
)

restaurant2 = Restaurant.create!(
         name: "Popeye's",
        address: "14 E 23rd St",
        description: "American Comfort All Sandwich",
        lat: 40.740879,
        lng: -73.988269,
        rating: 4.5,
        pricing_rating: "$",
        hours: "10:00 AM - 11:59 PM",
        review_count: 304,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/popeyes.jpeg"
)

restaurant3 = Restaurant.create!(
         name: "McDonald's",
        address: "39 Union Square W",
        description: "American Comfort All Sandwich",
        lat:40.73695365424206,
        lng: -73.99049191269874,
        rating: 4.8,
        pricing_rating: "$",
        hours: "10:00 AM - 11:59 PM",
        review_count: 224,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/mcdonalds.jpeg"
)

restaurant4 = Restaurant.create!(
        name: "Poke Bowl",
        address: "26 E 17th",
        description: "Japanese Comfort All Chinese",
        lat: 40.737361, 
        lng: -73.990965,
        rating: 4.9,
        pricing_rating: "$$",
        hours: "10:00 AM - 9:45 PM",
        review_count: 190,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/pokebowl.jpeg"
)


menu2_item1 = MenuItem.create!(
        name: "8PC Nuggets A La Cart",
        price: 7.78,
        restaurant_id: 2,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/popeyesmenu/8pcalacarte.webp"
)

menu2_item2 = MenuItem.create!(
        name: "Handcrafted Tender Combo (5 Pcs)",
        price: 15.58,
        restaurant_id: 2,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/popeyesmenu/tendercombo.webp"
)