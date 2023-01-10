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
}