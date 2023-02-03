const lyrics ='tumi bondhu kala pakhi ami jeno ki ,bosonto kale ami bolte pari ni';
const searchString ='pakhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyrics.includes(searchString);
// -------------------------------------------------------------------

// const lyricsLowerCase = lyrics.toLocaleLowerCase()
// const doesExist = lyricsLowerCase.includes(searchString);
// const searchStringLower = searchString.toLocaleLowerCase();
// const doesExist = lyricsLowerCase().includes(searchStringLower);

// ---------------------------------------------------------------------------------------

// const doesExistOneLine = lyrics.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
const lyricsLowerCase = lyrics.toLowerCase()
// const doesExist = lyricsLowerCase.includes(searchString);

const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(doesExist);
// console.log(doesExistOneLine);
// --------------------------------------------------------------------------------
// index of
console.log(lyrics.indexOf('kala') );
console.log(lyrics.indexOf('tumi') );

if (lyrics.indexOf('bondhu') !== -1){
    // console.log('exist inside the string')

}
else {
    // console.log('cannot find it ')
}

// star with
lyrics.startsWith('tumi');
// console.log(lyrics.startsWith('tumi'));

// ends with
const filename = 'mybiodata.pdf';
const othersfile = 'mypic.png';
filename.endsWith('.pdf')
console.log(filename.endsWith('.pdf'))
