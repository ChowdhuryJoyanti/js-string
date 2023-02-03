const lyrics ='tumi bondhu kala pakhi ami jeno ki ,bosonto kale ami bolte pari ni sada sada kala kala rong jomeche sada kala';
const parts = lyrics.split( ' ');
const sentenses = lyrics.split('.');
const chars = lyrics.split('')
// console.log(chars)



// slice
const partial = lyrics.slice(5 ,8);

const partial2 = lyrics.substring(5,8)
// console.log(partial2)

const lines = [
    'tumi bondhu kala pakhi ami jeno ki ,bosonto kale,' 
    'ami bolte pari ni sada, sada kala kala rong jomeche'
    'sad a kala'
  ];
  const newSong = lines.join('. ');
  console.log(newSong);

