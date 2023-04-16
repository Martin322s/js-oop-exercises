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

    openBottle(wineName) {
        const wineIndex = this.wines.findIndex((w) => w.wineName === wineName);
        if (wineIndex === -1) {
            throw new Error(`The wine, you're looking for, is not found.`);
        }
        const wine = this.wines[wineIndex];
        if (!wine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }
        this.wines.splice(wineIndex, 1);
        return `You drank a bottle of ${wineName}.`;
    }
};