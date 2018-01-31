function produceDrivingRange(blockRange) {
    return function true_of_false (value1, value2) {
        if ((parseInt(value2) - parseInt(value1)) <= blockRange) {
            return `within range by ${blockRange - (parseInt(value2) - parseInt(value1))}`;
        } else {
            return `${(parseInt(value2) - parseInt(value1)) - blockRange} blocks out of range`;
        };
    };
};

function produceTipCalculator(percentTip) {
  return function newfunction (num) {
    return num * percentTip;
  };
};
