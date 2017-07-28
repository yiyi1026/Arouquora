import React from 'react';
// import {Link} from 'react-router-dom';
// import QuestionIndexContainer from '../question/question_index_container';
// import * as SESSIONUTIL from '../../util/session_api_util';
import { RingLoader } from 'react-spinners';
import QuestionIndexItem from '../question/question_index_item'
class TopicDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      id: '',
      loading: true

    };
  }

  componentDidMount() {
    let id = parseInt(this.props.match.params.topicId);
    // console.log(id);
    this.props.requestSingleTopic(id)
    // .then(setTimeout(() => this.setState({loading: false}), 100));
    .then(() => this.setState({loading: false}));
  }

  componentWillReceiveProps(nextProps) {
    let nextId = nextProps.match.params.topicId;
    let currId = this.props.match.params.topicId;
    if (nextId !== currId){
      this.props.requestSingleTopic(nextId).then(() => this.setState({loading: false}));
    }
  }

  render() {
    // console.log(this.props);
    if (this.state.loading ){
      return(<div className='sweet-loading'>
        <RingLoader
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>);
    }


      const topicId = this.props.currentTopic;
        const topic = this.props.topics.byId[topicId];
        const {questions} = topic;
        console.log(questions);
        const questionItems = questions.map(
          (question) =>
            (<QuestionIndexItem key={`indexquestions${question.id}`} question={question}/>)
        );

        let questions_html =
        (
          <div className='topicdetail'>
            <div>
              <div>
                <span>{topic.name}</span>
                <br/>
                {questionItems}
              </div>
            </div>
          </div>);

          return questions_html;
    // let {questions} = topic;

    // return (
    //   <div>
    //     <div className='container well'>
    //
    //       <div className="row all-margin-10">
    //         <div className="">
    //           <a className="black bold" href={'#/questions/' + question.id} target="">
    //             <span className="">{question.title}</span>
    //           </a>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="">
    //           <a href="#"><img className="img-circle pull-left" src={avatar} width="50" height="50"/></a>
    //         </div>
    //         <div className="left-margin-60">
    //           <div className="">
    //             <span>
    //               <a className="user black" href="#">{username}</a>
    //             </span>
    //             <span >,
    //             </span>
    //             <span>{description}</span>
    //           </div>
    //           <div className="">
    //             <span>
    //               <a className="grey" href="#" target="">Asked {timeAgo}</a>
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //
    //       <div className="row">
    //         <div className="all-margin-10">
    //           <span className="rendered_qtext">
    //             <p>{question.body}</p>
    //           </span>
    //         </div>
    //       </div>
    //
    //       <div className="row">
    //         <div className=" accordion-heading">
    //           <span className="left-margin-10  ">
    //             <a className="Answer accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href={"#collapse" + question.id} role="button">
    //               <span className="glyphicon glyphicon-pencil"></span>Answer
    //             </a>
    //           </span>
    //           <span className="left-margin-10">
    //             <a className="Upvote" href="#">
    //               <span>Upvote</span>
    //               <span className="divider-vertical-15px"></span>
    //               <span className=" ">95</span>
    //             </a>
    //           </span>
    //           <span className="left-margin-10">
    //             <a className="Downvote grey" href="#">
    //               <span className=" ">Downvote</span>
    //             </a>
    //           </span>
    //         </div>
    //         <div id={"collapse" + question.id} className="accordion-body collapse">
    //           <AnswerFormContainer question={question}/>
    //         </div>
    //
    //       </div>
    //
    //
    //
    //     </div>
    //     {answers_html}
    //
    //   </div>
    // );
  }
}

export default TopicDetail;
