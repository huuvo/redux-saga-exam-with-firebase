import React, { Component } from 'react';
import ListItem from './ListItem';
import { connect } from "react-redux";
import * as actions from "./../actions/index"

class ListToDo extends Component {
    constructor(){
        super();
        this.onChangeFilter = this.onChangeFilter.bind(this);
        this.state = {
            filter: ''
        }
    }

    componentDidMount(){
        this.props.requestApiListToDo();
    }

    onChangeFilter(e){
        var value = e.target.value;
        this.setState({
            filter: value
        });
    }

    render() {
        var {listToDo} = this.props;
        var showList = listToDo.map((list, index) => {
            return (
                <ListItem 
                    key={index} 
                    indexItem={index} 
                    keyItem={list.key}
                    listItem={list.name} 
                />
            )
        });
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>To-do</th>
                        <th className="text-right action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {showList}
                </tbody>
            </table>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        listToDo: state.listToDo,
        filter: state.filter
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        requestApiListToDo: () => {
            dispatch(actions.requestApiListToDo());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListToDo);
