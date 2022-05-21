import React from "react";
import { Button, Form, Table } from "react-bootstrap";

// import Product from "../Pages/Product"

const Online = () => {
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
        <h5 style={{ fontWeight: 600, color: "blue" }}>Goto Online Class</h5>
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
          <span style={{ marginRight: 60 }}>Time&nbsp;Table:&nbsp;&nbsp;</span>
          <Form.Select size="md" style={{ width: "60%" }}>
            <option>Monday</option>
          </Form.Select>
        </div>
        <br />
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
          Your Monday Class Time Table
        </h5>
        <Table bordered size="sm">
          <thead>
            <tr>
              <th>Timming</th>
              <th>Name</th>
              <th>Class</th>
              <th>Join Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10:00 -11:00</td>
              <td>XYZ</td>
              <td>EVS</td>
              <td>Join</td>
            </tr>
            <tr>
              <td>10:00 -11:00</td>
              <td>XYZ</td>
              <td>EVS</td>
              <td>Join</td>
            </tr>
            <tr>
              <td>10:00 -11:00</td>
              <td>XYZ</td>
              <td>EVS</td>
              <td>Join</td>
            </tr>
            <tr>
              <td>10:00 -11:00</td>
              <td>XYZ</td>
              <td>EVS</td>
              <td>Join</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Online;
