const fibonacci = (prev = 1, curr = 1) => {
  console.log("x", prev);
  if (curr > 100) {
    return;
  }
  return fibonacci(curr, prev + curr);
}

fibonacci(0, 1);
