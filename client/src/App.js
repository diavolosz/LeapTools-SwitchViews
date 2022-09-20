
import './App.scss';

import { useState } from 'react'

import TopNav from './components/TopNav';
import ViewList from './components/ViewList/ViewList';

function App() {

  const [focus, setFocus] = useState(true)

  const [imageZoom, setImageZoom] = useState('imageZoomOut')
  const [botNavStatus, setBotNavStatus] = useState('showNav')

  const handleImageFocus = (focusStatus) => {
    if (focusStatus === true) {
      setFocus(false)
      setImageZoom('imageZoom')
      setBotNavStatus('hideNav')
      console.log('imageZoom is', imageZoom)
    }
    if (focusStatus === false) {
      setFocus(true)
      setImageZoom('imageZoomOut')
      setBotNavStatus('showNav')
      console.log('imageZoom is', imageZoom)
    }
  }


  return (
    <div className="App">

      <TopNav
        handleImageFocus={handleImageFocus}
        focus={focus}
        botNavStatus={botNavStatus}
      />
      <ViewList
        botNavStatus={botNavStatus}
        imageZoom={imageZoom}
      />

    </div>
  );
}

export default App;
