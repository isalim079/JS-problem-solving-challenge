let array = [1, 3, 7, 2, 5];

let maximumValue = 0;

for (i = 0; i < array.length; i++) {
  if (maximumValue < array[i]) {
    maximumValue = array[i];
  }
}

console.log(maximumValue);
