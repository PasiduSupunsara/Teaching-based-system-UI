import React from "react";
import { Outlet } from "react-router-dom";
import { Typography ,Layout ,Card} from "antd";
import {Navbar} from "./Navbar";



export const Home =() => {
  return (
    <Layout>
      <Layout.Header>
        <Navbar />
      </Layout.Header>
      <Layout.Content>
        <div className="home">
          <section className="home">
            <div className="container">
              <div className="row">
                <Typography className="title">
                  <h1>WELLCOME TO OUR INSTITUTION </h1>
                  <p className="paragraph1">
                  Hello and welcome to our Learning Management System (LMS)! We're thrilled to have you here and excited to support your learning journey.<br/> 
                  Our LMS offers a wide range of courses and resources that you can access from anywhere and at any time. Whether you're looking to enhance<br/>  
                  your professional skills, explore new interests, or simply learn something new, we have something for you. Our platform is user-friendly<br/>  
                  and designed to make your learning experience as seamless and enjoyable as possible. If you have any questions or need assistance, please<br/>  
                  don't hesitate to reach out to our support team. Thank you for choosing our LMS, and we look forward to helping you achieve your learning goals!
                  </p>
                </Typography>
                <div className="home-card">
                    <Card title="Courses" className="dashboard-card">
                      <p>These are our all courses </p>
                    </Card>
                    <Card title="Latest Announcements" className="dashboard-card">
                      <p>Thiese are latest Announcements</p>
                    </Card>
                    <Card title="Upcoming events" className="dashboard-card">
                      <p>These are Upcoming events</p>
                    </Card>
                </div>
              </div>
            </div>
          </section>
          <div className="margin"></div>
          <Outlet />
        </div>
      </Layout.Content>
    </Layout>
  );
}
