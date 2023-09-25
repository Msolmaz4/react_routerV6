import React from 'react'
//burada alta ki compenetelrti gostermek icin burada oulet yapariz

import { Outlet } from 'react-router-dom'

const BlogLayout = () => {
  return (
    <div>BlogLayout
      <h3>dereee</h3>
 
<Outlet/>

    </div>
  )
}

export default BlogLayout