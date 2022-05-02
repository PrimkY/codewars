//We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

function vowelIndices(word){
    let arr=[]
    let a=word.split('');
    for (let i=0;i<word.length;i++){
        if (/[aeuoiy]/gi.test(a[i])) {arr.push(i+1)}
    }
    return arr
}

console.log(vowelIndices('greedisgood'));