const calculateTax = (income: number, taxYear = 2022): number => {

  if (taxYear < 2022)
    return income * 1.2;
  return -1;
}

calculateTax(10_000)