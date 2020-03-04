const arr1 = ['A','B','D','E','G','H','I','R','Q','O','N','K','S','T','U','V','Y']
const arr2 = [32,26,37,28,27,34,31,30,41,37,25,37,33,24,27,35,34,30,36,41,24,31,26,41,33,37,40,38,41,34,30,41,40,30,24,41,39,31,31,29,28]

const hiddenMessage = arr2.map(item => item - 24)
// hiddenMessage = [8, 2, 13, 4, 3, 10, 7, 6, 17, 13, 1, 13, 9, 0, 3, 11, 10, 6, 12, 17, 0, 7, 2, 17, 9, 13, 16, 14, 17, 10, 6, 17, 16, 6, 0, 17, 15, 7, 7, 5, 4]

const library = arr1.reverse()
// library = ["Y", "V", "U", "T", "S", "K", "N", "O", "Q", "R", "I", "H", "G", "E", "D", "B", "A"]

const message = hiddenMessage.map(item => library[item]? library[item]: ' ')
console.log(message.join(''))
// "QUESTION EVERYTHING YOU READ IN ANY BOOKS"