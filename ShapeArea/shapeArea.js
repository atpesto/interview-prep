const shapeArea = (n) => {
  const span = (2 * n) - 1;

  let totalArea = 0;

  let i = 1;

  while (i < span) {
    totalArea += (i * 2);
    i += 2;
  }
  totalArea += i;

  return totalArea;
}

console.log(shapeArea(1));