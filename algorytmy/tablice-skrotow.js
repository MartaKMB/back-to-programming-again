const votedMap = new Map();
const assignedBoolToKeyName = votedMap.get('Tomasz');

console.log('voted? ', !!assignedBoolToKeyName);

const checkIfVoted = (name) => {
  if (votedMap.get(name)) {
    console.log('Juz głosował, pogonić go!');
  } else {
    votedMap.set(name, true);
    console.log('Niech zagłosuje!');
  }
};

checkIfVoted('Tomasz');
checkIfVoted('Tomasz');
checkIfVoted('Monika');

console.log(votedMap.size);
