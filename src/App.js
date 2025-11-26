import { useState } from "react";
import "./App.css";
import './font.css';
import Categories from './components/Categories';
import quizData from './data/quizData.json';
import QuizPage from "./components/QuizPage";
import Results from "./components/Results";
import MainImg from "./components/assets/img/stand.png";
import MainTitle from "./components/assets/main-title.png";

const App = () => {
  const [category,setCategory] = useState('');
  const [filterQuiz,setFilterQuiz] = useState([]);
  const [finish,setFinish] = useState(false);
  const [score,setScore] = useState(0);
  const onSelectCategory = (select)=>{
    setCategory(select);
    //quizData에서 선택한 카테고리의 문제만 새로 만듦
    const quizes = quizData.quizzes.filter((data)=>{
      return data.category === select;
    });
    setFilterQuiz(quizes);
  }
  const handleReStart = ()=>{
    setCategory('');
    setFinish(false);
    setScore(0);
  }
  const handleScore = ()=>{
    //이전에 가진 값에 +20
    setScore((prev)=>{return prev+20});
  }
  
  return (
    <div id="app">
      { !category && !finish && <img src={MainImg} alt="" className="main-img" />}
      { !category && !finish && <img src={MainTitle} alt="" />}

      { !category && !finish && <Categories
        categories={quizData.categories}
        onSelect={onSelectCategory}/>}
      {category && !finish && <QuizPage
        quizes={filterQuiz}
        onFinish={setFinish}
        onScore={handleScore}
        score={score}
        />}
      {finish && <Results onReStart={handleReStart} score={score} />}
    </div>
  )
}

export default App