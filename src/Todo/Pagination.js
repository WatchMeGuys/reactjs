import React, { Component } from 'react';

const styles = {
    pagesNum: {
        position: 'relative',
        margin: '6px',
        left: '10%',
        color: 'white',
        fontSize: '16px',
        marginTop: '0px'
    },
    pagesForward: {
        position: 'relative',
        margin: '0px',
        left: '0%',
        color: 'red',
        fontSize: '16px',
        marginTop: '0px',
    },
    pagesBack: {
        position: 'relative',
        margin: '0px',
        left: '0%',
        color: 'red',
        fontSize: '16px',
        marginTop: '0px'
    },
};

export default class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    render()
     {
        const { todosPerPage, totalTodos, setCurrentPage,i,j } = this.props;
        const pageNumbersForward = [];
        const pageNumbersBack=[];
        const pageNumbers=[];
        
      /*  let i=1;*/
      Math.abs(j);
        pageNumbersForward.push(i);
        pageNumbersBack.push(j);

        for (let k = 1; k <= Math.ceil(totalTodos / todosPerPage); k++) 
            {
            pageNumbers.push(k);
            }

        return (
            <div>
                <ul className="pagination">

                    {pageNumbersForward.map(number => {
                        return (
                            <li className="page-item">
                                <a style={styles.pagesForward}  className="btn btn-outline-danger" onClick={() => setCurrentPage(number)} href="#">{"Вперед"}</a>                             
                            </li>);

                    })}
                    {pageNumbersBack.map(number => {
                        return (
                            <li className="page-item">
                                <a style={styles.pagesBack} className="btn btn-outline-danger"  onClick={() => setCurrentPage(number)} href="#">{"Назад"}</a>                             
                            </li>);

                    })}
                    {pageNumbers.map(number => {
                        return (
                            <li className="page-item">
                                <a style={styles.pagesNum}  className="btn btn-dark" onClick={() => setCurrentPage(number)} href="#">{number}</a>                             
                            </li>);

                    })}

                </ul>
                </div>
        );
    }
}