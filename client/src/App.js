
import './App.scss';

import { useState } from 'react'

import TopNav from './components/TopNav';
import ViewList from './components/ViewList/ViewList';

function App() {

  const [focus, setFocus] = useState(false)

  const [imageZoom, setImageZoom] = useState('imageZoomOut')
  const [botNavStatus, setBotNavStatus] = useState('showNav')

  const [currentItemIndex, setCurrentItemIndex] = useState(0)




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




  return (
    <div className="App">

      <TopNav
        handleImageFocus={handleImageFocus}
        handleImageDefault={handleImageDefault}
        focus={focus}
        botNavStatus={botNavStatus}
      />
      <ViewList
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
