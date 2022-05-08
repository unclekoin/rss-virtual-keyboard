export const calculatePosition = (start, value) => {
  const array = value.split('\n');
  let itemsLength = 0;
  let rowIndex = 0;

  for (let i = 0; i < array.length; i++) {
    itemsLength += array[i].length;

    if (itemsLength + i + 1 > start) {
      rowIndex = i;
      break;
    }
  }

  let colIndex = start - (itemsLength - array[rowIndex].length + rowIndex);

  return { array, rowIndex, colIndex, displayLength: value.length };
};
