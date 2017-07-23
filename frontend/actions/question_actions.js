import * as APIUtil from '../util/question_api_util';
import { receiveErrors, clearErrors } from './error_actions';
import { normalize } from 'normalizr';
export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_SINGLE_QUESTION = 'RECEIVE_SINGLE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const RECEIVE_SEARCHED_QUESTIONS = 'RECEIVE_SEARCHED_QUESTIONS';

export const receiveAllQuestions = questions => {
  // console.log(questions);
  return {
    type: RECEIVE_ALL_QUESTIONS,
    questions
  };
};

export const receiveSingleQuestion = question => ({
  type: RECEIVE_SINGLE_QUESTION,
  question
});

export const removeQuestion = question => ({
  type: REMOVE_QUESTION,
  question
})

export const receiveSearchedQuestions = questions => {
  console.log(questions)  
  console.log({
  type: RECEIVE_SEARCHED_QUESTIONS,
  searchedQuestions: questions
  })  
  return(
  {
  type: RECEIVE_SEARCHED_QUESTIONS,
  searchedQuestions: questions
  })
};

export const requestAllQuestions = () => dispatch => {
  // console.log('actions');
  return APIUtil.fetchAllQuestions().then(
    ({questions}) => {
      // console.log(questions);
      return dispatch(receiveAllQuestions(questions));
    }, error => console.log(error)
  );

};

export const requestSingleQuestion = id => dispatch => (
  APIUtil.fetchSingleQuestion(id).then(
    ({question, answers}) => {
      console.log(question);
      console.log(answers);
      dispatch(receiveSingleQuestion(question));
    },errors => dispatch(receiveErrors(errors)))
)

export const createQuestion = question => dispatch => (
  APIUtil.createQuestion(question)
  .then(({question}) => {
    dispatch(receiveSingleQuestion(question));
    dispatch(clearErrors())
  },errors => dispatch(receiveErrors(errors.responseJSON))
))

export const updateQuestion = question => dispatch => (
  APIUtil.updateQuestion(question)
  .then(question => dispatch(receiveSingleQuestion(question)))
);

export const deleteQuestion = question => dispatch => (
  APIUtil.deleteQuestion(question).then(question => dispatch(removeQuestion(question)))
);

export const searchQuestions = query => dispatch => (
  APIUtil.searchQuestions(query).then(({questions}) => dispatch(receiveSearchedQuestions(questions)))
);
