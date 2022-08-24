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
        name: "Katz's Delicatessen",
        address: "205 E Houston St",
        description: "Comfort All Sandwich American",
        lat: 40.729180078007964, 
        lng: -73.98867165835588,
        rating: 4.8,
        pricing_rating: "$$",
        hours: "11:00 AM - 10:00 PM",
        review_count: 420,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/katz.jpeg"
)
# https://www.ubereats.com/store/katzs-delicatessen/UO5j9laHQCOtgD3H8yWjBw?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlVuaW9uJTIwU3F1YXJlJTIwUGFyayUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMjA0YWViY2Y3LTk4NjYtMDlkNy00NTE0LThkMmM4Yzg5YjRjMyUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDAuNzM1NDA3JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTczLjk4OTkyMjUlN0Q%3D&ps=1

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
# https://www.ubereats.com/store/popeyes-14-east-23rd-street/d2rlH6eYVPChuEkV7i1W4Q?diningMode=DELIVERY

restaurant3 = Restaurant.create!(
        name: "Nobu Fifty Seven",
        address: "40 W 57th St",
        description: "Comfort All Japanese",
        lat: 40.76370193203742,
        lng: -73.97623715585723,  
        rating: 4.9,
        pricing_rating: "$$$",
        hours: "11:00 AM - 10:00 PM",
        review_count: 317,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/nobu.jpeg"
)
# https://www.ubereats.com/store/nobu-fifty-seven/T5Yo0VUGTZa1f6i8OVVH1g?diningMode=DELIVERY&ps=1

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
# https://www.ubereats.com/store/poke-bowl-26-e-17th-st/cW8mWPT6Rxy8YL_cj52EPg?diningMode=DELIVERY

restaurant5 = Restaurant.create!(
        name: "Lazy Sundaes",
        address: "23 Clinton Street",
        description: "Korean All Drinks Comfort",
        lat: 40.72058726882673,
        lng: -73.98453271308297,
        rating: 5.0,
        pricing_rating: "$",
        hours: "10:00 AM - 8:30 PM",
        review_count: 26,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/lazy_sundaes.jpeg"
)
# https://www.ubereats.com/store/lazy-sundaes-les/kXLG6mbwWX6j4zMMpQ2tvQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlVuaW9uJTIwU3F1YXJlJTIwUGFyayUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMjA0YWViY2Y3LTk4NjYtMDlkNy00NTE0LThkMmM4Yzg5YjRjMyUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDAuNzM1NDA3JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTczLjk4OTkyMjUlN0Q%3D&ps=1

restaurant6 = Restaurant.create!(
        name: "La Pecora Bianca - Nomad",
        address: "1133 Broadway",
        description: "Italian All Alcohol",
        lat: 40.743812837286356, 
        lng: -73.98934772088789,
        rating: 4.9,
        pricing_rating: "$$$",
        hours: "11:00 AM - 10:00 PM",
        review_count: 384,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/la_pecora_bianca.jpeg"
)
# https://www.ubereats.com/store/la-pecora-bianca-soho/x44lksXAV5Syad5L9yoV6w?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlVuaW9uJTIwU3F1YXJlJTIwUGFyayUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMjA0YWViY2Y3LTk4NjYtMDlkNy00NTE0LThkMmM4Yzg5YjRjMyUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDAuNzM1NDA3JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTczLjk4OTkyMjUlN0Q%3D&ps=1

restaurant7 = Restaurant.create!(
        name: "Bonchon Chicken",
        address: "325 5th Ave",
        description: "Comfort All Korean Alcohol",
        lat: 40.74756214675368,
        lng: -73.98502180494903,
        rating: 4.7,
        pricing_rating: "$$",
        hours: "11:00 AM - 09:30 PM",
        review_count: 88,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/bonchon.jpeg"
)
# https://www.ubereats.com/store/bonchon-chicken-267-w-23rd-st/h-8xgYGTTG2YmeTT0EslJQ?diningMode=DELIVERY&ps=1

restaurant8 = Restaurant.create!(
        name: "Noodle Village",
        address: "13 Mott St",
        description: "Comfort All Chinese",
        lat: 40.71416246346845, 
        lng: -73.99879730059992,
        rating: 4.8,
        pricing_rating: "$",
        hours: "11:00 AM - 09:30 PM",
        review_count: 59,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/noodle_village.jpeg"
)
# https://www.ubereats.com/store/noodle-village/n4NHDjcaQF2UfPZkIMa1iA?diningMode=DELIVERY&ps=1

restaurant9 = Restaurant.create!(
        name: "The Palm",
        address: "206 West St",
        description: "Comfort All American",
        lat: 40.71660483596841,
        lng: -74.01277096358945,
        rating: 5.0,
        pricing_rating: "$$$$",
        hours: "12:00 PM - 11:30 PM",
        review_count: 25,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/the_palm.jpeg"
)
# https://www.ubereats.com/store/the-palm-206-west-st/KoB_2KV0T4q4ybJhX7I5pw?diningMode=DELIVERY&mod=storeInfo&modctx=%257B%2522storeSlug%2522%253A%2522the-palm-206-west-st%2522%252C%2522storeUuid%2522%253A%25222a807fd8-a574-4f8a-b8c9-b2615fb239a7%2522%252C%2522sectionUuid%2522%253A%2522%2522%257D&ps=1

