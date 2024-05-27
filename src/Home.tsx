import { Col, Container, Row } from "react-bootstrap";

function Home() {
  const lila = "#A0357E";
  const yellow = "#F5D000";
  const pink = "#F400A8";
  const blue = "#00EEF5";
  const green = "#3B7475";

  
  const backgroundColors = [yellow, pink, blue, green];

  const projectPreviews: number[] = [1, 2, 3, 4, 5];

  return (
    <>
      {/* Header */}
      
      <div style={{ backgroundColor: lila }} className="fullscreen">
      <Container>
          <Row style={{height: '80vh'}}>
            <Col xs={12} md={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <p style={{ color: blue, fontSize: 54 }}>Junior</p>
              <h1>
                <p style={{ color: blue, fontSize: 108 }}>Webentwicklerin</p>
                <p style={{ color: "white", fontSize: 108 }}>Angular/ React</p>
              </h1>
            </Col>
            <Col xs={12} md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img style={{ width: "85%", paddingTop: '70px' }} src="/assets/img/Jasmin.png" />
            </Col>
          </Row>
          <Row style={{height: '20vh'}}>
            <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: blue, fontSize: 27 }}>Meine Projekte</p>
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
