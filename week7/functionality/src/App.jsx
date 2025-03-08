function App() {
  const characters = [
    {
    character: "Charlie Brown, gang leader",
    colors: ["yellow", "black"],
    personality: "The loser",
    interests: "The Litte Red-Haired Girl",
    baseballWinner: false
    },
    {
    character: "Linus, Lucy's little brother",
    colors: ["red strpes", "blue blanket"],
    personality: "Philosopher",
    interests: "His Blanket",
    baseballWinner: true
    },
    {
    character: "Lucy, The Queen",
    colors: ["blue", "white"],
    personality: "Being Bossy",
    interests: "Psychiatry",
    baseballWinner: true
    },
    {
    character: "Peppermint Patty, The Tom-boy",
    colors: ["green", "brown"],
    personality: "The Athlete",
    interests: "Skating",
    baseballWinner: true
    },
    {
    character: "Snoopy, Charlie Brown's beagle",
    colors: ["white", "black"],
    personality: "Joe Cool",
    interests: "Suppertime",
    baseballWinner: true
    }
    
  ];

  return (
    <>
      <h1> My Peanuts Gang Collection</h1>
      <p>Show Characters Here</p>
    </>
  )

}

export default App;