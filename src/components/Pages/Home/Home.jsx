import {useState} from "react";
import TextField from "@mui/material/TextField";
import "./Home.css";
import { Button, MenuItem } from "@mui/material";
import Categories from "../../../Data/Categories";
import { useNavigate } from 'react-router-dom';
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

const Home = ({name, setName, fetchQuestions}) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = ()=>{
    if(!category || !difficulty || !name){
        setError(true)
    }else{
        setError(false)
        fetchQuestions(category, difficulty)
        navigate("/quiz ")

    }

  }
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}> Quiz Settings</span>

        <div className="settings_select">
            {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter your name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <TextField
            select
            label="Select Category"
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{marginBottom : 30}}
             value= {difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
        
              Meduim
            </MenuItem>
            <MenuItem key="Hard" value="hard">
         
              Hard
            </MenuItem>
          </TextField>

          <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="images/quizimg.svg" className="banner" alt="quiz img" />
    </div>
  );
};

export default Home;
