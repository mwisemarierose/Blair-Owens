import React from "react";

export const NewsCard = ({ urlimg,title, description }) => {
  return (
    <div className="newsCard">
      <div className="newsCardImage">
        <img src={urlimg}></img>
      </div>
      <div className="newsCardHeader">
        <div className="avatar">
        </div>

        <div>
          <h1>{title}</h1>
        </div>
      </div>
      <div className="newsCardText">
        <p className="text-md">{description} </p>
        
      </div>
     <a href="/readmore" ><button type="submit" className=' btn-primary'>Read more</button></a>
    </div>

  );
};
