import airbnblogo from '../assets/airbnb 1.png'

export default function Navbar() {
    return (
        <nav>
            <img className='nav--logo' src={airbnblogo} />
        </nav>
    )
}