restaurant10 = Restaurant.create!(
        name: "Grimaldi's Pizza",
        address: "656 6th Ave",
        description: "Comfort All Pizza Italian American Alcohol",
        lat: 40.74095786143645, 
        lng: -73.99374807750006,
        rating: 4.4,
        pricing_rating: "$$",
        hours: "11:00 AM - 05:00 AM",
        review_count: 361,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/grimaldis.jpeg"
)
# https://www.ubereats.com/store/grimaldis-pizza/qA9TFuliTgSaoXTDXXwqpg?diningMode=DELIVERY&mod=storeInfo&modctx=%257B%2522storeSlug%2522%253A%2522grimaldis-pizza%2522%252C%2522storeUuid%2522%253A%2522a80f5316-e962-4e04-9aa1-74c35d7c2aa6%2522%252C%2522sectionUuid%2522%253A%2522%2522%257D&ps=1

restaurant11 = Restaurant.create!(
        name: "Go! Go! Curry America",
        address: "273 West 38th Street",
        description: "Comfort All Japanese",
        lat: 40.75461346613416,
        lng: -73.9911412707823, 
        rating: 4.7,
        pricing_rating: "$",
        hours: "11:00 AM - 08:00 PM",
        review_count: 28,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gogocurry.jpeg"
)
# https://www.ubereats.com/store/go!-go!-curry-america-times-square/jUvM5CfoSnSis09Uea2gXw?diningMode=DELIVERY&mod=storeInfo&modctx=%257B%2522storeSlug%2522%253A%2522go%21-go%21-curry-america-times-square%2522%252C%2522storeUuid%2522%253A%25228d4bcce4-27e8-4a74-a2b3-4f5479ada05f%2522%252C%2522sectionUuid%2522%253A%2522%2522%257D&ps=1

restaurant12 = Restaurant.create!(
        name: "Pocha 32",
        address: "15 W 32nd St Fl 2",
        description: "Comfort All Korean Alcohol",
        lat: 40.74763270440941, 
        lng: -73.98642579942681,
        rating: 4.8,
        pricing_rating: "$$$",
        hours: "5:00 PM - 01:00 AM",
        review_count: 92,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/pocha32.jpeg"
)
# https://www.ubereats.com/store/pocha-32-midtown/rPfH_G06RoiCbUqJ4IHSEA?diningMode=DELIVERY

restaurant13 = Restaurant.create!(
        name: "Gyu-Kaku Japanese BBQ",
        address: "34 Cooper Sq",
        description: "Comfort All Japanese Alcohol",
        lat: 40.72823262059954, 
        lng: -73.99140645830772,
        rating: 4.8,
        pricing_rating: "$$$",
        hours: "11:00 AM - 10:00 PM",
        review_count: 92,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gyukaku.jpeg"
)
# https://www.ubereats.com/store/gyu-kaku-japanese-bbq-east-village/Ln9Ob2F-SKqAUym5xOl3pQ?diningMode=DELIVERY&mod=storeInfo&modctx=%257B%2522storeSlug%2522%253A%2522gyu-kaku-japanese-bbq-east-village%2522%252C%2522storeUuid%2522%253A%25222e7f4e6f-617e-48aa-8053-29b9c4e977a5%2522%252C%2522sectionUuid%2522%253A%2522%2522%257D&ps=1

restaurant14 = Restaurant.create!(
        name: "Jasmine Bubble Tea",
        address: "52 West 28th Street",
        description: "Comfort All Drinks Japanese Korean Chinese Sandwich",
        lat: 40.745721105370414,  
        lng: -73.99016349266476,
        rating: 4.4,
        pricing_rating: "$",
        hours: "11:00 AM - 10:00 PM",
        review_count: 92,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/jasminebubbletea.jpeg"
)
# https://www.ubereats.com/store/jasmine-bubble-tea/Kwb0wlEEX9CFshOOoel0mQ?diningMode=DELIVERY&ps=1

restaurant15 = Restaurant.create!(
        name: "Supreme Restaurant",
        address: "100 Mott St",
        description: "Comfort All Chinese",
        lat: 40.71727895055206, 
        lng: -73.99731064961028,  
        rating: 4.7,
        pricing_rating: "$",
        hours: "11:00 AM - 09:00 PM",
        review_count: 18,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/supremerestaurant.jpeg"
)
# https://www.ubereats.com/store/supreme-restaurant-%E8%80%81%E5%91%B3%E9%81%93/QGriLrJXToe_9lMTqllGAw?diningMode=DELIVERY

restaurant16 = Restaurant.create!(
        name: "Gotham Pizza",
        address: "144 9th Ave",
        description: "Comfort All Pizza",
        lat: 40.743876334731105,  
        lng: -74.00300829141095,  
        rating: 4.7,
        pricing_rating: "$",
        hours: "11:00 AM - 10:30 PM",
        review_count: 198,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gothampizza.jpeg"
)
# https://www.ubereats.com/store/gotham-pizza-chelsea/MaGgjxCwQcCENofZMXoOog?diningMode=DELIVERY

