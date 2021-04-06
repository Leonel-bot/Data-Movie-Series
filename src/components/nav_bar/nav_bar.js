import React, { useEffect, useState } from 'react'
import './nav_var.css'
import { Link } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import { getGenres } from '../../services/get_genres';
import Logo from '../../logo.png'


export default function NavBar({genres_name , genres_id}) {


    
    const [genres , setGenres] = useState([])
    
    const [isOpen, setOpen] = useState(false)

    const [styleNavBar, setStyleNavBar] = useState({
        'height': '55px'
    })
    const [styleContent, setStyleContent] = useState({
        'display': 'none'
    })
    const [ styleListGenres , setStyleListGenres] = useState({})
    const [ rotateSvg , setRotateSvg] = useState({})




    const listGenres = (ev) => {
        if(styleNavBar.height === '180px'){
            setStyleNavBar({
                'height': '690px'
            })
            setStyleListGenres({
                'display' : 'block'
            })
            setRotateSvg({
                'transform' : 'rotate(180deg)'
            })
        }
        if(styleNavBar.height === '690px'){
            setStyleNavBar({
                'height': '180px'
            })
            setStyleListGenres({
                'display': 'none'
            })
            setRotateSvg({
                'transform' : 'rotate(360deg)'
            })
        }
        if(window.screen.availWidth > 992){
            listGenresMaxScreen()
        }


    }

    const listGenresMaxScreen = (ev) =>{
        if(styleListGenres.display === 'none'){
            setStyleListGenres({
                'display': 'block',
                'width' : '200px' ,
                'zIndex' : '100' ,
                'padding': '20px' ,
                'position' : 'absolute' ,
                'top' : ' 70px' ,
                'display': 'grid',
                'background' : '#692c73' ,
                'borderRadius' : '10px' ,
                'box-shadow': '11px 4px 25px -15px rgba(30,30,60,0.25)'
            })
            setRotateSvg({
                'transform' : 'rotate(180deg)'
            })
            
        }else{
            setStyleListGenres({
                'display': 'none'
            })
            setRotateSvg({
                'transform' : 'rotate(360deg)'
            })
        }
    }

    const openNavBar = () => {
        if (isOpen == true) {
            setStyleNavBar({
                'height': '180px'
            })
            setStyleContent({
                'display': 'block'
            })
        }
        if (isOpen == false) {
            setStyleNavBar({
                'height': '55px'
            })
            setStyleContent({
                'display': 'none'
            })
            setStyleListGenres({
                'display': 'none'
            })
            setRotateSvg({
                'transform' : 'rotate(360deg)'
            })
        }
    }

    useEffect(() => {
        openNavBar()
        getGenres().then(res => {
            setGenres(res)
        })
    },[isOpen])

    return (
        <div className="nav_bar" style={styleNavBar} >
            <div className="nav_bar_closed">
                <div className="nav_bar_logo">
                    <Link to="/"><img src={Logo}/></Link>
                </div>
                <div className="hambur_nav_bar">
                    <Hamburger toggled={isOpen} toggle={setOpen} size={25} rounded color='#903570' />
                </div>
            </div>
            <div className="nav_bar_content" style={styleContent}>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/movie'><li>Peliculas</li></Link>
                    <Link to='/tv'><li>Series</li></Link>
                    <li id="li_genres" onClick={listGenres}>Generos<ExpandMoreRoundedIcon style={rotateSvg}/></li>
                    <ul className="list_genres" style={styleListGenres}>
                        {genres.map((gen) => (
                           <Link to={`/genres/${genres_name = gen.name}/${genres_id = gen.id}`}><li>{gen.name}</li></Link>
                        ))}
                    </ul>
                </ul>
            </div>
        </div>
    )
}