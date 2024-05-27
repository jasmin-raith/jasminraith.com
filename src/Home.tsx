function Home() {
  const lila = "#A0357E"
  const yellow = "#F5D000"
  const pink = "#F400A8"
  const blue = "#00EEF5"
  const green = "#3B7475"

  const backgroundColors = [yellow, pink, blue, green];

  const projectPreviews: number[] = [1,2,3,4,5];


  return (
    <>
    {/* Header */}
    <div style={{backgroundColor: lila}} className="fullscreen">
      <p style={{color: yellow}}>Test</p>
    </div>
    {/* Project Preview */}
    {projectPreviews.map((project, index) => (
      <div 
        key={index}
        style={{backgroundColor: backgroundColors[index % backgroundColors.length]}} 
        className="fullscreen"
      >
        Test {project}
      </div>
    ))}
    </>
  );
}

export default Home;
