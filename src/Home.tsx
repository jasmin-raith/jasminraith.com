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

  const [isBigScreen, setBigScreen] = useState(window.innerWidth >= 1080);
  const [isMediumScreen, setMediumScreen] = useState(window.innerWidth >= 540);

  useEffect(() => {
    const handleResize = () => {
      setBigScreen(window.innerWidth >= 1080);
      setMediumScreen(window.innerWidth >= 540);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      projectMadeWith: "Figma, Components, UX/UI",
      tryButtonText: "Jetzt ansehen",
      mediaUrl: "https://www.figma.com/proto/mDlUyNjnF3FCrsJJ6zYTQ6/Exact-Match?page-id=0%3A1&type=design&node-id=1-2&viewport=-445%2C403%2C0.29&t=ixUvjr69OJzp4P4S-1&scaling=scale-down&starting-point-node-id=1%3A2",
      codeButtonText: "Übersicht ansehen",
      codeUrl: "https://www.figma.com/design/mDlUyNjnF3FCrsJJ6zYTQ6/Exact-Match?m=dev&node-id=0-1&t=c5mwxNX5LclzQkJ3-1",
      gifVideo: "https://github.com/jasmin-raith/media/blob/main/exact-match/exact-match.gif?raw=true",
    },
    {
      id: "virtual-dm-shop",
      projectName: "Idee für einen virtuellen dm",
      projectMadeWith: "Figma, Components, UX/UI",
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
      
      <div style={{ backgroundColor: lila, overflow: 'hidden' }} className="fullscreen">
        <div style={{height: '90vh', display:'flex', flexDirection: isBigScreen ? 'row' : 'column', alignContent: 'flex-start', margin: '0px 54px'}}>
          {/* Text und Buttons */}
          <div style={{ height: 'fit-content', display: 'flex', width: isBigScreen ? '60%' : '100%', flexDirection: 'column', justifyContent: 'center'}}>
            <p style={{ color: blue, fontSize: isBigScreen ? '2rem' : '1.5rem', marginTop: isBigScreen ? '100px' : '40px' }}>Junior</p>
            <h1>
              <p style={{ color: blue, fontSize: isBigScreen ? '4rem' : '2.5rem', lineHeight: '100%'}} lang="en">Frontend Entwicklerin</p>
              <p style={{ color: "white", fontSize: isBigScreen ? '2rem' : '1.5rem', marginTop: '12px' }}>React / Angular / TypeScript</p>
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: isBigScreen ? '50px' : '10px' }}>
              <Button href="https://www.linkedin.com/in/jasminraith-dev/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: blue, color: "black", borderColor: blue, width: isBigScreen ? '300px' : '50%', fontSize: '1rem' }} variant="primary" size="lg">LinkedIn</Button>{' '}
              <Button href="https://github.com/jasmin-raith" target="_blank" rel="noopener noreferrer" style={{ color: blue, textDecoration: 'none', width: isBigScreen ? '300px' : '50%', fontSize: '1rem' }} variant="link" size="lg"><b>GitHub</b></Button>
            </div>
          </div>
          {/* Bild */}
          <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}}>
            <img style={{ height: '100%', objectFit: 'contain', paddingTop: isBigScreen ? '70px' : '0px', overflow: 'hidden' }} src="/assets/img/Schnupper.png" />
          </div>
        </div>
        <div style={{height: '10vh', display: 'flex', justifyContent: 'center'}}>
          <a href="https://www.jasminraith.com/?section=ring-of-fire" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: blue, fontSize: '1rem' }}>Meine Projekte</p>
              <img style={{ objectFit: 'cover' }} src="/assets/img/arrow.svg" />
            </div>
          </a>
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
            overflow: 'hidden',
          }}
          className="fullscreen"
        >
          <div style={{ width: '100%', height: isBigScreen ? '' : '85%', overflow: 'hidden', display: 'flex', justifyContent: isBigScreen ? 'space-between' : 'space-around', flexDirection: isBigScreen ? 'row': 'column', margin: '0px 54px'}}>
            <div style={{ width: isBigScreen ? '40%' : '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden', padding: isBigScreen ? '0px 54px' : '0px 0px'}}>
              <h2 style={{ fontSize: '2rem', color: accentColor[index % accentColor.length]}}>{project.projectName}</h2>
              <div>
                <p style={{ fontSize: '1rem', color: projectMadeWithCololors[index % projectMadeWithCololors.length]}}>Gemacht mit</p>
                <p style={{ width: '100%', color: projectMadeWithCololors[index % projectMadeWithCololors.length], fontSize: '1.5rem', overflow: 'hidden'}}>{project.projectMadeWith}</p>   
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
                <Button href={project.mediaUrl} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: buttonColors[index % buttonColors.length], borderColor: buttonColors[index % buttonColors.length], color: buttonTextColors[index % buttonTextColors.length], width: isBigScreen ? '300px' : isMediumScreen ? '50%' : '75%', fontSize: '1rem' }} variant="primary" size="lg">{project.tryButtonText}</Button>{' '}
                <Button href={project.codeUrl} target="_blank" rel="noopener noreferrer" style={{ color: accentColor[index % accentColor.length], textDecoration: 'none', width: isBigScreen ? '300px' : isMediumScreen ? '50%' : '75%', fontSize: '1rem' }} variant="link" size="lg"><b>{project.codeButtonText}</b></Button>
              </div>
            </div>
            <div style={{ width: isBigScreen ? '60%' : '100%', flex: isBigScreen ? '1' : 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', background: accentColor[index % accentColor.length]}}>
              <img style={{ width: '90%', objectFit: 'contain', height: isBigScreen ? '450px' : '170px' }} src={project.gifVideo} />
            </div>
          </div> 
        </div>
      ))}
    </>
  );
}

export default Home;
