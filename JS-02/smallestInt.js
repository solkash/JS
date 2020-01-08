class SmallestIntegerFinder {
  findSmallestInt(args) {
  let totalMin = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] < totalMin) totalMin = args[i];   
  }
  return totalMin;
  }
}