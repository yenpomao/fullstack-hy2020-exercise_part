const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

  const Content = (props) => {
    return (
      <p>{props.content} {props.exercise}</p>
    )
  }

  const Total = (props) => {
    return (
      <p>Number of exercises {props.total}</p>
    )
  }
  return (
    // <div>
    //   <h1>{course}</h1>
    //   <p>
    //     {part1} {exercises1}
    //   </p>
    //   <p>
    //     {part2} {exercises2}
    //   </p>
    //   <p>
    //     {part3} {exercises3}
    //   </p>
    //   <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    // </div>

    <div>
    <Header course={course} />
    <Content content={part1} exercise={exercises1}/>
    <Content content={part2} exercise={exercises2}/>
    <Content content={part3} exercise={exercises3}/>
    <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App