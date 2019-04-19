// use emmet with .jsx


export default class Person extends Component{
  constructor() {
    super();

    this.state = {
    }
  }


  render() {   //is a method in an object
    let peepId = data[this.props.id]
    console.log(data[this.props.id].favoriteMovies)
    const movies = data[this.props.id].favoriteMovies.map((movie, index) => {
      return <li key={index}>{movie}</li>
      
     })

    return(
      <div className="BackColor">
      <div className="FrontColor">
        <h2>{this.state.id}</h2>
        <h3>{`${peepId.name.first} ${peepId.name.last}`}</h3>
        <p><b>From:</b> {`${peepId.city}, ${peepId.country}`}</p>
        <p><b>Job Title:</b> {`${peepId.title}`}</p>
        <p><b>Employer:</b> {`${peepId.employer}`}</p>
        <p><b>Favorite Movies: </b></p>
        <ol className="ol">{movies}</ol>

      </div>
        <div className="btn">
          <button onClick={this.props.updatePrevious}>Previous</button>
          <button onClick={this.props.updateNext}>Next</button>
        </div>
    </div>
    )
  }

  }

