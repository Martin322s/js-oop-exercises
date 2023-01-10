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

    addToMenu(meal, productArr, price) {
        let neededProducts = [];

        for (let strSequence of productArr) {
            let [product, quantity] = strSequence.split(' ');
            quantity = Number(quantity);

            neededProducts.push([product, quantity]);
        }

        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`;
        }
        this.menu[meal] = { products: neededProducts, price };
        let mealCount = Object.keys(this.menu).length;

        if (mealCount == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else if (!mealCount || mealCount >= 2) {
            return `Great idea! Now with the ${meal} we have ${mealCount} meals in the menu, other ideas?`;
        }

    }

    showTheMenu() {
        let menuEntries = Object.entries(this.menu);
        let mealCount = menuEntries.length;

        if (!mealCount) {
            return 'Our menu is not ready yet, please come later...';
        }

        let stringArr = [];
        for (let [meal, mealInfoObj] of menuEntries) {
            stringArr.push(`${meal} - $ ${mealInfoObj.price}`);
        }

        return stringArr.join('\n');
    }
}