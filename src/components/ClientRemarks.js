import React from 'react'

const ClientRemarks = () => {
  return (
    <div className="container grid grid-cols-2 gap-6">
      <div>
        <div className="grid grid-rows-3 gap-4">
          <div className="row-span-2 h-full border">Hello</div>
          <div className="h-44 border">Hello</div>
          <div className="h-44 border">Hello</div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 gap-4">
          <div className="h-64 border">Hello</div>
          <div className="h-64 border">Hello</div>
          <div className="h-64 border">Hello</div>
        </div>    
      </div>
    </div>
  )
}

export default ClientRemarks;