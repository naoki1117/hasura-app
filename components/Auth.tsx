import { FC } from 'react'
import Link from 'next/link'
import {
    ChevronDoubleRightIcon,
    SwitchVerticalIcon
} from "@heroicons/react/solid"
import { useFirebaseAuth } from '../hooks/useFirebaseAuth'
import firebase from '../firebaseConfig'

export const Auth:FC = () => {
    const user = firebase.auth().currentUser
    const {
        isLogin,
        email,
        password,
        emailChange,
        pwChange,
        authUser,
        toggleMode
    } =useFirebaseAuth()

  return (
    <>
      <form
        onSubmit={authUser}
        className="mt-8 flex justify-center items-center flex-col"
      >
        <label>Email:</label>
        <input
         className='my-3 px-3 py-1 border border-gray-300'
         placeholder='email ?'
         type="text"
         value={email}
         onChange={emailChange} 
        />
        <label>Password:</label>
        <input
         className='my-3 px-3 py-1 border border-gray-300'
         placeholder='Password ?'
         type="password"
         value={password}
         onChange={pwChange} 
        />
        <button
            disabled={!email || !password}
            type="submit"
            className="disabled:opacity-40 mt-5 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded"
        >
            {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <SwitchVerticalIcon
        className='my-5 h-5 w-5 text-blue-500 cursor-pointer'
        onClick = {toggleMode}
      />
      {user && (
        <link  href='/tasks'>
            <div className='flex items-center cursor-pointer my-3'>
                <ChevronDoubleRightIcon className='h-5 w-5 mx-1 text-blue-500'/>
                <span>To task page</span>
            </div>
        </link>
      )}
    </>
  )
}

