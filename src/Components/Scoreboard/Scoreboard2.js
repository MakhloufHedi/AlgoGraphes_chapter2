import React, { Component } from 'react';
import { Button,Table } from 'reactstrap';
// import ReactPaginate from 'react-paginate';

import axios from 'axios';
// import jwtDecode from 'jwt-decode';

class Scoreboardd extends Component {

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
    this.sortFunction = this.sortFunction.bind(this)
  }

  componentDidMount() {
    this.getScores();

  }

  getScores() {
    axios.get(`http://localhost:8000/api/info`).then(response => {
    let a = response.data.data;
    a.sort(this.sortFunction);  
    this.setState({ Scores: a })
      // var tdata = response.data['hydra:member'];
      // var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
      // this.setState({
      //     pageCount: Math.ceil(tdata.length / this.state.perPage),
      //     orgtableData: tdata,
      //     tableData: slice
      // })
      console.log(response.data.data)
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
   sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}
  render() {


    return (
      <Table dark style={{width:"1200px",marginTop:"-400px"}}>
        <thead>
          <tr>
            <th>
              Nom
            </th>
            <th>
              Prenom
            </th>
            <th>
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.Scores.map((Score, i) =>          
            <tr class="table-light" key={Score.id}>
              <td>{Score.nom}</td>
              <td>{Score.prenom}</td>
              <td>{Score.score}</td>
            </tr> )}
        </tbody>
      </Table>
    )
  }
}

export default Scoreboardd;