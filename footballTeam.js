class FootballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        const newInvites = [];
        for (let i = 0; i < footballPlayers.length; i++) {
            const [name, age, playerValue] = footballPlayers[i].split('/');
            const index = this.invitedPlayers.findIndex(p => p.name === name);
            const player = { name, age: Number(age), playerValue: Number(playerValue) };
            if (index !== -1) {
                if (player.playerValue > this.invitedPlayers[index].playerValue) {
                    this.invitedPlayers[index] = player;
                }
            } else {
                this.invitedPlayers.push(player);
                newInvites.push(name);
            }
        }
        const message = `You successfully invite ${newInvites.join(', ')}.`;
        return message;
    }

    signContract(selectedPlayer) {
        const [name, playerOffer] = selectedPlayer.split('/');
        const index = this.invitedPlayers.findIndex(p => p.name === name);
        if (index === -1) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        const player = this.invitedPlayers[index];
        if (playerOffer < player.playerValue) {
            const priceDifference = player.playerValue - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }
        player.playerValue = 'Bought';
        const message = `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
        return message;
    }

    ageLimit(name, age) {
        const index = this.invitedPlayers.findIndex(p => p.name === name);
        if (index === -1) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        const player = this.invitedPlayers[index];
        const ageDifference = 18 + 5 - player.age;
        if (player.age < age) {
            if (ageDifference < 5) {
                const message = `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
                return message;
            }
            const message = `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            return message;
        }
        const message = `${name} is above age limit!`;
        return message;
    }
};