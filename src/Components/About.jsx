import React from "react";
import { Outlet } from "react-router-dom";
import {  Typography } from "antd";
import { Layout } from "antd";
import {Navbar} from "./Navbar";


export const About =() => {
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
                  <p className="paragraph">Welcome to our Learning Management System (LMS). We're dedicated to providing high-quality online learning solutions that help our users achieve their<br/>
                    educational goals.Our LMS was created with the needs of both learners and educators in mind. We understand that learning is an ongoing process, and we<br/> 
                    aim to make it as convenient and effective as possible. Our platform is designed to be user-friendly, intuitive, and customizable, so that every user can<br/>
                    have an optimal learning experience.Our team of experts has years of experience in the field of education and technology. We've worked hard to develop an<br/> 
                    LMS that not only meets the current needs of our users, but is also adaptable to changing trends and technologies. We believe that learning should be a<br/> 
                    lifelong pursuit, and our platform is built to support that belief.At our core, we are committed to empowering learners and educators alike. Our platform<br/> 
                    offers a variety of tools and resources to help learners achieve their goals, and provides educators with the tools they need to create engaging and<br/> 
                    effective online courses. We believe that education is the key to a better future, and we're proud to be a part of that journey.Thank you for choosing our<br/>
                    LMS. We look forward to helping you achieve your educational goals, and to being a part of your learning journey.</p>
                </Typography>
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
