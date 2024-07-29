import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [pageNumber, setPageNumber] = useState(1)
  const [url, setUrl] = useState(`https://jsonplaceholder.typicode.com/photos?albumId=1`);
  const { data, isPending, error } = useFetch(url);

  return (
    <div className="App">
      <h1>Photos</h1>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      <div style={{height:"500px", width:"100vw", overflow: "auto"}}>
        {data && data.map((image) => {
          return <img src={image.thumbnailUrl} alt={image.title} key={image.id} style={{height: "150px", width:"150px"}} />
        })}
      </div>
      <div style={{display: "flex"}}>
        <button onClick={() => {
          setPageNumber(currentPageNumber => currentPageNumber - 1)
          setUrl(`https://jsonplaceholder.typicode.com/photos?albumId=${pageNumber}`)
        }}>Prev Page</button>
        <button onClick={() => {
          setPageNumber(currentPageNumber => currentPageNumber + 1)
          setUrl(`https://jsonplaceholder.typicode.com/photos?albumId=${pageNumber}`)
        }}>Next Page</button>
      </div>
    </div>
  );
}
export default App;