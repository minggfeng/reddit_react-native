import actions from './actions/index.js';

const roundNumber = (num) => {
  let count = 0;
  let i = num;

  while (i >= 10) {
    count ++;
    i = i / 10;
  }

  let divisor = 100 / (10 ** count);
  let result = Math.round(num * divisor)/divisor;

  switch(count) {
    case 2:
      return result;
    case 1:
      return Number.isInteger(result) ? `${result}.0` : result;
    default:
      return Number.isInteger(result * 10) ? `${result}0` : result;
  }
};

export default {
  redditUrl: "https://www.reddit.com/.json",
  mapStateToProps: state => {
    return {
      data: state.data,
      refreshing: state.refreshing,
      selected: state.selected
    }
  },
  mapDispatchToProps: dispatch => {
    return {
      fetchData: url => dispatch(actions.data(url)),
      select: post => dispatch(actions.select(post))
    }
  },
  convertNum: num => {
    let letter;
    let count = 0;
    let i = num;

    while (i > 1000 && num > 9999) {
      count++;
      i = i / 1000;
    }

    switch(count) {
      case 4:
        letter = "t"
      case 3:
        letter = "b";
        break;
      case 2:
        letter = "m";
        break;
      case 1: 
        letter = "k";
        break;
      default:
        break;
    };
    
    return letter ? `${roundNumber(i)}${letter}` : num;
  }
}
