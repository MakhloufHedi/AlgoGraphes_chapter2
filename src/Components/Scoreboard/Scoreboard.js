import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

class Scoreboard extends Component {

    constructor() {
        super();
        this.state = {
            Scores: [],
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 5,
            currentPage: 0,
        };
        this.handlePageClick = this.handlePageClick.bind(this);

    }

    componentDidMount() {
        this.getSalles();

    }


    getScores() {
        axios.get(`http://localhost:8000/api/score`).then(response => {
            // this.setState({ Salles: response.data['hydra:member'] })
            var tdata = response.data['hydra:member'];
            var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
            this.setState({
                pageCount: Math.ceil(tdata.length / this.state.perPage),
                orgtableData: tdata,
                tableData: slice
            })
        })
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
        const data = this.state.orgtableData;

        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            tableData: slice
        })

    }



    render() {

        if (this.state.redirect) {
            // return (<Redirect to={'/dashboard'} />)
        }


        return (
            <div style={{ marginTop: 70 }}>

                <section className="row-section">

                    <div className="container">

                        {
                            <div className={'row'}>

                                <div className="col-md-10 offset-md-1 row-block" >
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Nom</th>
                                                <th scope="col">Prenom</th>
                                                <th scope="col">Score</th>
                                                <th scope="col">Time</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {this.state.tableData.map((Score, i) =>

                                                <tr class="table-light" key={Score.id}>
                                                    <td>{Score.nom}</td>
                                                    <td>{Score.prenom}</td>
                                                    <td>{Score.score}</td>
                                                    <td>{Score.temps}</td>
                                                </tr>)}

                                        </tbody>
                                    </table>
                                    {/* <ReactPaginate
                                        previousLabel={"🠔"}
                                        nextLabel={"🠖"}
                                        breakLabel={"..."}
                                        breakClassName={"break-me"}
                                        pageCount={this.state.pageCount}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={5}
                                        onPageChange={this.handlePageClick}
                                        containerClassName={"pagination"}
                                        subContainerClassName={"pages pagination"}
                                        activeClassName={"active"} /> */}

                                </div>
                            </div>
                        }
                    </div>
                </section>
            </div>
        )
    }
}

export default Scoreboard;