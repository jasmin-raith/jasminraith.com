import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function Home() {
  const lila = "#A0357E";
  const yellow = "#F5D000";
  const pink = "#F400A8";
  const blue = "#00EEF5";
  const green = "#3B7475";

  
  const backgroundColors = [yellow, pink, blue, green];

  const projectPreviews: number[] = [1, 2, 3, 4, 5];
  const [isMd] = useState(window.innerWidth >= 768);


  return (
    <>
      {/* Header */}
      
      <div style={{ backgroundColor: lila }} className="fullscreen">
      <Container>
          <Row style={{height: '90vh'}}>
            <Col sm={12} md={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '100px'}}>
              <p style={{ color: blue, fontSize: '2rem' }}>Junior</p>
              <h1>
                <p style={{ color: blue, fontSize: '4rem' }}>Webentwicklerin</p>
                <p style={{ color: "white", fontSize: '2rem' }}>Angular/ React</p>
              </h1>
            <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <Button style={{ backgroundColor: blue, color: "black", borderColor: blue, width: '300px', fontSize: '1rem' }} variant="primary" size="lg">LinkedIn</Button>{' '}
              <Button style={{ color: blue, textDecoration: 'none', width: '300px', fontSize: '1rem' }} variant="link" size="lg"><b>GitHub</b></Button>
            </Col>
            </Col>
            <Col sm={12} md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img style={{ width: "85%", paddingTop: isMd ? '70px' : '0px' }} src="/assets/img/Jasmin.png" />
            </Col>
          </Row>
          <Row style={{height: '10vh'}}>
            <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: blue, fontSize: '1rem' }}>Meine Projekte</p>
              <img src="/assets/img/arrow.svg" />
            </Col>
          </Row>
        </Container>
      </div>
      {/* Project Preview */}
      {projectPreviews.map((project, index) => (
        <div
          key={index}
          style={{
            backgroundColor: backgroundColors[index % backgroundColors.length],
          }}
          className="fullscreen"
        >
          Test {project}
        </div>
      ))}
    </>
  );
}

export default Home;
