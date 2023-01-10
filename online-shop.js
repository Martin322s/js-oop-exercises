class OnlineShop {
    constructor(wareHouseSpace) {
        this.wareHouseSpace = Number(wareHouseSpace);
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.wareHouseSpace < Number(spaceRequired)) {
            throw new Error("Not enough space in the warehouse.");
        } else {
            const productElement = { product, quantity };

            if (!this.products.find(x => x.product === product)) {
                this.products.push(productElement);
                this.wareHouseSpace = Number(this.wareHouseSpace) - Number(spaceRequired);
                return `The ${product} has been successfully delivered in the warehouse.`;
            }
        }
    }

    quantityCheck(product, minimalQuantity) {
        if (!this.products.find(x => x.product === product)) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (Number(minimalQuantity) <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        } else {
            let productElement = this.products.find(x => x.product === product);

            if (Number(minimalQuantity) <= Number(productElement.quantity)) {
                return `You have enough from product ${product}.`;
            } else {
                let result = Number(minimalQuantity) - Number(productElement.quantity);
                productElement.quantity = Number(minimalQuantity);
                return `You added ${result} more from the ${product} products.`;
            }
        }
    }

    sellProduct(product) {
        if (!this.products.find(x => x.product === product)) {
            throw new Error(`There is no ${product} in the warehouse.`);
        } else {
            let productElement = this.products.find(x => x.product === product);
            let index = this.products.indexOf(productElement);
            let newQuantity = Number(productElement.quantity) - 1;
            let newProduct = { product: productElement.product, quantity: newQuantity };
            this.products.splice(index, 1, newProduct);
            this.sales.push(newProduct);
            return `The ${product} has been successfully sold.`;
        }
    }
}