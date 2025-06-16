import React, { useEffect, useState, useContext } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import MainContext from '../../context/MainContext'


export default function Signup() {
    const [users, setUsers] = useState([])
    const [userID, setUserID] = useState("")
    const [fullName, setFullName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const contextValue = useContext(MainContext)

    const navigate = useNavigate()


    useEffect(() => {

        fetch('http://localhost:3001/users')
            .then(res => res.json())
            .then(users => {
                setUsers(users)
                console.log(users)
                const maxID = Math.max(...users.map((index) => {
                    return index.id
                }))
                setUserID(maxID + 1)
            })

        console.log(users)
    }, [userID])


    const registerUser = (e) => {
        e.preventDefault()



        try {
            const newUser = {
                id: userID,
                fullName,
                username,
                email,
                password,
                phone
            }

            fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            }).then(res => res.json())
            .then(data => {
                console.log(data)
                contextValue.login(data)
                navigate('/')

            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <form
                    onSubmit={registerUser}
                    className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">ساخت حساب</h2>

                    <input
                        type="text"
                        placeholder="نام کامل"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="text"
                        placeholder="یوزر نیم"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
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
                    <input
                        type="text"
                        placeholder="شماره تماس"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                        وارد  شوید <Link to="/login" className="text-blue-500">ورود به حساب</Link>
                    </p>
                </form>
            </div>
        </>
    )
}
