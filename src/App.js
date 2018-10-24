import React, { Component } from 'react';
import ListToDo from './components/ListToDo';
import AddContent from './components/AddContent';

class App extends Component {
    render() {
        return (
            <div className="container mt-4">
                <h3>To-Do List</h3>
                <AddContent/>
                <div className="container-showlist">
                    <ListToDo/>
                </div>
            </div>
        );
    }
}

export default App;
