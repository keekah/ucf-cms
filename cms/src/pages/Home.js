import React from 'react';
import { UncontrolledCarousel, Jumbotron } from 'reactstrap';

import Page from '../components/Page';


const carouselImages = [
    {
      src: 'http://www.eecs.ucf.edu/cssd/img/featured/limbitlessarmtracking.jpg',
      altText: 'Virtual Reality Training Demo',
      header: 'Florida Power & Light Showcase',
      caption: 'Virtual Reality Training Demo'
    },
    {
      src: '../images/showcase2.jpg',
      altText: 'Limbitless 2D/3D Arm Tracking',
      header: 'Limbitless 2D/3D Arm Tracking',
    },
    {
      src: '../images/showcase3.jpg',
      altText: 'FL Power & Light Award',
      header: 'Florida Power & Light Award',
      caption: 'Senior Design Team Wins State Award'
    },
  ];

class Home extends React.Component {


  render() {
    return <>
      <Page>
        <Jumbotron className="text-center">
          <h1>UCF Computer Science Senior Design</h1>
          <em>Design, Entrepreneurship, Fun, Teamwork, Leadership</em>
          <UncontrolledCarousel items={carouselImages} className="mt-4" />
          <p className="mt-4 text-left">In the two-semester long Senior Design program at UCF, Computer Science students are tasked with using the skills they have learned to solve a realistic and meaningful problem. Professor Mark Heinrich is seeking companies with a substantial software design challenge to propose a scope of work for student teams to tackle. The proposed project should be a substantial piece of work appropriate for a student team to design and implement over the program of roughly eight months.</p>
        </Jumbotron>

       <h2>How It Works</h2>
       <ul>
         <li>Interested companies should submit a completed Proposed Project Description Form to Dr. Mark Heinrich at least one week prior to the beginning of the Fall or Spring semester in which the project will start.</li>
         <li>If the proposal is accepted, the company will be invited to appear in class and deliver a 15-minute pitch of their project to the student teams (not all proposals may be selected).</li>
         <li>If selected by a student team, the company will provide limited guidance and mentoring to the student teams as they work to solve the challenge over two semesters consisting of two courses.</li>
       </ul>

      <h2>Project Timeline</h2>
      <p>During the first semester, students choose their projects and carry out the design of the project (determining objectives, tasks, task assignment to group members, programming language and technology determination, researching and solving design problems, documenting related and prior work, etc.).</p>

      <ul>
        <li>Final Design Document (at least 30 pages per team member) is submitted at end of semester.</li>
      </ul>

      <p>During the second semester, the primary task is project implementation.</p>
      <ul> <li>Formal in-class design review presentation is held two months into the second semester, where sponsors are encouraged to attend.</li></ul>
      At the end of the semester, student teams make a final presentation to a faculty panel and their sponsor, and participate in the UCF CECS Senior Design Day.
      <ul><li>Final project documentation is due and a Web page for the project is launched.</li></ul>
      
      </Page>
    </>
  }
}

export default Home;