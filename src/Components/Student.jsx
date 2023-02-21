import React from "react";
import { Table,Layout} from "antd";
import "./Dashboard";
import { Navbar } from "./Navbar";




const columns = [
  {
    title: "Course",
    dataIndex: "",
    key: "",
  },
  {
    title: "Instructor",
    dataIndex: "",
    key: "",
  },
  {
    title: "Assignments",
    dataIndex: "",
    key: "",
  },
  {
    title: "Current Grade",
    dataIndex: "",
    key: "",
  },
];

export const Student = () => {
  return (
    <Layout>
      <Layout.Header>
        <Navbar />
      </Layout.Header>
      <Layout.Content>
        <div style={{ padding: "50px" }}>
          <h2 style={{ color: "#1eb2a6" }}>Overview</h2>
          <Table
            style={{ borderBlockEndWidth: "5px", marginTop: 50 }}
            dataSource={""}
            columns={columns}
          />
        </div>
      </Layout.Content>
    </Layout>
  );
}