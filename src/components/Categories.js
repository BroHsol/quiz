import ListImg1 from './assets/img/emoji.png'
import ListImg2 from './assets/img/emoji2.png'
import ListImg3 from './assets/img/emoji3.png'
import ListImg4 from './assets/img/emoji4.png'
import Down from './assets/arrow-down.png'

const Categories = ({categories,onSelect}) => {
  const listImg = [ListImg1, ListImg2, ListImg3, ListImg4];
  return (
    <div id="categories">
      <div className="cate-title">
        <img src={Down} alt="" className="down"/>
        <p>Choice!</p>
      </div>
      <ul>
        {
        categories.map((item,idx)=>{
          return (
            <li key={idx} onClick={()=>{onSelect(item)}}>
              <img src={listImg[idx]} alt="" className='list-icon' />
              <p className='list-txt'>{item}</p>
            </li>
          );
        })
        }
      </ul>
    </div>
  )
}

export default Categories