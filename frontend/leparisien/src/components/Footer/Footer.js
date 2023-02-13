import logo from '../../assets/logo.png'

function Footer() {

    return (
        <footer className="footer">
            <hr />
            <img src={logo} alt="logo" className='footer__logo' />
            <p>Copyright 2023 <i className="fa fa-copyright"></i></p>
        </footer >
    )
}
export default Footer