// const options = {
// 	method: 'GET',
// 	url: 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes',
//     params:{
//         from:'0',
//         size:'20'
//     },
// 	headers: {
// 		'x-rapidapi-key': 'b82e1ba472msh19e17d1ec6025e6p114b94jsna9e3d94184a5',
// 		'x-rapidapi-host': 'tasty.p.rapidapi.com'
// 	}
// };

import axios from "axios";
import { useState } from "react";

// const options = {
//   method: "GET",
//   url: "https://tasty.p.rapidapi.com/recipes/list",
//   params: {
//     from: "0",
//     size: "20",
//   },
//   headers: {
//     "X-RapidAPI-Key": "9510c9b4e5mshe345aa488fd6cc0p17a36bjsnd0d5a5b92877",
//     "X-RapidAPI-Host": "tasty.p.rapidapi.com",
//   },
// };

const options = {
	method: 'GET',
	url: 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes',
    params:{
        from:'0',
        size:'20'
    },
	headers: {
		'x-rapidapi-key': 'b82e1ba472msh19e17d1ec6025e6p114b94jsna9e3d94184a5',
		'x-rapidapi-host': 'tasty.p.rapidapi.com'
	}
};

const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipes = async (searchTerm) => {
    setLoading(true);
    setRecipes(null);
    setError(null);
    try {
      const reqOptions = { ...options };
      if (searchTerm) {
        reqOptions.params.q = searchTerm;
      }
      const response = await axios.request(reqOptions);
      setRecipes(response.data.results);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return [fetchRecipes, { data: recipes, loading, error }];
};

export default useFetchRecipes;