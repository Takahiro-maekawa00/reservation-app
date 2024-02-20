const Product = require("./model/product");

class SampleDb {
  constructor() {
    this.products = [
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone XL",
        price: 799,
        description: "A large phone with one of the best screens",
        heading1: "sample text1",
        heading2: "sample text2",
        heading3: "sample text3",
        headingText1: "sample heading text1",
        headingText2: "sample heading text2",
        headingText3: "sample heading text3",
      },
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone Mini",
        price: 699,
        description: "A great phone with one of the best cameras",
        heading1: "sample text1",
        heading2: "sample text2",
        heading3: "sample text3",
      },
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone Standard",
        price: 299,
        description: "standard",
        heading1: "sample text1",
        heading2: "sample text2",
        heading3: "sample text3",
      },
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone Special",
        price: 999,
        description: "special",
        heading1: "sample text1",
        heading2: "sample text2",
        heading3: "sample text3",
      },
    ];
  }

  async initDb() {
    await this.cleanDb();
    this.pushProductsToDb();
  }

  async cleanDb() {
    await Product.deleteMany({});
  }

  pushProductsToDb() {
    this.products.forEach((product) => {
      const newProduct = new Product(product);
      newProduct.save();
    });
  }

  seeDb() {
    this.pushProductsToDb();
  }
}

module.exports = SampleDb;
