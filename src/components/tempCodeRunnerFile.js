handleEqualClick = () => {
  const { displayValue, operator, storedValue } = this.state;
  const inputValue = parseFloat(displayValue);

  if (operator && !isNaN(storedValue)) {
    const result = this.calculate(storedValue, inputValue, operator);
    this.setState({
      displayValue: String(result),
      operator: null,
      waitingForOperand: true,
      storedValue: result,
    });
  }
};