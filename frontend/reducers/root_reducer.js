import {combineReducers} from 'redux';

import sessionReducer from './session_reducer';
import questionsReducer from './questions_reducer';
import questionReducer from './question_reducer';
import searchesReducer from './searches_reducer';
import answersReducer from './answers_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  // errors: errorsReducer,
  // question: questionReducer,
  questions: questionsReducer,
  searchedQuestions: searchesReducer,
  answers: answersReducer
  // ,
  // questions: questionsReducer
  // errors:[]
});

export default rootReducer;
