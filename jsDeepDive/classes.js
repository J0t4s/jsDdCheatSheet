// const student1 = {
//   id: 1,
//   name: "Reed",
//   subjects: [],
//   addSubject(subject) {
//     this.subjects = [...this.subjects, subject];
//   }
// }
// constructor function
// function Student(id, name, subjects = []) {
//     this.id = id;
//     this.name = name;
//     this.subjects = subjects;  
//   }
  
//   Student.prototype.addSubject = function(subject) {
//     this.subjects = [...this.subjects, subject];   
//   }
  
//   const student1 = new Student(1, 'Reed');
//   const student2 = new Student(2, 'Doug');
  
//   student1.addSubject('Math');
//   student2.addSubject('Physics');
//   console.log(student2.subjects);

  //classes

  class Student {
    constructor(id, name, subject = []) {
      this.id = id,
      this.name = name,
      this.subjects = subjects
    }

    getStudentName() {
      return `Student: ${this.name}`
    }

    addSubject() {}
  }

  const student1 = new Student(1, "Reed");

  class Product {
    constructor(name, price, discountable) {
      this.name = name;
      this.price = price;
      this.discountable = discountable;  
    }  
    
    isDiscountable() {
      return this.discountable;  
    }
  }
  
  class SaleProduct extends Product {
    constructor(name, price, discountable, percentOff) {
       super(name, price, discountable);
       this.percentOff = percentOff; 
    }  
    
    getSalePrice() {
       if (super.isDiscountable()) {
         return this.price * ((100 - this.percentOff) / 100);
       } else {
          return `${this.name} is not eligible for a discount`;
       }
    }
  }
  
  const saleProduct1 = new SaleProduct("Coffee Maker", 99, false, 20);
  console.log(saleProduct1.getSalePrice());

  class Product {
    constructor(name, price, discountable) {
      this.name = name;
      this._price = price;
      this.discountable = discountable;
    }
  
    get price() {
      return this._price;
    }
    
    set price(price) {
      if (typeof price !== "number") {
        return this._price;
      } else {
        this._price = price; 
      }
    }
  }
  
  const product1 = new Product("Coffee Maker", 99.95, false);
  product1.price = 30;
  console.log(product1.price);

  const isAuth = true;
const user = {
  favorites: []
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.favoriteProduct = this.favoriteProduct.bind(this);
  }

  handleFavoriteProduct() {
    if (isAuth) {
      setTimeout(this.favoriteProduct, 1000);
    } else {
      console.log("You must be signed in to favorite products!");
    }
  }

  favoriteProduct() {
    user.favorites.push(this.name);
    console.log(`${this.name} favorited!`);
  }
}

const product1 = new Product('Coaster', 89.99)
product1.handleFavoriteProduct()