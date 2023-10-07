import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  console.log(singleNews);
  const {image_url, title, details, _id} = singleNews
  return (
    <div>
      <div className="card  border-red-200 border">
        <figure className="px-10 pt-10">
          <img
            src= {image_url}
            alt="Shoes"
        
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
           {
            details.length > 100  ?
            <p>{details.slice(0, 100)} <Link 
            to={`/singleNews/${_id}`} 
            className="text-red-600">Read More</Link></p>
            :
            <p>{details}</p>
           }
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
