# cryptography-test

#### These 2 arrays will make a sentence, what would it be?
```javascript
const arr1 = ['A','B','D','E','G','H','I','R','Q','O','N','K','S','T','U','V','Y']
const arr2 = [32,26,37,28,27,34,31,30,41,37,25,37,33,24,27,35,34,30,36,41,24,31,26,41,33,37,40,38,41,34,30,41,40,30,24,41,39,31,31,29,28]
```
* arr1 contain 17 letter, in javascript it has index 0 to 16
* arr2 contain number between 24 to 41, which if i want to match with arr1 index, each number must reduced by 24 which become 0 - 17 (where the 17th index of arr1 is undefined and can be a 'space' later) and saved it into variable hiddenMessage

```javascript
const hiddenMessage = arr2.map(item => item - 24)
// hiddenMessage = [8, 2, 13, 4, 3, 10, 7, 6, 17, 13, 1, 13, 9, 0, 3, 11, 10, 6, 12, 17, 0, 7, 2, 17, 9, 13, 16, 14, 17, 10, 6, 17, 16, 6, 0, 17, 15, 7, 7, 5, 4]
```
> script above will iterate each arr2 number and reduce it by 24
* with current arr1, the result still not make sense, so i try to reverse the arr1, and saved it into variable library
```javascript
const library = arr1.reverse()
// library = ["Y", "V", "U", "T", "S", "K", "N", "O", "Q", "R", "I", "H", "G", "E", "D", "B", "A"]
```

* Then i match each of hiddenMessage number with letters in library, where if the result is undefined it will return 'space'
```javascript
message = arr2.map(item => arr1[item] ? arr1[item]: ' ')
```
* and if i print the result to be a string the result is :
```javascript 
console.log(message.join(''))
```
> "QUESTION EVERYTHING YOU READ IN ANY BOOKS"