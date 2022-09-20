

import '../../styles/ViewList/ViewListItem.scss'

import ViewListBotNav from "./ViewListBotNav"

export default function ViewListItem(props) {

  const { image, location, floorType, wallType } = props


  return (
    <section className="view-list-item-container">
      <div className="view-img-container">
        <img className="room-img" src={image} />
      </div>

      <ViewListBotNav
        location={location}
        floorType={floorType}
        wallType={wallType}
      />
    </section>
  )
}


