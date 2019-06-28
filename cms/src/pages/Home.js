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

          <p className="mt-4 ">In the two-semester long Senior Design program at UCF, Computer Science students are tasked with using the skills they have learned to solve a realistic and meaningful problem. Professor Mark Heinrich is seeking companies with a substantial software design challenge to propose a scope of work for student teams to tackle. The proposed project should be a substantial piece of work appropriate for a student team to design and implement over the program of roughly eight months.</p>

        </Jumbotron>
      </Page>
    </>
  }
}

export default Home;