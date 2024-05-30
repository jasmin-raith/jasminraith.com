import { useState } from "react";
import { Button } from "react-bootstrap";

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
      <div>
          <div style={{height: '90vh', display:'flex', flexDirection: isMd ? 'row' : 'column', alignContent: 'flex-start', margin: isMd ? '0px 54px' : '0px 27px'}}>
            {/* Text und Buttons */}
            <div style={{ height: 'fit-content', display: 'flex', width: isMd ? '60%' : '100%', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden'}}>
              <p style={{ color: blue, fontSize: '2rem', marginTop:'100px' }}>Junior</p>
              <h1>
                <p style={{ color: blue, fontSize: '4rem', wordWrap: 'break-word', hyphens: 'auto'}} lang="en">Webentwicklerin</p>
                <p style={{ color: "white", fontSize: '2rem' }}>Angular/ React</p>
              </h1>
              <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
                <Button style={{ backgroundColor: blue, color: "black", borderColor: blue, width: '300px', fontSize: '1rem' }} variant="primary" size="lg">LinkedIn</Button>{' '}
                <Button style={{ color: blue, textDecoration: 'none', width: '300px', fontSize: '1rem' }} variant="link" size="lg"><b>GitHub</b></Button>
              </div>
            </div>
            {/* Bild */}
            <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}}>
              <img style={{ height: '100%', objectFit: 'contain', paddingTop: isMd ? '70px' : '20px', overflow: 'hidden' }} src="/assets/img/Schnupper.png" />
            </div>
          </div>
          <div style={{height: '10vh', display: 'flex', justifyContent: 'center'}}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: blue, fontSize: '1rem' }}>Meine Projekte</p>
              <img style={{ objectFit: 'cover' }} src="/assets/img/arrow.svg" />
            </div>
          </div>
        </div>
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
