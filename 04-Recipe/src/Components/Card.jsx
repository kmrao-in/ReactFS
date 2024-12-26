import { useNavigate } from "react-router-dom";
export default function Card({ recipe }) {

  //const { image, name, tag, duration, id } = recipe;
  const { thumbnail_url, name, topics, total_time_minutes, id } = recipe;

  const navigate = useNavigate();
  const navigateToRecipe = () => {
    navigate(`/recipe/${id}`);
  };
  return (
    <div className="card" onClick={navigateToRecipe}>
      {/*<img src={image} alt="" />*/}
      <img src={thumbnail_url} alt="" />
      <div className="card-content">
        <h3>{name}</h3>
        <div className="card-info">
          <div className="tag">
      {/*      <p>{tag}</p> */}
      {topics.length > 0 ? <p>{topics[0].name}</p> : null}

          </div>
      {/*    <p className="time-text">{duration} mins</p>*/}
      {total_time_minutes ? (
            <p className="time-text">{total_time_minutes} mins</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}