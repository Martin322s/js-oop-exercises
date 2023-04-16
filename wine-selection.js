class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
        this.reservedSpace = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.reservedSpace + 1 > this.space) {
            throw new Error("Not enough space in the cellar.");
        }
        this.wines.push({
            wineName,
            wineType,
            price,
            paid: false,
        });
        this.reservedSpace++;
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }
};