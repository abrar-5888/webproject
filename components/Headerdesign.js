import Link from 'next/link'
import React from 'react'

function Headerdesign() {
  return (
            <div className="navbar">
                <div className="header">
                    <div className="col-1">

                        <div className="menu flex bg-green-600 text-black mx-auto p-2 justify-center items-center" >
                            <div className='mr-20'>
                                <Link href="/home">Home</Link>
                            </div >
                            <div className='mr-20'>
                                <Link href="/about">Reviews</Link>
                            </div>
                            <div className='mr-20'>
                                <Link href="/contact">Blogs</Link>
                            </div>
                            <div className='mr-20'>
                                <Link href="/login">Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
  )
}

export default Headerdesign