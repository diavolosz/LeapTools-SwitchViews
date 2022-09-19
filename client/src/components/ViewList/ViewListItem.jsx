



export default function ViewListItem(props) {

  const { imageUrl } = props

  imageData = {
    view1: 'img/v1',
    view2: 'img/v2',
    view3: 'img/v3',
    view4: 'img/v4'
  }

  return (
    <section className="view-list-item-container">
      <div className="view-img-container">
        <img src={imageUrl}/>
        <img src={imageData.view1}/>
      </div>
    </section>
  )
}


