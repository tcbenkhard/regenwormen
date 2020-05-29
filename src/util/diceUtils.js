export const getFullDiceArray = () => {
    return Array.from({length: 8}, () => { return { value: Math.ceil(Math.random()*6), picked: false }});
}

export const getTotalPoints = (dice) => {
    return dice.filter(d => d.picked).map(d => d.value === 6 ? 5 : d.value).reduce((a, b) => a+b, 0);
}