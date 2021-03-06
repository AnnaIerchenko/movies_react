function Movie (props) {
const {
//to cho est v Api
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster
} = props;

return (
    <div id={id} className="card movie">
    <div className="card-image waves-effect waves-block waves-light">
     {
         poster === 'N/A' ?
         <img className="activator" src={`https://
         via.placeholder.com/300x4 50/text=${title}`} alt="movie"/>
         :
         <img className="activator" src={poster} alt="movie"/>
     }
     
    
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">
          {title}</span>
      <p>{year} <span className="right">{type}</span></p>
    </div>
  </div>
)
}

export {Movie}