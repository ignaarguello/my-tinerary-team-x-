import React from 'react'
import Layout from '../../layout/Layout/Layout'
import '../SignUp/SignUp.css'
import BoxSignUp from '../../components/BoxSignUp/BoxSignUp'

export default function SignUp() {
  return (
    <Layout>
        <div className='signup-container'>
            <BoxSignUp />
        </div>
    </Layout>
  )
}
