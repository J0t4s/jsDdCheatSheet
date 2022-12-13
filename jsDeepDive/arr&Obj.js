//array
    const restaurants = [
        { name: "Cap City Diner", milesAway: 2.2 },
        { name: "Chop Shop", milesAway: 4.1 },
        { name: "Norther Star Cafe", milesAway: 0.9 },
        { name: "City Tarvern", milesAway: 0.5 },
        { name: "Shake Shack", milesAway: 5.3 },
    ]

    const results = restaurants.filter(restaurant => 
        restaurant.name.startsWith('C') && restaurant.milesAway < 3
    )

    const result = restaurants.find(restaurant => 
        restaurant.name.toLocaleLowerCase.includes('north') && restaurant.milesAway < 3
    )

    console.log(results)


    const menuItems = [
        { item: "Blue Cheese Salad", price: 8 },
        { item: "Spicy Chicken Rigatoni", price: 18 },
        { item: "Ponzu Glazed Salmon", price: 23 },
        { item: "Philly Cheese Steak", price: 13 },
        { item: "Baked Italian Chicken Sub", price: 12 },
        { item: "Pan Seared Ribeye", price: 31 }
    ];
    
    const total = menuItems.reduce((accumulator, menuItem) => {
        console.log(`
        accumulator: ${accumulator},
        menu item price: ${menuItem.price}
        `);
        return accumulator + menuItem.price;  
    }, 0);
    console.log(total);

    const numbers = [1, 2, 3, 4, 5, 6];

    const doubledNumbers = numbers.reduce((acc, num) => {
    acc.push(num * 2);
    return acc;
    }, []);
    console.log('doubled numbers', doubledNumbers);
    console.log('numbers', numbers);

    const greaterNumbers = numbers.reduce((acc, num) => num > 3 ? acc.concat(num) : acc, []);
    console.log(greaterNumbers);

    const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

    // const allMenuIdeas = [...lunchMenuIdeas];

    allMenuIdeas.push('Club Sandwich');

    console.log(allMenuIdeas);

    const breakfastMenuIdeas = ["Buckwheat Pancakes"];
    const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

    const allMenuIdeas = [
        ...breakfastMenuIdeas, 
        "Harvest Salad", 
        "Southern Fried Chicken",
        ...dinnerMenuIdeas
    ];

    const saladIndex = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad');

    const meatloafIndex = allMenuIdeas.findIndex(idea => idea === 'Meatloaf');

    const finalMenuIdeas = [
    ...allMenuIdeas.slice(0, meatloafIndex),
    ...allMenuIdeas.slice(meatloafIndex + 1)
    ]

    // const finalMenuIdeas = [
    //   ...allMenuIdeas.slice(0, saladIndex),
    //   "Garden Salad",
    //   ...allMenuIdeas.slice(saladIndex + 1)
    // ];

    console.log(finalMenuIdeas);

    const finalMenuItems = [
        "American Cheeseburger",
        "Southern Fried Chicken",
        "Glazed Salmon"
    ];
    
    const [winner, ...losers] = finalMenuItems;
    
    console.log({ winner, losers });
    // let [first, second] = finalMenuItems;
    // [second, first] = [first, second];
    // let first = finalMenuItems[0];
    // let second = finalMenuItems[1];
    // let third = finalMenuItems[2];
    
    // console.log(first, second, third);

    // const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach(number => {
  console.log(number);  
});

/* 
- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- spread orperator
*/

  //obj
    // for-in loop
    // const obj = { one: 1, two: 2 };

    // for (const key in obj) {
    //   console.log('value', obj[key]);
    // }

    // Object.keys(), Object.values(), Object.entries()
    const user = {
        name: 'John',
        age: 29  
    };
    
    // const values = Object.keys(user).map(key => user[key]);
    // console.log(values);
    // console.log(Object.values(user));
    
    const monthlyExpenses = {
        food: 400,
        rent: 1700,
        insurance: 550,
        internet: 49,
        phone: 95  
    };
    
    const monthlyTotal = Object.values(monthlyExpenses).reduce((acc, expense) => acc + expense, 0);
    console.log(monthlyTotal);

    const users = {
        '2345234': {
          name: "John",
          age: 29
        },
        '8798129': {
          name: "Jane",
          age: 42
        },
        '1092384': {
          name: "Fred",
          age: 17 
        }
      };
      
      const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {
        if (user.age > 20) {
          acc.push({ ...user, id });
        }  
        return acc;
      }, []);
      console.log(usersOver20);

      const customerDishes = [
        "Chicken Wings",
        "Fish Sandwich",
        "Beef Stroganoff",
        "Grilled Cheese",
        "Blue Cheese Salad",
        "Chicken Wings",
        "Reuben Sandwich",
        "Grilled Cheese",
        "Fish Sandwich",
        "Chicken Pot Pie",
        "Fish Sandwich",
        "Beef Stroganoff"
      ];
      
      const uniqueDishes = [...new Set(customerDishes)];
      console.log(uniqueDishes)