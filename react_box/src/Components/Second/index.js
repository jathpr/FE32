import { SecondComponent } from './Second';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch({ type: 'INCREMENT' });
  },
});

export const Second = connect(mapStateToProps, mapDispatchToProps)(SecondComponent);
