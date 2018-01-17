import React, { Component } from 'react';
import classes from './Feedback.css';
import axios from 'axios';
class feedback extends Component{
    state = {
        feedback: ''
    };
    sendFeedbackHandler = () => {
        const data = {
            Msg: this.state.feedback
        };
        axios.post('https://whatoeat-46f95.firebaseio.com/msg.json',data)
            .then(res => {
                alert("派派已成功接受٩٩꒰｡•◡•｡꒱۶")
            })
            .catch(err => {
                console.log("| ´ʖ̼`|网络故障。。。QAQ");
            });
    };
    render(){
        return(
            <div className={classes.Feedback}>
                <div className="form-group">
                    <textarea 
                        className="form-control" 
                        id="feedbackValue" 
                        rows="3" 
                        placeholder="给派派留言" 
                        onChange={(event => this.setState({feedback:event.target.value}))}>
                    </textarea>
                </div>
                <button className="btn btn-danger" onClick={this.sendFeedbackHandler}>发射小心心</button>
            </div>
        );
    };
};
export default feedback;