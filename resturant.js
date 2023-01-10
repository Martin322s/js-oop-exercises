class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (let element of products) {
            let [product, quantity, price] = element.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            if (price <= this.budgetMoney) {
                this.budgetMoney -= price;
                this.history.push(`Successfully loaded ${quantity} ${product}`);

                if (!this.stockProducts.hasOwnProperty(product)) {
                    this.stockProducts[product] = 0;
                }
                this.stockProducts[product] += quantity;
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${product}`);
            }
        }

        return this.history.join('\n');
    }
}