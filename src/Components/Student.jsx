import React from "react";
import { Table,Layout} from "antd";
import "./Dashboard";
import { Navbar } from "./Navbar";




const columns = [
  {
    title: "Subject",
    dataIndex: "",
    key: "",
  },
  {
    title: "Due Date",
    dataIndex: "",
    key: "",
  },
  {
    title: "Homework",
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