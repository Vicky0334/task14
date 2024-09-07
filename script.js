const divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {
      if (num2 === 0) {
        reject("Error: Division by zero is not allowed.");
      }
       else {
        const result = num1 / num2;
        resolve(result);
      }
    });
  };

  
  const testDivision = () => {
    const cases = [
      { num1: 10, num2: 2 },
      { num1: 12, num2: 3 },
      { num1: 8, num2: 0 },  
      { num1: 18, num2: 6 },
      { num1: 30, num2: 0 },  
    ];
  
    cases.forEach(({ num1, num2 }) => {
      divideNumbers(num1, num2)
        .then((result )=> {
            console.log(`Dividing ${num1} by ${num2}...`);
            console.log(`Result: ${result}`)})
        .catch((error) => {
            console.log(`Dividing ${num1} by ${num2}...`);
            console.log(error)});
    });
  };
  testDivision();
  