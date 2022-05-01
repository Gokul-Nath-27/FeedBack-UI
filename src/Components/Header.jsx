import PropTypes from 'prop-types'
import { FiMoon } from 'react-icons/fi'
import { BsSun } from 'react-icons/bs'
const Header = ({ text, darkmode, handleThemeMode }) => {
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

Header.defaultProps = {
    text : "FeedBack UI"
}

Header.prototyes = {
    text : PropTypes.string
}
export default Header
