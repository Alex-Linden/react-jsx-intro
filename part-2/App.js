function App(){
  return(
    <div>
      <Tweet
      username="matt"
      name="matt"
      date={new Date().toDateString()}
      message="Message goes here!"
      />
    </div>
  )
}