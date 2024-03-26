// function that can be infinitely add numbers

function infiniteAdd(number) {
  return (number2) => {
    if (!number2) return number;
    return infiniteAdd(number + number2);
  };
}
