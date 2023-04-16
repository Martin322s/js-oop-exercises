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
};