import React from 'react'

function Home1() {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-between align-items-center' >
        <div className="w-50 bg-white rounded p-3">
            <label className="label">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </label>
        </div>
    </div>
  )
}

export default Home1