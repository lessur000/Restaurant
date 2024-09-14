// Import slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

const Team = ({ chef }) => {
  //destructure chefs
  const { id, name, image, position } = chef;
  // console.log(chef);
  return (
    <div className="py-10">
      <Link to={`/Chef/${id}`}>
        <img src={image} className="w-[200px] mx-auto" />
      </Link>
      <h1 className="text-center text-[#292E36] font-Cormorant text-2xl font-bold">
        {name}
      </h1>
      <h5 className="text-center text-[#292E36] font-Cormorant text-xl font-semibold mt-3">
        {position}
      </h5>
    </div>
  );
};

export default Team;
