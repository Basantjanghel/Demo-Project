import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

// import Product from "../Pages/Product"

const Home = () => {
  const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          margin: "50px 0px 20px 0px",
          border: "1px solid blue",
          padding: 5,
        }}
      >
        <h5 style={{ fontWeight: 600, color: "blue" }}>
          Upload Time Table form below
        </h5>
      </div>
      <div
        style={{
          width: "70%",
          background: "#f6f6f6",
          padding: 40,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ marginRight: 60 }}>Select&nbsp;Day:&nbsp;&nbsp;</span>
          <Form.Select size="md" style={{ width: "60%" }}>
            <option>Default select</option>
          </Form.Select>
        </div>
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 60,
          }}
        >
          <span style={{ marginRight: 60 }}>Select&nbsp;Class:</span>
          <Form.Select size="md" style={{ width: "60%" }}>
            <option>Default select</option>
          </Form.Select>
        </div>
        <div
          style={{
            position: "absolute",
            right: 40,
            bottom: 40,
          }}
        >
          <Button variant="success">Submit</Button>
        </div>
      </div>
      <div
        style={{
          width: "70%",
          background: "#f6f6f6",
          padding: 40,
          position: "relative",
        }}
      >
        <h5 style={{ textAlign: "center", marginBottom: 20 }}>
          Time Table Details
        </h5>
        <Table bordered size="sm">
          <thead>
            <tr>
              <th>Timming</th>
              <th>Teacher Id</th>
              <th>Teacher Name</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Select size="sm" style={{ width: "80%" }}>
                  <option>Default select</option>
                </Form.Select>
              </td>
              <td>
                <Form.Select size="sm" style={{ width: "80%" }}>
                  <option>Default select</option>
                </Form.Select>
              </td>
              <td>
                <Form.Control size="sm" type="text" />
              </td>
              <td>
                <Form.Control size="sm" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Select size="sm" style={{ width: "80%" }}>
                  <option>Default select</option>
                </Form.Select>
              </td>
              <td>
                <Form.Select size="sm" style={{ width: "80%" }}>
                  <option>Default select</option>
                </Form.Select>
              </td>
              <td>
                <Form.Control size="sm" type="text" />
              </td>
              <td>
                <Form.Control size="sm" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Select size="sm" style={{ width: "80%" }}>
                  <option>Default select</option>
                </Form.Select>
              </td>
              <td>
                <Form.Select size="sm" style={{ width: "80%" }}>
                  <option>Default select</option>
                </Form.Select>
              </td>
              <td>
                <Form.Control size="sm" type="text" />
              </td>
              <td>
                <Form.Control size="sm" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Select size="sm" style={{ width: "80%" }}>
                  <option>Default select</option>
                </Form.Select>
              </td>
              <td>
                <Form.Select size="sm" style={{ width: "80%" }}>
                  <option>Default select</option>
                </Form.Select>
              </td>
              <td>
                <Form.Control size="sm" type="text" />
              </td>
              <td>
                <Form.Control size="sm" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Select size="sm" style={{ width: "80%" }}>
                  <option>Default select</option>
                </Form.Select>
              </td>
              <td>
                <Form.Select size="sm" style={{ width: "80%" }}>
                  <option>Default select</option>
                </Form.Select>
              </td>
              <td>
                <Form.Control size="sm" type="text" />
              </td>
              <td>
                <Form.Control size="sm" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Select size="sm" style={{ width: "80%" }}>
                  <option>Default select</option>
                </Form.Select>
              </td>
              <td>
                <Form.Select size="sm" style={{ width: "80%" }}>
                  <option>Default select</option>
                </Form.Select>
              </td>
              <td>
                <Form.Control size="sm" type="text" />
              </td>
              <td>
                <Form.Control size="sm" type="text" />
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }} colSpan={2}>
                <Button variant="success">Refresh</Button>
              </td>
              <td style={{ textAlign: "center" }} colSpan={2}>
                <Button
                  variant="success"
                  onClick={() => history.push("/online")}
                >
                  Submit
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
