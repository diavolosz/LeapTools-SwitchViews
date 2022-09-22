
import './App.scss';

import { useState, useEffect } from 'react'

import TopNav from './components/TopNav';
import ViewList from './components/ViewList/ViewList';

//static data is being used. Axios will be used to fetch data from RESTful API in the future
const imageData = [
  {
    image: 'https://images.unsplash.com/photo-1606654810639-76ed5d12737b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    location: 'living room',
    floorType: 'Dark forest hardwood',
    wallType: 'Pearl while'
  },
  {
    image: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    location: 'bedroom',
    floorType: 'Earl grey carpet',
    wallType: 'Light grey'
  },
  {
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    location: 'main living room',
    floorType: 'Oak wood with carpet',
    wallType: 'Grey white'
  },
  {
    image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    location: 'main kitchen',
    floorType: 'Spruce wood',
    wallType: 'Grey marbles'
  },
]


function App() {

  const [focus, setFocus] = useState(false)

  const [imageZoom, setImageZoom] = useState('imageZoomOut')

  const [botNavStatus, setBotNavStatus] = useState('showNav')

  const [currentItemIndex, setCurrentItemIndex] = useState(0)

  const [data, setData] = useState([])



  const handleImageFocus = (focusStatus) => {
    if (focusStatus === true) {
      setFocus(false)
      setImageZoom('imageZoom')
      setBotNavStatus('hideNav')
    }
  }

  const handleImageDefault = (focusStatus) => {
    if (focusStatus === false) {
      setFocus(true)
      setImageZoom('imageZoomOut')
      setBotNavStatus('showNav')
    }
  }

  useEffect(() => {
    setData(imageData)
  }, [imageData])


  return (
    <div className="App">

      <TopNav
        data={data}
        setData={setData}
        handleImageFocus={handleImageFocus}
        handleImageDefault={handleImageDefault}
        focus={focus}
        currentItemIndex={currentItemIndex}
        setCurrentItemIndex={setCurrentItemIndex}
        botNavStatus={botNavStatus}
      />
      <ViewList
        data={data}
        setData={setData}
        focus={focus}
        botNavStatus={botNavStatus}
        imageZoom={imageZoom}
        setCurrentItemIndex={setCurrentItemIndex}
        currentItemIndex={currentItemIndex}
      />

    </div>
  );
}

export default App;
