
import axios from "axios";
import { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const CategoryBar = ({setRadioBtn}) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false)
  const getCategories = async () => {
    try {
        setLoading(true)
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories",
      );

      if (!response.data) {
        throw new Error("something gone wrong");
      }
      setCategories(response.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setRadioBtn(e.target.value)
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="categoryBar">
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue="all"
          onChange={handleChange}
        >
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <FormControlLabel
                value="all"
                control={<Radio />}
                label="all"
                defa
              />
              {categories?.map((item) => (
                <FormControlLabel
                  value={item}
                  control={<Radio />}
                  label={item}
                  key={item}
                />
              ))}
            </>
          )}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default CategoryBar;
