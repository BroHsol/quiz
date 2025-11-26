import TotalScore from './assets/total-score.png'
import LieImg from './assets/img/lie.png'

const Results = ({onReStart,score}) => {
  return (
    <div id="result">
      <img src={TotalScore} alt="" />
      <img src={LieImg} alt="" className='lie-img'/>
      <div className='total-score'>
        <p className='total-score-txt'>{score} 점</p>
      </div>
      <div className='btn-try' onClick={onReStart}>
        <p>Try Again?</p>
      </div>
    </div>
  )
}

export default Results