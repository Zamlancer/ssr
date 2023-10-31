import React, { useEffect, useState } from 'react'

export default function app() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(loading){
      setTimeout(() => {
        setLoading(false);
      }, 3000)
    }
  }, [loading]);

  return (
    <div>

      {
        loading ? <h1>Loading ...</h1> : <h1>Loaded</h1>
      }

    </div>
  )
}
