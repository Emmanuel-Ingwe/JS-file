// for (let i = 29; i >= 10; i--) {
//     console.log('King', i);
// }


// // const word = 'stressed';
// // let reversedWord = '';
// // for (let i = word.length - 1; i >= 0; i--) {
// //     reversedWord += word[i];
// // }
// // console.log(reversedWord);

// const word = 'stressed';
// let reversedWord = '';
// for (let i = word.length - 1; i >= 0; i--) {
//     reversedWord += word[i];
//     console.log(reversedWord);
// }

// const wordd = 'Albino';
// let newWord = '';
// for (let o = wordd.length - 1; o >= 0; o--) {
//     newWord += wordd[o];
//     console.log(newWord);
// }

for (let p = 1; p <= 10; p++) {
    console.log('gods Loop:', p);
    for (let q = 10; q >= 0; q -= 2) {
        console.log('  godess Loop', q);
    }
}

const sub = ['team', 'plays', 'diamond'];
const subb = ['-player', ' basketball', '-castle'];
for (let i = 0; i < sub.length; i++) {
    console.log(`${sub[i]}${subb[i]}`);
}