import actions from './actions/index.js';

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
    let divisor;
    let round;
    if (num >= 1000000000 && num < 1000000000000) {
      divisor = Math.round(num/100000000)/10;
      round = divisor - Math.floor(divisor) !== 0 ? divisor : `${divisor}.0`;
      return `${round}b`
    }
    if (num >= 1000000 && num < 1000000000) {
      divisor = Math.round(num/100000)/10;
      round = divisor - Math.floor(divisor) !== 0 ? divisor : `${divisor}.0`;
      return `${round}m`
    }
    if (num >= 10000 && num < 1000000) {
      divisor = Math.round(num/100)/10;
      round = divisor - Math.floor(divisor) !== 0 ? divisor : `${divisor}.0`;
      return `${round}k`;
    } else {
      return num;
    }
  }
}
