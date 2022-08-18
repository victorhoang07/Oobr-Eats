# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.delete_all

restaurant1 = Restaurant.create!(
        name: "Chipotle Mexican Grill",
        address: "680 Avenue of Americas, New York, NY 10010",
        description: "American All Comfort",
        rating: 4.3,
        pricing_rating: "$",
        hours: "10:45 AM - 9:30 PM",
        review_count: 637
)

restaurant2 = Restaurant.create!(
         name: "Popeye's",
        address: "934 8th Avenue, New York, NY 10019",
        description: "Comfort American All Sandwich",
        rating: 4.5,
        pricing_rating: "$",
        hours: "10:00 AM - 11:59 PM"
)