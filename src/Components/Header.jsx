import { FiMoon } from 'react-icons/fi'
import { BsSun } from 'react-icons/bs'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
const Header = ({ text }) => {
    const {darkmode, handleThemeMode} = useContext(FeedbackContext)
    return (
        <div className="bg-opacity-70 bg-black">
            <header className="max-w-screen-md mb-8 m-auto flex justify-between items-center font-bold text-center text-brightPink text-2xl p-3">   
                <h1>{text}</h1>
                {(darkmode)?<BsSun onClick={handleThemeMode} className="text-2xl text-white"/>
                :<FiMoon onClick={handleThemeMode} className="text-2xl text-white"/>
                }
            </header>
        </div>
        

    )
}

export default Header
