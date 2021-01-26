function Result(sum, fristNumumber, operators, SecondNumber) {
    switch (operators) {
      case "+":
        sum(parseInt(SecondNumber) + parseInt(fristNumumber));
        break;
      case "-":
        sum(parseInt(SecondNumber) - parseInt(fristNumumber));
        break;
      case "*":
        sum(parseInt(SecondNumber) * parseInt(fristNumumber));
        break;
      case "/":
        sum(parseInt(SecondNumber) / parseInt(fristNumumber));
        break;
        default:
        break;
    }
    return sum;
  }
  export default Result;
  