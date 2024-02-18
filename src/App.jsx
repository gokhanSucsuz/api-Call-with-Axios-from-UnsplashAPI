import { useState } from 'react'
import './App.css'
import SearchHeader from './components/SearchHeader'
import searchImages from './functions/api'
import ImageList from './components/ImageList'

function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
    const result = await searchImages(term)
    setImages(result)
    console.log(result)
    return images
  }

  return (
    <div className='App'>
      <div className="container">
        <SearchHeader handleSubmit={handleSubmit} />
      </div>
      <div>
        <ImageList images={images} />
      </div>
    </div>
  )
}

export default App
