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
        let wine = this.wines.find((w) => w.wineName === wineName);
        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }
        wine.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`;
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

    cellarRevision(wineType) {
        const filteredWines = wineType
            ? this.wines.filter((w) => w.wineType === wineType)
            : this.wines;
        const emptySlots = this.space - this.wines.length;
        let result = `You have space for ${emptySlots} bottles more.\n`;
        result += `You paid ${this.bill}$ for the wine.\n`;
        filteredWines.sort((a, b) => a.wineName.localeCompare(b.wineName));
        if (filteredWines.length === 0) {
            result += "The cellar is empty.";
        } else {
            result += filteredWines
                .map(
                    (w) => `${w.wineName} > ${w.wineType} - ${w.paid ? "Paid" : "Not Paid"}.`
                )
                .join("\n");
        }
        if (wineType && filteredWines.length === 0) {
            throw new Error(`There is no ${wineType} in the cellar.`);
        }
        return result;
    }
};