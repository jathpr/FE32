import { FiveComponent } from './FiveComponent';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    counter: state.mult.counter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  multiply: () => {
    dispatch({ type: 'MULTIPLY' });
  },
});

export const Five = connect(mapStateToProps, mapDispatchToProps)(FiveComponent);
