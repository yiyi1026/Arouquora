import React from 'react'

class QuestionBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author_id: currentUser.id,
            // id: -1,
            title: '',
            body: '',
            topic_id: 1
        };

        this.handleQuestionFieldSubmit = this.handleQuestionFieldSubmit.bind(this);
        this.handleQuestionFieldUpdate = this.handleQuestionFieldUpdate.bind(this);
        this.handleSearchQuestions = this.handleSearchQuestions.bind(this);
    }
    
    handleQuestionFieldSubmit(e){
        e.preventDefault();
        this.props.createQuestion(this.state);
    }

    handleQuestionFieldUpdate(){
        return e => {
            this.setState({'title': e.target.value});
            if(e.target.value){
                this.handleSearchQuestions(e.target.value);
            }
        };
    }

    handleSearchQuestions(query){
        console.log('searching questions')
        this.props.searchQuestions(query);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.questions);
        // this.props.searchQuestions('que');
        // let id = parseInt(this.props.match.params.questionId);
        // let nextid = parseInt(nextProps.match.params.questionId);
        // if (id !== nextid){
        // this.props.requestSingleQuestion(nextid);
        // }else{
        // console.log(nextProps);
        // let question = nextProps.question[0];
        // console.log(question);
        // this.setState({title: question.title, body: question.body, id: question.id});
        // }
    }

    render(){        
        // console.log(this.props)
        // console.log(!!this.props.searchedQuestions)
        console.log(this.props);
        let searchedQuestionsForm = ''; 
        if(!!this.props.searchedQuestions){
            let searchedQuestions = this.props.searchedQuestions.map((question) => (
            <li key={question.id}><a href={"#/questions/"+ question.id } className="grey">{question.title}</a></li>)
            );
            searchedQuestionsForm = (
                <ul className="search_question_dropdown ">
                  {searchedQuestions}  
                </ul>
            );

        } else {
            searchedQuestionsForm = '';
        }
        return (
        <form className="navbar-form navbar-left dropdown">
            <div className="form-group">
            <input type="text" data-toggle="dropdown" onChange={this.handleQuestionFieldUpdate()} value={this.state.title} id="question_field" className="form-control dropdown-toggle" placeholder="Ask or Search Duora"/>
            
                {searchedQuestionsForm}
            </div>
            <button type="submit" className="btn btn-default" onClick={this.handleQuestionFieldSubmit}>Ask Question</button>
            
        </form>
        )
    }
}

export default QuestionBar