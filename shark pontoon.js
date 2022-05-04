function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if ((pontoonDistance / youSpeed) >= (sharkDistance / (sharkSpeed / (dolphin ? 2 : 1)))) {
        return 'Shark Bait!'
    }
    return 'Alive!';
}

console.log(shark(12, 50, 4, 8, true));
console.log(shark(7, 55, 4, 16, true));
console.log(shark(24, 0, 4, 8, true));