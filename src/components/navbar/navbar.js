import React, { useEffect, useState } from 'react'
import './navbar.css'
import Logo from '../../logo.png'
import { Link } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'
import { getGenres } from '../../services/get_genres';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';


export default function NavBar({ genres_name, genres_id }) {

    const [isOpen, setOpen] = useState(false)
    const [styleNavBarContent, setStyleNavBarContent] = useState({})
    const [genres, setGenres] = useState([])
    const [styleNavBarUl, setStyleNavBarUl] = useState({})
    const [styleListGenres, setStyleListGenres] = useState({
        display: 'none'
    })
    const [rotateSvg, setRotateSvg] = useState({})

    const openNavBar = () => {
        if (window.screen.availWidth < 992) {
            if (isOpen === true) {
                setStyleNavBarContent({
                    height: '150px'
                })
                setStyleNavBarUl({
                    display: 'block'
                })
            }
            if (isOpen === false) {
                setStyleNavBarContent({
                    height: '0px'
                })
                setStyleNavBarUl({
                    display: 'none'
                })
                setStyleListGenres({
                    display: 'none'
                })
                setRotateSvg({
                    transform: 'rotate(360deg)'
                })
            }
        }
    }
    const listGenres = () => {
        if (styleListGenres.display === 'none') {
            setStyleListGenres({
                display: 'block'
            })
            setStyleNavBarContent({
                height: '750px'
            })
            setRotateSvg({
                transform: 'rotate(180deg)'
            })
        } else {
            setStyleListGenres({
                display: 'none'
            })
            setStyleNavBarContent({
                height: '150px'
            })
            setRotateSvg({
                transform: 'rotate(360deg)'
            })
        }
    }

    useEffect(() => {
        openNavBar()
        getGenres().then(res => {
            setGenres(res)
        })
    }, [isOpen])

    return (
        <div className="div_navbar">
            <div className="navbar_content" style={styleNavBarContent}>
                <ul style={styleNavBarUl}>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/movie'><li>Peliculas</li></Link>
                    <Link to='/tv'><li>Series</li></Link>
                    <div>
                        <li id="li_genres" onClick={listGenres}><ExpandMoreRoundedIcon style={rotateSvg} />Generos</li>
                        <ul className="list_genres" style={styleListGenres}>
                            {genres.map((gen) => (
                                <Link to={`/genres/${genres_name = gen.name}/${genres_id = gen.id}`}  key={gen.id} ><li>{gen.name}</li></Link>
                            ))}
                        </ul>
                    </div>
                </ul>
            </div>
            <div className="navbar">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="hamburger">
                    <Hamburger toggled={isOpen} toggle={setOpen} size={20} rounded color='#903570' />
                </div>
            </div>
        </div>
    )
}