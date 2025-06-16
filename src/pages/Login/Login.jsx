import React, { useState  , useContext, useEffect} from 'react'
import swal from 'sweetalert'
import { Link , useNavigate } from 'react-router-dom'
import MainContext from '../../context/MainContext'
import './Login.css'


export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const  contextValue = useContext(MainContext) 

  const navigate = useNavigate()
  
  useEffect(() => {
    console.log(contextValue)
    
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await fetch(`http://localhost:3001/users`)
        .then(res => res.json())
        .then(data => {
        const userLogin = data.filter(user => user.email == email && user.password == password)
        contextValue.login(...userLogin)
        navigate('/')
        })
    } catch (err) {
      console.log(err)

      swal({
        title: 'خطا در بر قراری سرور',
        icon: 'error',
        buttons: 'OK'
      })
    }
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">ورود به حساب</h2>

          <input
            type="email"
            placeholder="ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            ورود
          </button>

          <p className="text-sm text-center mt-4 text-gray-600">
            حساب نداری؟ <Link to="/signup" className="text-blue-500">ثبت‌نام</Link>
          </p>
        </form>
      </div>
    </>
  )
}
