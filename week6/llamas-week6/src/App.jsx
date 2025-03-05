

function App() {
  const llamaFacts = [
    "Llamas are social animals and live with others as a herd",
    "A cria from Spanish for baby, is the name for a baby llama, alpaca, vicuña, or guanaco",
    "Llamas are now utilized as certified therapy animals in nursing homes and hospitals.",
    "Llamas are very social herd animals, however, and sometimes spit at each other to discipline lower-ranked llamas",
    "A llama's social rank in a herd is never static."
    ];
  const llamaFakes = false
  
  //adding true is not working
  return (
     
     <div>
        <h1>All About Llamas!</h1>
        <h2>Some Llama Knowlege:</h2>

      {llamaFacts && (<div>1. Llamas are social animals and live with others as a herd.</div>)}
      {llamaFacts && (<div>2. Sometimes they spit at each other to discipline lower-ranked llamas.</div>)}
      {llamaFakes ? (<div>3. A llama's social rank in a herd is never static.</div>) : (<div>A llama's social rank in a herd is static.</div>)}
      {llamaFacts && (<div>4. Llamas are now utilized as certified therapy animals in nursing homes and hospitals.</div>)}
      {llamaFacts && (<div>5. A cria from Spanish for baby, is the name for a baby llama, alpaca, vicuña, or guanaco.</div>)}

        </div>


  )
}
 //Why does this not show up?
function Video({ video }) {

  return (
    <div>
      <Thumbnail video={video} />
      <a href={<iframe width="560" height="315" src="https://www.youtube.com/embed/f95cHmw_6Sk?si=qBz5oFdLyPWnqBse" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}>
        <h3>{video.title(<div>Adorable llama babies take first wobbly steps</div>)}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}

export default App