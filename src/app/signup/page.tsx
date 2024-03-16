import React from 'react'
import { SignupFormDemo } from '../signup'

export default function page() {
  return (
    <div className='w-full h-screen'>
        <SignupFormDemo check={true}></SignupFormDemo>
    </div>
  )
}
