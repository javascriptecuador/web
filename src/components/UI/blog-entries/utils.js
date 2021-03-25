const generateDistribution = (cardsLength) => {
  const states = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 0],
    [1, 1, 1],
  ];
  // jumps indica la distribucion de las tarjetas para llenar todos los espacios
  const jumps = [1, 2, 1];
  const statePos = cardsLength % states.length;
  const blockPos = Math.trunc(cardsLength / states.length);

  let aux = 0,
    cant = 0;

  return states[statePos].map((el, i) => {
    cant = el + jumps[i] * blockPos;
    aux += cant;
    return [aux - cant, aux];
  });
};

export { generateDistribution };
