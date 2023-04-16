class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error("Not enough space in the cellar.");
        }
        const wine = {
            wineName,
            wineType,
            price,
            paid: false,
        };
        this.wines.push(wine);
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const wine = this.wines.find((w) => w.wineName === wineName);
        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }
        wine.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for ${price}$.`;
    }
};