import { connect } from 'react-redux';
import AnswerItem from './answer_item';
import {
  createAnswer,
  updateAnswer,
  deleteAnswer
} from '../../actions/answer_actions';

import {selectSingleAnswer } from '../../reducers/selectors';

const  mapStateToProps = (state) =>{
  const {session} = state;
  return {
    currentUser: session.currentUser ? session.currentUser : null,
    errors:[]

  };
};


const mapDispatchToProps = dispatch => ({
  updateAnswer: (answer) => dispatch(updateAnswer(answer)),
  deleteAnswer: (answer) => dispatch(deleteAnswer(answer))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerItem);
