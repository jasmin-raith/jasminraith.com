import { useState } from "react";
import { Button } from "react-bootstrap";

function Home() {
  const lila = "#A0357E";
  const yellow = "#F5D000";
  const pink = "#F400A8";
  const blue = "#00EEF5";
  const green = "#3B7475";

  
  const backgroundColors = [yellow, pink, blue, green];
  const buttonColors = [pink, yellow, lila, blue];
  const buttonTextColors = ["white", lila, "white", green];
  const accentColor = [pink, yellow, lila, blue];
  const projectMadeWithCololors = [green, "white", "white", yellow];

  const projectPreviews: any[] = [
    {
      projectName: "Ring of fire",
      projectMadeWith: "Angular, Firebase, TypeScript",
      tryButtonText: "Jetzt spielen",
      mediaUrl: "https://ring-of-fire-tawny.vercel.app/",
      codeButtonText: "Code ansehen",
      codeUrl: "https://github.com/jasmin-raith/ring-of-fire",
      gifVideo: "https://github.com/jasmin-raith/media/blob/main/ring-of-fire/Ring%20of%20fire.gif?raw=true",
    },
    {
      projectName: "Katzenquiz",
      projectMadeWith: "JavaScript, HTML, CSS",
      tryButtonText: "Jetzt spielen",
      mediaUrl: "https://jasmin-raith.github.io/quiz-app/",
      codeButtonText: "Code ansehen",
      codeUrl: "https://github.com/jasmin-raith/quiz-app",
      gifVideo: "https://github.com/jasmin-raith/media/blob/main/katzenquiz/Katzenquiz.gif?raw=true",
    },
    {
      projectName: "Tic-Tac-Toe", 
      projectMadeWith: "JavaScript, HTML, CSS",
      tryButtonText: "Jetzt spielen",
      mediaUrl: "https://jasmin-raith.github.io/tic-tac-toe/",
      codeButtonText: "Code ansehen",
      codeUrl: "https://github.com/jasmin-raith/tic-tac-toe",
      gifVideo: "https://github.com/jasmin-raith/media/blob/main/tic-tac-toe/tic-tac-toe.gif?raw=true",
    },
    {
      projectName: "Lieferando-replica",
      projectMadeWith: "JavaScript, HTML, CSS",
      tryButtonText: "Jetzt ansehen",
      mediaUrl: "https://jasmin-raith.github.io/lieferando-replica/",
      codeButtonText: "Code ansehen",
      codeUrl: "https://github.com/jasmin-raith/lieferando-replica",
      gifVideo: "https://github.com/jasmin-raith/media/blob/main/lieferando/lieferando.gif?raw=true",
    }
  ];
  
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
            display: 'flex',
            alignItems: 'center',
          }}
          className="fullscreen"
        >
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', margin: '0px 54px'}}>
            <div style={{ width: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden', padding: '0px 54px'}}>
              <h2 style={{ color: accentColor[index % accentColor.length]}}>{project.projectName}</h2>
              <div>
                <p style={{ color: projectMadeWithCololors[index % projectMadeWithCololors.length]}}>Gemacht mit</p>
                <p style={{ width: '100%', color: projectMadeWithCololors[index % projectMadeWithCololors.length], fontSize: '1.5rem', overflow: 'hidden'}}>{project.projectMadeWith}</p>   
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
                <Button style={{ backgroundColor: buttonColors[index % buttonColors.length], borderColor: buttonColors[index % buttonColors.length], color: buttonTextColors[index % buttonTextColors.length], width: '300px', fontSize: '1rem' }} variant="primary" size="lg">{project.tryButtonText}</Button>{' '}
                <Button style={{ color: accentColor[index % accentColor.length], textDecoration: 'none', width: '300px', fontSize: '1rem' }} variant="link" size="lg"><b>{project.codeButtonText}</b></Button>
              </div>
            </div>
            <div style={{ width: '60%', flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', background: accentColor[index % accentColor.length]}}>
              <img style={{ width: '90%', objectFit: 'contain', height: '450px' }} src={project.gifVideo} />
            </div>
          </div> 
        </div>
      ))}
    </>
  );
}

export default Home;
