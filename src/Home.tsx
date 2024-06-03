import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from 'react-router-dom';


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

  const [isMd] = useState(window.innerWidth >= 768);

  const location = useLocation();

  function getQueryParam(param: string) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  useEffect(() => {
    const section = getQueryParam('section');
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const projectPreviews: any[] = [
    {
      id: "ring-of-fire",
      projectName: "Ring of fire",
      projectMadeWith: "Angular, Firebase, TypeScript",
      tryButtonText: "Jetzt spielen",
      mediaUrl: "https://ring-of-fire-tawny.vercel.app/",
      codeButtonText: "Code ansehen",
      codeUrl: "https://github.com/jasmin-raith/ring-of-fire",
      gifVideo: "https://github.com/jasmin-raith/media/blob/main/ring-of-fire/Ring%20of%20fire.gif?raw=true",
    },
    {
      id: "quiz-app",
      projectName: "Katzenquiz",
      projectMadeWith: "JavaScript, HTML, CSS",
      tryButtonText: "Jetzt spielen",
      mediaUrl: "https://jasmin-raith.github.io/quiz-app/",
      codeButtonText: "Code ansehen",
      codeUrl: "https://github.com/jasmin-raith/quiz-app",
      gifVideo: "https://github.com/jasmin-raith/media/blob/main/katzenquiz/Katzenquiz.gif?raw=true",
    },
    {
      id: "tic-tac-toe",
      projectName: "Tic Tac Toe", 
      projectMadeWith: "JavaScript, HTML, CSS",
      tryButtonText: "Jetzt spielen",
      mediaUrl: "https://jasmin-raith.github.io/tic-tac-toe/",
      codeButtonText: "Code ansehen",
      codeUrl: "https://github.com/jasmin-raith/tic-tac-toe",
      gifVideo: "https://github.com/jasmin-raith/media/blob/main/tic-tac-toe/tic-tac-toe.gif?raw=true",
    },
    {
      id: "lieferando-replica",
      projectName: "Lieferando Nachbau",
      projectMadeWith: "JavaScript, HTML, CSS",
      tryButtonText: "Jetzt ansehen",
      mediaUrl: "https://jasmin-raith.github.io/lieferando-replica/",
      codeButtonText: "Code ansehen",
      codeUrl: "https://github.com/jasmin-raith/lieferando-replica",
      gifVideo: "https://github.com/jasmin-raith/media/blob/main/lieferando/lieferando.gif?raw=true",
    },
    {
      id: "synonym-finder",
      projectName: "Synonym Finder",
      projectMadeWith: "JavaScript, HTML, CSS, API",
      tryButtonText: "Jetzt ausprobieren",
      mediaUrl: "https://jasmin-raith.github.io/synonym-finder/",
      codeButtonText: "Code ansehen",
      codeUrl: "https://github.com/jasmin-raith/synonym-finder",
      gifVideo: "https://github.com/jasmin-raith/media/blob/main/synonymfinder/Synonymfinder.gif?raw=true",
    },
    {
      id: "exact-match",
      projectName: "Exact Match Mockup",
      projectMadeWith: "Figma, Components",
      tryButtonText: "Jetzt ansehen",
      mediaUrl: "https://www.figma.com/proto/mDlUyNjnF3FCrsJJ6zYTQ6/Exact-Match?page-id=0%3A1&type=design&node-id=1-2&viewport=-445%2C403%2C0.29&t=ixUvjr69OJzp4P4S-1&scaling=scale-down&starting-point-node-id=1%3A2",
      codeButtonText: "Übersicht ansehen",
      codeUrl: "https://www.figma.com/design/mDlUyNjnF3FCrsJJ6zYTQ6/Exact-Match?m=dev&node-id=0-1&t=c5mwxNX5LclzQkJ3-1",
      gifVideo: "https://github.com/jasmin-raith/media/blob/main/exact-match/exact-match.gif?raw=true",
    },
    {
      id: "virtual-dm-shop",
      projectName: "Idee für einen virtuellen dm",
      projectMadeWith: "Figma, Components",
      tryButtonText: "Jetzt ansehen",
      mediaUrl: "https://www.figma.com/proto/nDjJmsPiMIXRWlpeaWmMFz/Virtueller-Dm-Shop?page-id=0%3A1&type=design&node-id=1-2&viewport=3%2C62%2C0.45&t=HFtJz7rNpHropiwQ-1&scaling=scale-down&starting-point-node-id=1%3A2",
      codeButtonText: "Übersicht ansehen",
      codeUrl: "https://www.figma.com/design/nDjJmsPiMIXRWlpeaWmMFz/Virtueller-Dm-Shop?m=dev&node-id=0-1&t=VfsQjOwoYUHwAln9-1",
      gifVideo: "https://github.com/jasmin-raith/media/blob/main/concept-idea-virtual-dm-shop/concept-idea-virtual-dm-shop.gif?raw=true",
    }
  ];

  return (
    <>
      {/* Header */}
      
      <div style={{ backgroundColor: lila }} className="fullscreen">
      <div>
          <div style={{height: '90vh', display:'flex', flexDirection: isMd ? 'row' : 'column', alignContent: 'flex-start', margin: isMd ? '0px 54px' : '0px 27px'}}>
            {/* Text und Buttons */}
            <div style={{ height: 'fit-content', display: 'flex', width: isMd ? '60%' : '100%', flexDirection: 'column', justifyContent: 'center'}}>
              <p style={{ color: blue, fontSize: '2rem', marginTop:'100px' }}>Junior</p>
              <h1>
                <p style={{ color: blue, fontSize: '4rem', lineHeight: '100%'}} lang="en">Frontend Entwicklerin</p>
                <p style={{ color: "white", fontSize: '2rem', marginTop: '12px' }}>React / Angular / TypeScript</p>
              </h1>
              <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
                <Button href="https://www.linkedin.com/in/jasminraith-dev/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: blue, color: "black", borderColor: blue, width: '300px', fontSize: '1rem' }} variant="primary" size="lg">LinkedIn</Button>{' '}
                <Button href="https://github.com/jasmin-raith" target="_blank" rel="noopener noreferrer" style={{ color: blue, textDecoration: 'none', width: '300px', fontSize: '1rem' }} variant="link" size="lg"><b>GitHub</b></Button>
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
          id={project.id}
          key={index}
          style={{
            backgroundColor: backgroundColors[index % backgroundColors.length],
            display: 'flex',
            alignItems: 'center',
          }}
          className="fullscreen"
        >
          <div style={{ width: '100%', height: isMd ? '' : '80%', display: 'flex', justifyContent: isMd ? 'space-between' : 'space-around', flexDirection: isMd ? 'row': 'column', margin: '0px 54px'}}>
            <div style={{ width: isMd ? '40%' : '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden', padding: isMd ? '0px 54px' : '0px 27px'}}>
              <h2 style={{ fontSize: isMd ? '2rem' : '3rem', color: accentColor[index % accentColor.length]}}>{project.projectName}</h2>
              <div>
                <p style={{ fontSize: isMd ? '1rem' : '1.5rem', color: projectMadeWithCololors[index % projectMadeWithCololors.length]}}>Gemacht mit</p>
                <p style={{ width: '100%', color: projectMadeWithCololors[index % projectMadeWithCololors.length], fontSize: isMd ? '1.5rem' : '2.5rem', overflow: 'hidden'}}>{project.projectMadeWith}</p>   
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
                <Button href={project.mediaUrl} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: buttonColors[index % buttonColors.length], borderColor: buttonColors[index % buttonColors.length], color: buttonTextColors[index % buttonTextColors.length], width: '300px', fontSize: '1rem' }} variant="primary" size="lg">{project.tryButtonText}</Button>{' '}
                <Button href={project.codeUrl} target="_blank" rel="noopener noreferrer" style={{ color: accentColor[index % accentColor.length], textDecoration: 'none', width: '300px', fontSize: '1rem' }} variant="link" size="lg"><b>{project.codeButtonText}</b></Button>
              </div>
            </div>
            <div style={{ width: isMd ? '60%' : '100%', flex: isMd ? '1' : 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', background: accentColor[index % accentColor.length]}}>
              <img style={{ width: '90%', objectFit: 'contain', height: isMd ? '450px' : '290px' }} src={project.gifVideo} />
            </div>
          </div> 
        </div>
      ))}
    </>
  );
}

export default Home;
