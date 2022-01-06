import Page from '../Components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
// import axios from 'axios';

// const tableTypes = ['', 'bordered', 'striped', 'hover'];
import {
    MdViewList,
    MdEditNote,
    MdApproval,
    MdDelete,
    MdCheckCircle,
} from 'react-icons/md';

class TablePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { //state is by default an object
            students: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3122/users/routeStudents', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                routeId: "61b300e24f0dc5136cf466d2",
            })
        })
            .then(res => {
                console.log(res)
                this.setState({ students: res.students }).then(profileState => {
                    console.log(JSON.stringify(this.state.students))
                }); //It sets the state asynchronously
            })
    }
    renderTableData() {
        return this.state.students.map((student, index) => {
           const { _id, first_name, last_name } = student //destructuring
           return (
              <tr key={_id}>
                 <td>{_id}</td>
                 <td>{first_name}</td>
                 <td>{last_name}</td>
              </tr>
           )
        })
     }
    renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
    render() {
        return (
            <Page>
                <Row>
                    <Col>
                        <Card className="mb-3">
                            <CardHeader>User Manager</CardHeader>
                            <CardBody>
                                <Table responsive>
                                <tr>{this.renderTableHeader()}</tr>
                                    {/* <thead>
                                        <tr className="table-primary">
                                            <th>S.no.</th>
                                            <th>User Image</th>
                                            <th>Email</th>
                                            <th>Name</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead> */}
                                    <tbody>
                                        {this.renderTableData()}
                                    </tbody>
                                    {/* <tbody>
                                        <tr className="table-secondary">
                                            <th scope="row">1</th>
                                            <td>this</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td><MdViewList style={{ cursor: "pointer", margin: "3px" }}  />
                                                <MdEditNote />
                                                <MdApproval />
                                                <MdDelete />
                                                <MdCheckCircle />
                                            </td>
                                        </tr>
                                        <tr className="table-success">
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr className="table-warning">
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody> */}
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Page>
        );
    }
}
// const TablePage = () => {

//     return (

//     );
// };

export default TablePage;
