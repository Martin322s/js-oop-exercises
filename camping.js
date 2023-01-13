class SummerCamp {
    constructor(organizer, location) {

        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { child: 150, student: 300, collegian: 500 }
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        money = Number(money);

        if (!(Object.keys(this.priceForTheCamp)).includes(condition)) {
            throw new Error(`Unsuccessful registration at the camp.`);
        }

        if (this.listOfParticipants.find(el => el.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        let person = { name, condition, power: 100, wins: 0 };
        this.listOfParticipants.push(person);

        return `The ${name} was successfully registered.`;
    }
}