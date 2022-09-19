

import '../../styles/ViewList/ViewListItem.scss'

import ViewListBotNav from "./ViewListBotNav"

export default function ViewListItem(props) {

  const { imageUrl } = props

  const imageData = {
    view1: 'img/v1.jpg',
    view2: 'img/v2.jpg',
    view3: 'img/v3.jpg',
    view4: 'img/v4.jpg'
  }

  return (
    <section className="view-list-item-container">
      <div className="view-img-container">
        {/* <img src={imageUrl}/> */}
        <img className="room-img" src={imageData.view1} />
      </div>

      <ViewListBotNav />
    </section>
  )
}


