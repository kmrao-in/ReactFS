import axios from "axios";
import { useState } from "react";
const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
  params: { id: "8138" },
  headers: {
    "X-RapidAPI-Key": "b82e1ba472msh19e17d1ec6025e6p114b94jsna9e3d94184a5",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};
const useFetchRecipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchRecipe = async (id) => {
    setLoading(true);
    setRecipe(null);
    setError(null);
    try {
      const reqOptions = { ...options };
      reqOptions.params.id = id;
      const response = await axios.request(reqOptions);
      setRecipe(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  return [fetchRecipe, { data: recipe, loading, error }];
};
export default useFetchRecipe;