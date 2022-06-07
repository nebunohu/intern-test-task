const getMinSum = (value: string) => {
  const inputArray = value.match(/-?\d+/g) || [];
  if (!inputArray.length) return 'Массив не содержит чисел';
  if (inputArray.length < 2) return 'В массиве только одно число';
  const arrayNumbers = inputArray.map((strNum) => parseInt(strNum, 10));
  let min1 = arrayNumbers[0], min2 = arrayNumbers[1];
  for (let i = 1; i < arrayNumbers.length; i++) {
    if (i === 1 && min1 < min2) {
      min1 = arrayNumbers[1];
      min2 = arrayNumbers[0];
    }
    if (arrayNumbers[i] < min2) {
      min1 = min2;
      min2 = arrayNumbers[i];
    } else if (arrayNumbers[i] < min1) {
      min1 = arrayNumbers[i];
    }
  }

  return min1 + min2;
};

export default getMinSum;