import React, { Component } from 'react';
import UserInfo from './UserInfo';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
document.body.style = 'background: linear-gradient(to right ,#000000,#800000,#000000) ';

const styles = {
    usersContainer: {

        position: 'absolute',
        width: '450px',
        marginTop: '50px',
        marginLeft: '15px',
        fontSize: '25px',
        colorLink: 'red',
        left: '27%'
    },
    infoContainer: {
        background: '#9A000B',
        position: 'absolute',
        marginTop: '40px',
        left: '5%',
        width: '450px',
        height: '550px',
        color: 'white',
        padding: '.8rem 4rem',
    }
};

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
        };
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => this.setState({ user: res }));
    }

    render() {
        return (
            <Router>
                <div className="main">
                    <div style={styles.usersContainer} className="container row">

                        <ul style={styles.usersContainer} class="list-group">
                            {this.state.user.map((val) => {
                                return (<Link to={`/users/id/${val.id}`} > {val.username} </Link>);
                            })}
                        </ul>
                    </div>
                    <div style={styles.infoContainer} className="info">
                        <Route path="/users/id/:uID"
                            render={({ match }) => (
                                <UserInfo user={this.state.user.find((u) => u.id == match.params.uID)} />
                            )}
                        />
                    </div>
                </div>
            </Router>
        )
    }
}