restaurant17 = Restaurant.create!(
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
# https://www.ubereats.com/store/mcdonalds-union-square/xDTHylAzQzK-XA29YvHhDQ?diningMode=DELIVERY&ps=1

restaurant18 = Restaurant.create!(
        name: "Szechuan Mountain House - East Village",
        address: "23 Saint Marks Pl",
        description: "Comfort All Chinese",
        lat: 40.72218892515864,
        lng: -73.98745459205317,
        rating: 4.7,
        pricing_rating: "$",
        hours: "11:00 AM - 10:00 PM",
        review_count: 139,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/szechuanmountainhouse.jpeg"
)
# https://www.ubereats.com/store/%E5%B7%9D%E5%B1%B1%E7%94%B2-szechuan-mountain-house-east-village/59El2W0VRKO6ReAyucwstA?diningMode=DELIVERY&ps=1
restaurant19 = Restaurant.create!(
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
# https://www.ubereats.com/store/chipotle-mexican-grill-680-avenue-of-the-americas/jzwmtlo7RsiJOjsqxpMSgw?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlVuaW9uJTIwU3F1YXJlJTIwUGFyayUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMjA0YWViY2Y3LTk4NjYtMDlkNy00NTE0LThkMmM4Yzg5YjRjMyUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDAuNzM1NDE2NyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03My45ODk5MSU3RA%3D%3D

restaurant20 = Restaurant.create!(
        name: "So Gong Dong Tofu & BBQ",
        address: "350 3rd Avenue",
        description: "Comfort All Korean Alcohol",
        lat: 40.740590904042975,  
        lng: -73.98204906931647,
        rating: 4.7,
        pricing_rating: "$",
        hours: "11:00 AM - 10:00 PM",
        review_count: 18,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/sogongdongtofu.jpeg"
)
# https://www.ubereats.com/store/so-gong-dong-tofu-%26-bbq-manhattan/cdFeSFoeXHCpXBAZiBN-Ng?diningMode=DELIVERY&ps=1

# katz
menu1_item1 = MenuItem.create!(
        name: "Steak Cut Fries",
        price: 7.95,
        restaurant_id: 1,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/katz/steakcutfries.webp"
)
menu1_item2 = MenuItem.create!(
        name: "Katz's Pastrami Sandwich",
        price: 26.95,
        restaurant_id: 1,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/katz/katzpastramisandwich.webp"
)
menu1_item3 = MenuItem.create!(
        name: "Matzo Ball Soup",
        price: 8.45,
        restaurant_id: 1,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/katz/matzoballsoup.webp"
)
menu1_item4 = MenuItem.create!(
        name: "Potato Latkes",
        price: 12.95,
        restaurant_id: 1,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/katz/potatolatkes.webp"
)
menu1_item5 = MenuItem.create!(
        name: "Katz's Reuben Sandwich",
        price: 27.45,
        restaurant_id: 1,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/katz/katzreubensandwich.webp"
)
menu1_item6 = MenuItem.create!(
        name: "Katz's Knoblewurst Sandwich",
        price: 19.95,
        restaurant_id: 1,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/katz/katzknoblewurstsandwich.webp"
)
menu1_item7 = MenuItem.create!(
        name: "Square Potato Knish",
        price: 5.45,
        restaurant_id: 1,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/katz/squarepotatoknish.webp"
)
menu1_item8 = MenuItem.create!(
        name: "Cheese Blintzes",
        price: 12.95,
        restaurant_id: 1,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/katz/cheeseblintzes.webp"
)
menu1_item9 = MenuItem.create!(
        name: "Macaroni Salad",
        price: 7.45,
        restaurant_id: 1,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/katz/macaronisalad.webp"
)

# popeyes
menu2_item1 = MenuItem.create!(
        name: "8PC Nuggets A La Carte",
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
menu2_item3 = MenuItem.create!(
        name: "11Pc Bundle",
        price: 41.58,
        restaurant_id: 2,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/popeyesmenu/11pc_bundle.webp"
)
menu2_item4 = MenuItem.create!(
        name: "Big Family Feast",
        price: 49.38,
        restaurant_id: 2,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/popeyesmenu/big_family_meal.webp"
)
menu2_item5 = MenuItem.create!(
        name: "Classic Chicken Sandwich",
        price: 6.48,
        restaurant_id: 2,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/popeyesmenu/chicken_sandwich.webp"
)
menu2_item6 = MenuItem.create!(
        name: "Mixed Chicken Box(8 Pcs)",
        price: 26.63,
        restaurant_id: 2,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/popeyesmenu/mixed_chicken_box8pcs.webp"
)
menu2_item7 = MenuItem.create!(
        name: "Popcorn Shrimp",
        price: 11.68,
        restaurant_id: 2,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/popeyesmenu/popcorn_shrimp.webp"
)
# nobu
menu3_item1 = MenuItem.create!(
        name: "Crispy Rice Spicy Tuna",
        price: 31.95,
        restaurant_id: 3,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/nobu/crispyricespicytuna.webp"
)
menu3_item2 = MenuItem.create!(
        name: "Grilled Chicken",
        price: 53.95,
        restaurant_id: 3,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/nobu/grilledchicken.webp"
)
menu3_item3 = MenuItem.create!(
        name: "Lobster Shiitake Salad",
        price: 64.95,
        restaurant_id: 3,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/nobu/lobstershiitake.webp"
)
menu3_item4 = MenuItem.create!(
        name: "Miso Soup",
        price: 9.95,
        restaurant_id: 3,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/nobu/misosoup.webp"
)
menu3_item5 = MenuItem.create!(
        name: "Sashimi Dinner",
        price: 59.95,
        restaurant_id: 3,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/nobu/sashimidinner.webp"
)
menu3_item6 = MenuItem.create!(
        name: "Sushi Dinner",
        price: 59.95,
        restaurant_id: 3,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/nobu/sushidinner.webp"
)
menu3_item7 = MenuItem.create!(
        name: "Sea Bass Wasabi Miso",
        price: 45.95,
        restaurant_id: 3,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/nobu/seabasswasabimayo.webp"
)
menu3_item8 = MenuItem.create!(
        name: "Wagyu Tataki",
        price: 76.95,
        restaurant_id: 3,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/nobu/wagyutataki.webp"
)
menu3_item9 = MenuItem.create!(
        name: "White Fish Dry Miso",
        price: 33.95,
        restaurant_id: 3,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/nobu/whitefishdrymiso.webp"
)

# poke
menu4_item1 = MenuItem.create!(
        name: "Hippie Poke Plenty Bowl",
        price: 15.45,
        restaurant_id: 4,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/poke_bowl/hippie_poke_plenty_bowl.webp"
)
menu4_item2 = MenuItem.create!(
        name: "Honolulu Salmon Plenty Bowl",
        price: 15.95,
        restaurant_id: 4,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/poke_bowl/honolulu_salmon_poke_plenty_bowl.webp"
)
menu4_item3 = MenuItem.create!(
        name: "Korean BBq Pork Plenty Bowl",
        price: 15.95,
        restaurant_id: 4,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/poke_bowl/korean_bbq_pork_poke_plenty_hot_bowl.webp"
)
menu4_item4 = MenuItem.create!(
        name: "Miso Hungry Plenty Bowl",
        price: 15.95,
        restaurant_id: 4,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/poke_bowl/miso_hungry_poke_plenty_hot_bowl.webp"
)
menu4_item5 = MenuItem.create!(
        name: "Poke Bowl Plenty Special",
        price: 15.95,
        restaurant_id: 4,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/poke_bowl/poke_bowl_plenty_special.webp"
)
menu4_item6 = MenuItem.create!(
        name: "Salmon Skin Salad Plenty Bowl",
        price: 15.95,
        restaurant_id: 4,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/poke_bowl/salmon_skin_salad_poke_plenty_bowl.webp"
)
menu4_item7 = MenuItem.create!(
        name: "Teriyaki Salmon Plenty Bowl",
        price: 15.95,
        restaurant_id: 4,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/poke_bowl/teriyaki_salmon_poke_plenty_hot_bowl.webp"
)
menu4_item8 = MenuItem.create!(
        name: "To the Max Poke Bowl",
        price: 17.95,
        restaurant_id: 4,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/poke_bowl/to_the_max_poke_bowl.webp"
)

# lazy sundaes
menu5_item1 = MenuItem.create!(
        name: "Strawberry Metcha Latte",
        price: 5.95,
        restaurant_id: 5,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/lazy_sundaes/strawberry_matcha_latte.webp"
)
menu5_item2 = MenuItem.create!(
        name: "Espresso Cereal Injeolmi Latte",
        price: 7.45,
        restaurant_id: 5,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/lazy_sundaes/espresso_cereal_injeolmi_latte.webp"
)
menu5_item3 = MenuItem.create!(
        name: "White Chocolate Matcha Latte",
        price: 5.95,
        restaurant_id: 5,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/lazy_sundaes/white_chocolate_matcha_latte.webp"
)
menu5_item4 = MenuItem.create!(
        name: "Piña Colada Tea Punch",
        price: 5.95,
        restaurant_id: 5,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/lazy_sundaes/pina_colada_tea_punch.webp"
)
menu5_item5 = MenuItem.create!(
        name: "Grapefruit Sunrise",
        price: 6.95,
        restaurant_id: 5,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/lazy_sundaes/grapefruit_sunrise.webp"
)
menu5_item6 = MenuItem.create!(
        name: "Passion Fruit Jasmine Punch",
        price: 5.95,
        restaurant_id: 5,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/lazy_sundaes/passion_fruit_jasmine_punch.webp"
)
menu5_item7 = MenuItem.create!(
        name: "Thai Iced Tea",
        price: 5.45,
        restaurant_id: 5,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/lazy_sundaes/thai_iced_tea.webp"
)
menu5_item8 = MenuItem.create!(
        name: "Lazy Strawberry Latte",
        price: 5.45,
        restaurant_id: 5,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/lazy_sundaes/lazy_strawberry_latte.webp"
)
menu5_item9 = MenuItem.create!(
        name: "Classic Black",
        price: 4.95,
        restaurant_id: 5,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/lazy_sundaes/classic_black.webp"
)
# la pecora 
menu6_item1 = MenuItem.create!(
        name: "Rigatoni",
        price: 24.99,
        restaurant_id: 6,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/la-pecora/rigatoni.webp"
)
menu6_item2 = MenuItem.create!(
        name: "Gramigna",
        price: 25.99,
        restaurant_id: 6,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/la-pecora/gramigna.webp"
)
menu6_item3 = MenuItem.create!(
        name: "Tagliatelle",
        price: 25.99,
        restaurant_id: 6,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/la-pecora/tagliatelle.webp"
)
menu6_item4 = MenuItem.create!(
        name: "Bucatini",
        price: 22.99,
        restaurant_id: 6,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/la-pecora/bucatini.webp"
)
menu6_item5 = MenuItem.create!(
        name: "Toscano Salad",
        price: 17.99,
        restaurant_id: 6,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/la-pecora/toscano_salad.webp"
)
menu6_item6 = MenuItem.create!(
        name: "Meatballs",
        price: 16.99,
        restaurant_id: 6,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/la-pecora/meatballs.webp"
)
menu6_item7 = MenuItem.create!(
        name: "Whipped Ricotta",
        price: 15.99,
        restaurant_id: 6,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/la-pecora/whipped_ricotta.webp"
)
menu6_item8 = MenuItem.create!(
        name: "Strip Steak",
        price: 37.99,
        restaurant_id: 6,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/la-pecora/strip_steak.webp"
)
menu6_item9 = MenuItem.create!(
        name: "Spaghetti",
        price: 19.00,
        restaurant_id: 6,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/la-pecora/spaghetti.webp"
)

# bonchon 
menu7_item1 = MenuItem.create!(
        name: "10 pc Wings",
        price: 19.72,
        restaurant_id: 7,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/bonchon/10pc_wings.webp"
)
menu7_item2 = MenuItem.create!(
        name: "Crunchy Chicken Bowl",
        price: 12.59,
        restaurant_id: 7,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/bonchon/crunchy_chicken_bowl.webp"
)
menu7_item3 = MenuItem.create!(
        name: "Fried Rice",
        price: 13.86,
        restaurant_id: 7,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/bonchon/friedrice.webp"
)
menu7_item4 = MenuItem.create!(
        name: "Korean Tacos",
        price: 10.41,
        restaurant_id: 7,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/bonchon/korean_tacos.webp"
)
menu7_item5 = MenuItem.create!(
        name: "Family Meal",
        price: 46.40,
        restaurant_id: 7,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/bonchon/family_meal.webp"
)
menu7_item6 = MenuItem.create!(
        name: "Onion Rings",
        price: 9.26,
        restaurant_id: 7,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/bonchon/onion_rings.webp"
)
menu7_item7 = MenuItem.create!(
        name: "Seasoned French Fries",
        price: 9.26,
        restaurant_id: 7,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/bonchon/seasoned_fries.webp"
)
menu7_item8 = MenuItem.create!(
        name: "Shrimp Shumai",
        price: 11.56,
        restaurant_id: 7,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/bonchon/shrimp_shumai.webp"
)
menu7_item9 = MenuItem.create!(
        name: "Edamame",
        price: 8.11,
        restaurant_id: 7,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/bonchon/edamame.webp"
)

# noodle village 
menu8_item1 = MenuItem.create!(
        name: "Chinese Broccoli",
        price: 10.25,
        restaurant_id: 8,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/noodle_village/chinese_broccoli_with_oyster.webp"
)
menu8_item2 = MenuItem.create!(
        name: "Beef Chow Fun",
        price: 12.55,
        restaurant_id: 8,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/noodle_village/beef_chow_fun.webp"
)
menu8_item3 = MenuItem.create!(
        name: "Hot Pot Rice",
        price: 16.85,
        restaurant_id: 8,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/noodle_village/hot_pot_rice.webp"
)
menu8_item4 = MenuItem.create!(
        name: "Shrimp & Pork Wonton Lo Mein",
        price: 12.25,
        restaurant_id: 8,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/noodle_village/shrimp_and_pork_wonton_lomein.webp"
)
menu8_item5 = MenuItem.create!(
        name: "Braised Bonesless Shortrib",
        price: 14.95,
        restaurant_id: 8,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/noodle_village/braised_boneless_shortrib_lomein.webp"
)
menu8_item6 = MenuItem.create!(
        name: "Black & White Fish Ball Soup",
        price: 11.55,
        restaurant_id: 8,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/noodle_village/black_and_white_cuttle_fishball.webp"
)
menu8_item7 = MenuItem.create!(
        name: "Devlish Ramen",
        price: 15.95,
        restaurant_id: 8,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/noodle_village/devilish_ramen.webp"
)
menu8_item8 = MenuItem.create!(
        name: "Ox Tail with Curry Sauce",
        price: 18.65,
        restaurant_id: 8,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/noodle_village/oxtail_with_curry_sauce.webp"
)

# the palm 
menu9_item1 = MenuItem.create!(
        name: "Center-Cut Filet Mignon",
        price: 63.89,
        restaurant_id: 9,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/the_palm/center_cut_filet_mignon8oz.webp"
)
menu9_item2 = MenuItem.create!(
        name: "Prime New York Strip",
        price: 70.39,
        restaurant_id: 9,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/the_palm/prime_new_york_strip14oz.webp"
)
menu9_item3 = MenuItem.create!(
        name: "Gigi Salad",
        price: 20.89,
        restaurant_id: 9,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/the_palm/gigi-salad.webp"
)
menu9_item4 = MenuItem.create!(
        name: "Double-Cut Lamb Rib Chops",
        price: 69.29,
        restaurant_id: 9,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/the_palm/lamb_rib_chops.webp"
)
menu9_item5 = MenuItem.create!(
        name: "Thick-Cut Nueske's Bacon",
        price: 29.89,
        restaurant_id: 9,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/the_palm/thick_cut_nueske_bacon.webp"
)
menu9_item6 = MenuItem.create!(
        name: "Jumbo Shrimp Bruno",
        price: 27.49,
        restaurant_id: 9,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/the_palm/jumbo_shrimp_bruno.webp"
)
menu9_item7 = MenuItem.create!(
        name: "Lobster Bisque",
        price: 18.69,
        restaurant_id: 9,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/the_palm/lobster_bisque.webp"
)
menu9_item8 = MenuItem.create!(
        name: "Veal Martini",
        price: 42.89,
        restaurant_id: 9,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/the_palm/veal_martini.webp"
)
menu9_item9 = MenuItem.create!(
        name: "Chilean Sea Bass",
        price: 52.79,
        restaurant_id: 9,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/the_palm/chilean-sea-bass.webp"
)

# grimaldis 
menu10_item1 = MenuItem.create!(
        name: "Grimaldi's Traditional Cheese",
        price: 14.99,
        restaurant_id: 10,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/grimaldis/traditional_cheese.webp"
)
menu10_item2 = MenuItem.create!(
        name: "Presidential Pizza",
        price: 19.99,
        restaurant_id: 10,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/grimaldis/presidential.webp"
)
menu10_item3 = MenuItem.create!(
        name: "The Don Pizza",
        price: 21.99,
        restaurant_id: 10,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/grimaldis/the_don.webp"
)
menu10_item4 = MenuItem.create!(
        name: "Brooklyn Bridge Pizza",
        price: 19.99,
        restaurant_id: 10,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/grimaldis/brooklyn-bridge.webp"
)
menu10_item5 = MenuItem.create!(
        name: "Classic Bruschetta",
        price: 9.99,
        restaurant_id: 10,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/grimaldis/bruschetta.webp"
)
menu10_item6 = MenuItem.create!(
        name: "Kale Chopped Salad",
        price: 8.99,
        restaurant_id: 10,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/grimaldis/kale_chopped_salad.webp"
)
menu10_item7 = MenuItem.create!(
        name: "Pesto Pizza Genovese",
        price: 14.99,
        restaurant_id: 10,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/grimaldis/pesto.webp"
)
menu10_item8 = MenuItem.create!(
        name: "The Garden Pizza",
        price: 18.99,
        restaurant_id: 10,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/grimaldis/garden.webp"
)
menu10_item9 = MenuItem.create!(
        name: "The Village Truffle Pizza",
        price: 19.99,
        restaurant_id: 10,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/grimaldis/village_truffle.webp"
)

# gogo 
menu11_item1 = MenuItem.create!(
        name: "Home Run Pork Curry",
        price: 21.95,
        restaurant_id: 11,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gogocurry/homerunporkcurry.webp"
)
menu11_item2 = MenuItem.create!(
        name: "Ito-En Green Tea",
        price: 3.95,
        restaurant_id: 11,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gogocurry/itoengreentea.webp"
)
menu11_item3 = MenuItem.create!(
        name: "Calpico",
        price: 3.95,
        restaurant_id: 11,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gogocurry/calpico.webp"
)
menu11_item4 = MenuItem.create!(
        name: "Shrimp Tempura",
        price: 5.95,
        restaurant_id: 11,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gogocurry/shrimptempura.webp"
)
menu11_item5 = MenuItem.create!(
        name: "Fried Gyoza Chicken",
        price: 7.95,
        restaurant_id: 11,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gogocurry/friedgyozachicken.webp"
)
menu11_item6 = MenuItem.create!(
        name: "Sausage 3pc Curry",
        price: 15.95,
        restaurant_id: 11,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gogocurry/sausagecurry.webp"
)
menu11_item7 = MenuItem.create!(
        name: "Tofu Katsu Curry",
        price: 15.95,
        restaurant_id: 11,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gogocurry/tofukatsucurry.webp"
)
menu11_item8 = MenuItem.create!(
        name: "Grand Slam",
        price: 34.95,
        restaurant_id: 11,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gogocurry/grandslam.webp"
)

# pocha 32 
menu12_item1 = MenuItem.create!(
        name: "Boodae Jungol",
        price: 41.79,
        restaurant_id: 12,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/pocha32/boodaejungol.webp"
)
menu12_item2 = MenuItem.create!(
        name: "Corn Cheese",
        price: 15.39,
        restaurant_id: 12,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/pocha32/corncheese.webp"
)
menu12_item3 = MenuItem.create!(
        name: "Spicy Rice Cakes",
        price: 18.69,
        restaurant_id: 12,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/pocha32/spicyricecakes.webp"
)
menu12_item4 = MenuItem.create!(
        name: "Kimchi Fried Rice",
        price: 21.99,
        restaurant_id: 12,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/pocha32/kimchifriedrice.webp"
)
menu12_item5 = MenuItem.create!(
        name: "Soft Tofu Stew",
        price: 25.29,
        restaurant_id: 12,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/pocha32/softtofustew.webp"
)
menu12_item6 = MenuItem.create!(
        name: "Stir-Fried Octopus",
        price: 28.59,
        restaurant_id: 12,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/pocha32/stirfriedocotpus.webp"
)
menu12_item7 = MenuItem.create!(
        name: "Fried Chicken (10pcs)",
        price: 32.89,
        restaurant_id: 12,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/pocha32/friedchicken10pc.webp"
)
menu12_item8 = MenuItem.create!(
        name: "Kkanpungki",
        price: 31.89,
        restaurant_id: 12,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/pocha32/kkanpungki.webp"
)

# gyukaku 
menu13_item1 = MenuItem.create!(
        name: "Gyu-Bento",
        price: 20.95,
        restaurant_id: 13,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gyukaku/gyubento.webp"
)
menu13_item2 = MenuItem.create!(
        name: "Miso Chili Wings",
        price: 11.95,
        restaurant_id: 13,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gyukaku/misochiliwings.webp"
)
menu13_item3 = MenuItem.create!(
        name: "Umakara Beef Bowl",
        price: 13.95,
        restaurant_id: 13,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gyukaku/umakarabeefbowl.webp"
)
menu13_item4 = MenuItem.create!(
        name: "Sukiyaki Fried Rice",
        price: 13.95,
        restaurant_id: 13,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gyukaku/sukiyakifriedrice.webp"
)
menu13_item5 = MenuItem.create!(
        name: "Garlic Noodles with Chicken",
        price: 13.45,
        restaurant_id: 13,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gyukaku/garlicnoodleswithchicken.webp"
)
menu13_item6 = MenuItem.create!(
        name: "Tonkotsu Kakuni Ramen",
        price: 12.45,
        restaurant_id: 13,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gyukaku/tonkotsukakuniramen.webp"
)
menu13_item7 = MenuItem.create!(
        name: "Takoyaki",
        price: 8.95,
        restaurant_id: 13,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gyukaku/takoyaki.webp"
)
menu13_item8 = MenuItem.create!(
        name: "Spicy Cucumber",
        price: 6.95,
        restaurant_id: 13,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gyukaku/spicycucumber.webp"
)
menu13_item9 = MenuItem.create!(
        name: "Yuzu Shishito Peppers",
        price: 8.95,
        restaurant_id: 13,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gyukaku/yuzushishitopeppers.webp"
)

# jasmine 
menu14_item1 = MenuItem.create!(
        name: "Popcorn Chicken",
        price: 6.99,
        restaurant_id: 14,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/jasminebubbletea/popcornchicken.webp"
)
menu14_item2 = MenuItem.create!(
        name: "Jasmine Bubble Grean Tea",
        price: 6.75,
        restaurant_id: 14,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/jasminebubbletea/jasminebubblemilkgreentea.webp"
)
menu14_item3 = MenuItem.create!(
        name: "Crispy Chicken Sandwich",
        price: 6.99,
        restaurant_id: 14,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/jasminebubbletea/crispychickensandwich.webp"
)
menu14_item4 = MenuItem.create!(
        name: "Caramel Bubble Milk Tea",
        price: 6.75,
        restaurant_id: 14,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/jasminebubbletea/caramelbubblemilktea.webp"
)
menu14_item5 = MenuItem.create!(
        name: "Milk Thai Tea",
        price: 6.75,
        restaurant_id: 14,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/jasminebubbletea/thaimilktea.webp"
)
menu14_item6 = MenuItem.create!(
        name: "Rose Milk Tea",
        price: 6.75,
        restaurant_id: 14,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/jasminebubbletea/rosemilktea.webp"
)
menu14_item7 = MenuItem.create!(
        name: "Fruit Milk Tea",
        price: 6.75,
        restaurant_id: 14,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/jasminebubbletea/fruitbubblemilktea.webp"
)
menu14_item8 = MenuItem.create!(
        name: "Ube Fresh Milk",
        price: 6.99,
        restaurant_id: 14,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/jasminebubbletea/ubefreshmilk.webp"
)
menu14_item9 = MenuItem.create!(
        name: "Crispy Crab Rangoon",
        price: 6.99,
        restaurant_id: 14,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/jasminebubbletea/crispycrabrangoon.webp"
)

# supreme 
menu15_item1 = MenuItem.create!(
        name: "Fried Tin Buns With Pork",
        price: 9.95,
        restaurant_id: 15,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/supremerestaurant/friedtinbunswithpork.webp"
)
menu15_item2 = MenuItem.create!(
        name: "Sesame Chicken",
        price: 18.95,
        restaurant_id: 15,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/supremerestaurant/sesamechicken.webp"
)
menu15_item3 = MenuItem.create!(
        name: "Pork Soup Dumplings",
        price: 8.95,
        restaurant_id: 15,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/supremerestaurant/porksoupdumplings.webp"
)
menu15_item4 = MenuItem.create!(
        name: "Crab Meat & Pork Soup Dumpling",
        price: 10.95,
        restaurant_id: 15,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/supremerestaurant/crabmeatandpork.webp"
)
menu15_item5 = MenuItem.create!(
        name: "Scallion Pancake",
        price: 5.95,
        restaurant_id: 15,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/supremerestaurant/scallionpancake.webp"
)
menu15_item6 = MenuItem.create!(
        name: "Wonton Szechuan Style",
        price: 9.95,
        restaurant_id: 15,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/supremerestaurant/wontonszechuanstyle.webp"
)
menu15_item7 = MenuItem.create!(
        name: "Wine Chicken",
        price: 9.95,
        restaurant_id: 15,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/supremerestaurant/wontonszechuanstyle.webp"
)
menu15_item8 = MenuItem.create!(
        name: "Spring Rolls",
        price: 5.95,
        restaurant_id: 15,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/supremerestaurant/springrolls.webp"
)
menu15_item9 = MenuItem.create!(
        name: "Jellyfish",
        price: 12.95,
        restaurant_id: 15,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/supremerestaurant/jellyfish.webp"
)

# gotham 
menu16_item1 = MenuItem.create!(
        name: "Pepperoni Pizza",
        price: 23.95,
        restaurant_id: 16,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gothampizza/pepperoni.webp"
)
menu16_item2 = MenuItem.create!(
        name: "Margherita Pizza",
        price: 25.95,
        restaurant_id: 16,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gothampizza/margherita.webp"
)
menu16_item3 = MenuItem.create!(
        name: "Regular Pizza",
        price: 19.95,
        restaurant_id: 16,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gothampizza/regular.webp"
)
menu16_item4 = MenuItem.create!(
        name: "Buffalo Chicken Pizza",
        price: 28.95,
        restaurant_id: 16,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gothampizza/buffalochicken.webp"
)
menu16_item5 = MenuItem.create!(
        name: "Vegetable Pizza",
        price: 27.95,
        restaurant_id: 16,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gothampizza/veggies.webp"
)
menu16_item6 = MenuItem.create!(
        name: "White Pizza",
        price: 27.95,
        restaurant_id: 16,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gothampizza/white.webp"
)
menu16_item7 = MenuItem.create!(
        name: "Grandma Pizza",
        price: 25.95,
        restaurant_id: 16,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gothampizza/grandmapizza.webp"
)
menu16_item8 = MenuItem.create!(
        name: "Sicilian Pizza",
        price: 21.95,
        restaurant_id: 16,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/gothampizza/sicilianpizza.webp"
)

# mcdonalds 
menu17_item1 = MenuItem.create!(
        name: "Big Mac Meal",
        price: 12.19,
        restaurant_id: 17,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/mcdonalds/big_mac_meal.webp"
)
menu17_item2 = MenuItem.create!(
        name: "Double Quarter Pounder Meal",
        price: 13.09,
        restaurant_id: 17,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/mcdonalds/double_quarter_pounder_with_chese_meal.webp"
)
menu17_item3 = MenuItem.create!(
        name: "10 Piece McNuggets Meal",
        price: 11.99,
        restaurant_id: 17,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/mcdonalds/10pc_mcnugget_meal.webp"
)
menu17_item4 = MenuItem.create!(
        name: "20 Piece McNuggets",
        price: 9.89,
        restaurant_id: 17,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/mcdonalds/20pc_mcnugget.webp"
)
menu17_item5 = MenuItem.create!(
        name: "Medium French Fries",
        price: 4.89,
        restaurant_id: 17,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/mcdonalds/french_fries.webp"
)
menu17_item6 = MenuItem.create!(
        name: "Bacon Quarter Pounder Meal",
        price: 12.09,
        restaurant_id: 17,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/mcdonalds/bacon_quarter_pounder_with_cheese_meal.webp"
)
menu17_item7 = MenuItem.create!(
        name: "Big Mac Pack with Apple Pie",
        price: 32.09,
        restaurant_id: 17,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/mcdonalds/big_mac_pack_with_apple_pie.webp"
)
menu17_item8 = MenuItem.create!(
        name: "13 Cookie Tote",
        price: 6.19,
        restaurant_id: 17,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/mcdonalds/13_cookie_tote.webp"
)

# szechuan 
menu18_item1 = MenuItem.create!(
        name: "Stir Fried Cauliflower",
        price: 18.99,
        restaurant_id: 18,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/szechuanmountainhouse/stirfriedcauliflower.webp"
)
menu18_item2 = MenuItem.create!(
        name: "Green Pepper Pork",
        price: 18.99,
        restaurant_id: 18,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/szechuanmountainhouse/greenpepperpork.webp"
)
menu18_item3 = MenuItem.create!(
        name: "Peppers & Paws",
        price: 11.99,
        restaurant_id: 18,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/szechuanmountainhouse/pepperandpaws.webp"
)
menu18_item4 = MenuItem.create!(
        name: "Okra Salad",
        price: 11.99,
        restaurant_id: 18,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/szechuanmountainhouse/okrasalad.webp"
)
menu18_item5 = MenuItem.create!(
        name: "Ma-Po Tofu",
        price: 17.99,
        restaurant_id: 18,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/szechuanmountainhouse/mapotofu.webp"
)
menu18_item6 = MenuItem.create!(
        name: "Ma-La Trio",
        price: 25.99,
        restaurant_id: 18,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/szechuanmountainhouse/malatrio.webp"
)
menu18_item7 = MenuItem.create!(
        name: "Ma-La Shredded Eel",
        price: 30.99,
        restaurant_id: 18,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/szechuanmountainhouse/malashreddedeel.webp"
)
menu18_item8 = MenuItem.create!(
        name: "Ma-La Chicken Stew",
        price: 29.99,
        restaurant_id: 18,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/szechuanmountainhouse/malachickenstew.webp"
)
menu18_item9 = MenuItem.create!(
        name: "Ma-La Pork Intestines",
        price: 23.99,
        restaurant_id: 18,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/szechuanmountainhouse/malaporkintestines.webp"
)

# chipotle 
menu19_item1 = MenuItem.create!(
        name: "Burrito Bowl",
        price: 13.91,
        restaurant_id: 19,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/chipotle/burrito_bowl.webp"
)
menu19_item2 = MenuItem.create!(
        name: "Burrito",
        price: 13.91,
        restaurant_id: 19,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/chipotle/burrito.webp"
)
menu19_item3 = MenuItem.create!(
        name: "Chips & Guacamole",
        price: 6.49,
        restaurant_id: 19,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/chipotle/chips_and_guac.webp"
)
menu19_item4 = MenuItem.create!(
        name: "Mexican Coca-Cola",
        price: 4.55,
        restaurant_id: 19,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/chipotle/mexican_coca_cola.webp"
)
menu19_item5 = MenuItem.create!(
        name: "Side of Guacamole",
        price: 3.75,
        restaurant_id: 19,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/chipotle/side_of_guacamole.webp"
)
menu19_item6 = MenuItem.create!(
        name: "Quesadilla",
        price: 14.61,
        restaurant_id: 19,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/chipotle/quesadilla.webp"
)
menu19_item7 = MenuItem.create!(
        name: "Salad",
        price: 13.91,
        restaurant_id: 19,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/chipotle/salad.webp"
)
menu19_item8 = MenuItem.create!(
        name: "Three Tacos",
        price: 13.91,
        restaurant_id: 19,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/chipotle/three_tacos.webp"
)

# song gong 
menu20_item1 = MenuItem.create!(
        name: "Soondubu",
        price: 13.89,
        restaurant_id: 20,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/sogongdongtofu/soondubu.webp"
)
menu20_item2 = MenuItem.create!(
        name: "Soodubu Ramen",
        price: 13.91,
        restaurant_id: 20,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/sogongdongtofu/soonduburamen.webp"
)
menu20_item3 = MenuItem.create!(
        name: "Seafood Pancake",
        price: 8.89,
        restaurant_id: 20,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/sogongdongtofu/seafoodpancake.webp"
)
menu20_item4 = MenuItem.create!(
        name: "Beef Bulgogi Bento",
        price: 17.89,
        restaurant_id: 20,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/sogongdongtofu/beefbulgogibento.webp"
)
menu20_item5 = MenuItem.create!(
        name: "SDG Pork",
        price: 14.89,
        restaurant_id: 20,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/sogongdongtofu/sdgpork.webp"
)
menu20_item6 = MenuItem.create!(
        name: "Chicken Bulgogi",
        price: 13.89,
        restaurant_id: 20,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/sogongdongtofu/chickenbulgogi.webp"
)
menu20_item7 = MenuItem.create!(
        name: "Bibimbap",
        price: 14.89,
        restaurant_id: 20,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/sogongdongtofu/bibimbap.webp"
)
menu20_item8 = MenuItem.create!(
        name: "Fried Dumpling",
        price: 6.89,
        restaurant_id: 20,
        img_url: "https://oobreats.s3.amazonaws.com/restaurantphotos/sogongdongtofu/frieddumpling.webp"
)
