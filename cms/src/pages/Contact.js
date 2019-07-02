import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Page from '../components/Page';

import { Col, Container, Row } from 'reactstrap';


class Contact extends React.Component {

  copyToClipboard = text => {
    let selected = false;
    let element = document.createElement('textarea');
    element.value = text;
    element.setAttribute('readonly', '');
    element.style.position = 'absolute';
    element.style.left = '-9999px';
    document.body.appendChild(element);

    if (document.getSelection().rangeCount > 0)
      selected = document.getSelection().getRangeAt(0);

    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);

    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  }

  //document.querySelect('#heinrich-email').addEventListener('click', copyToClipboard);); 

  //copyEmailToClipboard = str => 

  render() {
    return <>
      <Page title="Dr. Mark Heinrich">

        <Container>
          <Row>
            <Col xs="auto">
              <FontAwesomeIcon icon="envelope" onClick={document.execCommand('copy')}/> heinrich@cs.ucf.edu
            </Col>
            <Col xs="auto">
              <FontAwesomeIcon icon="phone-alt" /> (407)-882-0138
            </Col>
            <Col xs="auto">
              <FontAwesomeIcon icon="building" /> HEC 433
            </Col>
            <Col xs="auto">
              <FontAwesomeIcon icon={['fab', 'google']} /> <a href="https://scholar.google.com/citations?user=ENsrFlsAAAAJ&hl=en&oi=ao">Google Scholar</a><br />
            </Col>
            <Col xs="auto">
              <FontAwesomeIcon icon="globe" /> <a href="http://csl.cs.ucf.edu/~heinrich/">ucf.edu/heinrich</a> <br />
            </Col>
          </Row>
        </Container>
       
          <br />
          <img src="../images/tortoise.jpg" alt="Dr. Heinrich with a tortoise"></img><br /><br />
          <p>Dr. Heinrich received his BS in Electrical Engineering and Computer Science (double major) from Duke University in 1991, where he graduated first in his class and summa cum laude. He earned his M.S. and Ph.D. in Electrical Engineering from Stanford University in 1993 and 1998, respectively. At Stanford while studying under John Hennessy, he was a principal designer of the FLASH multiprocessor, designed and evaluated several protocols for the machine and wrote its system-level simulator. His research interests include novel parallel computer architectures, data-intensive computing, energy-efficient architectures, and scalable web services.<br /><br />

          Dr. Heinrich was an Assistant Professor in ECE at Cornell University (1998-2002) and a co-founder of its Computer Systems Laboratory. He received the Cornell IEEE Teacher of the Year Award (1999) and a College of Engineering Teaching Award (2001). He was also the co-founder and Chief Architect of Flashbase, Inc. (1998-2000, acquired by DoubleClick in May 2000) specializing in automated sweepstakes and database-backed forms and tools for customer acquisition.<br /><br />

          Dr. Heinrich joined UCF CS in 2002 as an Associate Professor, founding its Computer Systems Lab. He became Director of the School of Computer Science in 2005 and after a merger with ECE, served as Associate Director of the School of EECS at UCF until 2007. From 2004-2011 he was also the co-founder and CTO of Phanfare, Inc., a premium online photo and video hosting solution. Phanfare was acquired by Carbonite in August 2011.<br /><br />

          Dr. Heinrich is the recipient of an NSF Graduate Fellowship, IBM T.J. Watson Scholarship, General Motors Scholarship, an NSF CAREER Award supporting novel research in data-intensive systems, and an IBM Faculty Award (2004). His scholarly publications have been cited more than 1600 times. He is a Senior Member of the IEEE and a regular member of the ACM. He is a member of Phi Beta Kappa, Tau Beta Pi, and Eta Kappa Nu, and is the faculty advisor for the UCF Geocaching Club.<br /><br /></p>
        
     
      </Page>
    </>
  }
}

export default Contact;