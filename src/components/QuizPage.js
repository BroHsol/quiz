import { useState } from "react";
import topImg1 from './assets/img/d-1.png'
import topImg2 from './assets/img/d-2.png'
import topImg3 from './assets/img/d-3.png'
import topImg4 from './assets/img/d-4.png'
import topImg5 from './assets/img/d-5.png'

const QuizPage = ({quizes,onFinish,onScore,score}) => {
  const topImg = [topImg1, topImg2, topImg3, topImg4, topImg5]
  const [current,setCurrent] = useState(0);
  const [selected,setSelected] = useState(null);
  const handleClick = (idx)=>{
    //정답 체크
    if(idx+1 === quizes[current].correct){
      //점수를 +20
      onScore();
    }
    setTimeout(()=>{
      setSelected(null);
      if(current+1 < quizes.length){
        setCurrent(current+1);
      } else {
        onFinish(true);
      }
    },500)
  }
  return (
    <div id="quiz-page">
      <div className="top-img">
        <img src={topImg[current]} alt="" />
      </div>
      <div className="question">
        <h3>Q{current+1}.</h3>
        <p>{quizes[current].question}</p>
        <p className="score">현재 점수 : {score}</p>
      </div>
      <ul className="choices">
        {
        quizes[current].choices.map((item,idx)=>{
          let style = {};
          if (selected !== null){
            if(idx+1 === quizes[current].correct){
              style.color = "green";
            } else if(selected === idx){
              style.color = "red";
            }
          }
          return (
            <li key={idx} onClick={()=>{handleClick(idx)}} style={style}>
              <p>{item}</p>
            </li>
          );
        })
        }
      </ul>
    </div>
  )
}

export default QuizPage