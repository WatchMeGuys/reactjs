import React, { Component } from 'react';
import Pagination from './Pagination';
import TodoItem from './TodoItem';
document.body.style = 'background: linear-gradient(to right ,#000000,#800000,#000000) ';

const styles = {
    formStyle: {
        position: 'relative',
        margin: '2px'
    },

    input: {
        width: '777px',
        height: '40px',
        background: '#800000',
        color:'white',
    },

    add: {
        position: 'absolute',
        height: '38px',
        width: '72px',
        margin: '1px'
    },

    container: {
        position: 'relative',
        marginLeft: '100px',
    },

    tip: {
        position: 'relative',
        margin: '20px',
        left: '30%'
    },
    pgnum: {
        position: 'relative',
        height: '38px',
        width: '100px',
        margin: '1px'
    }
};

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            buff:[],
            inputValue: '',
            currentPage: 1,
            todosPerPage: 10,
            newPage:1
        };
        this.onCheckedTodo = this.onCheckedTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.setCurrentPage = this.setCurrentPage.bind(this);
    }

    onCheckedTodo(id) {
        let todos = this.state.todos.map((value) => {
            if (value.id === id) {
                value.complete = !value.complete;
            }
            return value;
        })
        this.setState({ todos });
    }

    addTodo(event) {
        event.preventDefault();
        if (this.state.inputValue <= 0) {
            alert('Заполните значение');
        }
        else {
         this.state.buff=[{
                title: this.state.inputValue,
                id: Math.floor(Math.random() * 1000),
                complete: false
            },
            ];
            let todos=this.state.buff.concat(this.state.todos);
            this.setState({ todos })
        }
    }

    deleteTodo(id) {
        let todos = this.state.todos.filter(val => {
            return val.id !== id;
        })
        this.setState({ todos: todos });
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(res => this.setState({ todos: res }));
    }

    setCurrentPage(a) {
        this.setState({ currentPage: a });
    }


    render() 
    {
        const { todos } = this.state;
        const lastTodoIndex = this.state.currentPage * this.state.todosPerPage;
        const firstTodoIndex = lastTodoIndex - this.state.todosPerPage;
        const currentTodos = todos.slice(firstTodoIndex, lastTodoIndex);

if(this.state.currentPage<=0)
                    {
                     alert('Эта страница самая первая!');
                     this.state.currentPage=1;
                    }
 if(this.state.currentPage >  Math.ceil(todos.length/this.state.todosPerPage)&&this.state.currentPage!=1&&this.state.currentPage!=0)
                    {
                      alert('Эта страница самая Последняя!');
                     this.state.currentPage=Math.ceil(todos.length/this.state.todosPerPage);  
                    }
        return (
            <div className="container row" style={styles.container}>
                <ul className="list-group">
                    <form style={styles.formStyle} onSubmit={this.addTodo}>
                        <input style={styles.input} placeholder='type pls...' onChange={(event) => { this.setState({ inputValue: event.target.value }) }} />
                        <button style={styles.add} className="btn btn-outline-danger" type="submit">Add</button>
                    </form>
                    {currentTodos.map((val) => {
                        return <TodoItem todo={val} key={val.id} checked={this.onCheckedTodo} deleteTodo={this.deleteTodo} />;
                    })}

                    <Pagination todosPerPage={this.state.todosPerPage} i={this.state.newPage + this.state.currentPage
                    } j={this.state.currentPage-this.state.newPage} totalTodos={this.state.todos.length} setCurrentPage={this.setCurrentPage} />

                    <button style={styles.pgnum} className="btn btn-dark" type="submit">{"Page: " + this.state.currentPage}</button>
                </ul>
            </div>
               );
    }
}