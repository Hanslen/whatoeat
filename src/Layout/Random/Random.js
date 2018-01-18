import React, { Component } from 'react';
import queryString from 'query-string';
import axios from '../../axios';
import Spinner from '../Spinner/Spinner';
import classes from './Random.css';

class random extends Component{
    state = {
        choices: null,
        selecting: true,
        choice: null,
        foodFre: null,
        foodSkip: null
    };
    componentWillMount(){
        let params = queryString.parse(this.props.location.search);
        axios.get(params.choice+'.json')
            .then(res => {
                this.setState({choices: res.data});
                this.generateChoiceHanlder();
                setTimeout(() => {
                    this.setState({selecting: false});
                }, 0);
            })
            .catch(err => {
                alert("数据库好像还没有这个选项0.0");
                this.props.history.push('/');
                this.setState({selecting: false});
            });
    }

    generateChoiceHanlder = () => {
        let rand = Math.floor(Math.random()*Object.keys(this.state.choices).length);
        Object.keys(this.state.choices).map((ch,i) => {
            if(rand == i){
                this.setState({choice: ch});
                return ch;
            }
        });
    }

    confirmFoodHandler = () => {
        if(this.state.foodFre){
            console.log("不用pulling啦直接random");
            let tmpData = this.state.foodFre;
            tmpData[this.state.choice] += 1;
            this.setState({foodFre: tmpData});
            axios.patch('/foodFre.json', this.state.foodFre).then(res => {
                alert("成功记录！快去次饭饭吧(虎摸");
            }).catch(err => {
                alert("网络出错了。。。。你先去吃饭吧【可以手动联系客服派...Error code是(记得截图):"+err);
            });
        }
        else{
            console.log("Pulling from foodFre.json");
            axios.get('/foodFre.json').then(res => {
                let tmpData = res.data;
                tmpData[this.state.choice] += 1;
                this.setState({foodFre:tmpData});
                axios.patch('/foodFre.json', this.state.foodFre).then(res => {
                    alert("成功记录！快去次饭饭吧(虎摸");
                }).catch(err => {
                    alert("网络出错了。。。。你先去吃饭吧【可以手动联系客服派...Error code是(记得截图):"+err);
                });
            }).catch(err => {
                alert("网络出错了。。。。你先去吃饭吧【可以手动联系客服派...Error code是(记得截图):"+err);
            });
        }
    }

    skipChoiceHandler = () => {
        if(this.state.foodSkip){
            console.log("不用pulling啦直接random");
            let tmpData = this.state.foodSkip;
            tmpData[this.state.choice] += 1;
            this.setState({foodSkip: tmpData});
            axios.patch('/foodSkip.json', this.state.foodSkip).then(res => {
                alert("哼!Random了居然又不喜欢!只能再给你Random了QAQ");
            }).catch(err => {
                alert("网络出错了。。。。Error code是(记得截图):"+err);
            });
        }
        else{
            console.log("Pulling from foodSkip.json");
            axios.get('/foodSkip.json').then(res => {
                let tmpData = res.data;
                tmpData[this.state.choice] += 1;
                this.setState({foodSkip:tmpData});
                axios.patch('/foodSkip.json', this.state.foodSkip).then(res => {
                    alert("哼!Random了居然又不喜欢!只能再给你Random了QAQ(有可能还是Random到这个：）)");
                }).catch(err => {
                    alert("网络出错了。。。。Error code是(记得截图):"+err);
                });
            }).catch(err => {
                alert("网络出错了。。。。Error code是(记得截图):"+err);
            });  
        }
        this.generateChoiceHanlder();
    }


    render(){
        return (
            <div>
                {this.state.selecting?
                <Spinner/>:
                <div className={classes.choice}>
                    <h1>{this.state.choice}</h1>
                    <p>{this.state.choices[this.state.choice]}</p>
                    <div className={classes.buttonbox}>
                        <button 
                            className="btn btn-danger btn-lg" 
                            style={{position: 'absolute',left:'20%'}}
                            onClick={this.confirmFoodHandler}
                            >好的</button>
                        <button className="btn btn-warning btn-lg" style={{position:'absolute',right:'20%'}} onClick={this.skipChoiceHandler}>再来</button>
                    </div>
                </div>
                }
            </div>
        );
    }
}
export default random;