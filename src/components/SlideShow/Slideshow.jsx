import React, { useRef, useEffect, useCallback } from 'react'
import img1 from '../../assets/images/peces.png';
import img2 from '../../assets/images/dinosaurios.png';
import img3 from '../../assets/images/mascotas.png';
import logoIcon from '../../assets/images/logo-icon.png';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled from 'styled-components';
import '../Pages/Pages.css'

const Slideshow = ({
		velocidad="1000",
		intervalo="5000"
}) => {
    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);

    const next = useCallback(() =>{
        //comprueba si tiene elementos
        if (slideshow.current.children.length > 0) {
            //Se obtiene el primer elemento
            const firstElement = slideshow.current.children[0];

            //Se establece la transicion
            slideshow.current.style.transition = `${velocidad}ms ease-out all`;

            //Se obtiene el tamaño
            const sizeSlide = slideshow.current.children[0].offsetWidth;

            //Movimiento
            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`

            const transition = () =>{
                //Reinicio de posicion del slideshow
            slideshow.current.style.transition = 'none';
            slideshow.current.style.transform = `translateX(0)`;

            //cambio de posicion de imagenes del primero al final
            slideshow.current.appendChild(firstElement);

            slideshow.current.removeEventListener('transitionend', transition);
            }

            //Evenlistener para cuando termina la animación.
            slideshow.current.addEventListener('transitionend', transition);
        }
    }, [velocidad]);
    
    const prior = () => {
        if (slideshow.current.children.length > 0) {
            //Obtiene el ultimo elemento
            const index = slideshow.current.children.length -1;
            const lastElement = slideshow.current.children[index];

            slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

            slideshow.current.style.transition = 'none';

            const sizeSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

            setTimeout(()=>{
                slideshow.current.style.transition = `${velocidad}ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    }
    useEffect(() => {
        intervaloSlideshow.current = setInterval(() => {
            next();
        }, intervalo);
        // Eliminamos los intervalos
			slideshow.current.addEventListener('mouseenter', () => {
				clearInterval(intervaloSlideshow.current);
			});
        // Volvemos a poner el intervalo cuando saquen el cursor del slideshow
        slideshow.current.addEventListener('mouseleave', () => {
            intervaloSlideshow.current = setInterval(() => {
                next();
            }, intervalo);
        });
    }, [])

    return (
    <Box>
        <BoxSlideShow ref={slideshow}>
            <Slide>
                <img src={img1} alt="acuaticos" />
                <TextSlide>
                    <div className='text-pet'>
                    <p>Peces</p>
                    </div>
                </TextSlide>
            </Slide>
            <Slide>
                <img src={img2} alt="dinos" />
                <TextSlide>
                    <div className='text-pet'>
                    <p>Dinosaurios</p>
                    </div>
                </TextSlide>
            </Slide>
            <Slide>
                <img src={img3} alt="mascotas" />
                <TextSlide>
                    <div className='text-pet'>
                    <p>Mascotas</p>
                    </div>
                </TextSlide>
            </Slide>
        </BoxSlideShow>
        <Arrow>
            <Btn onClick={prior}>
                <AiOutlineLeft />
            </Btn>
            <Btn right onClick={next}>
                <AiOutlineRight />
            </Btn>
        </Arrow>
        <div className='text'>
            <div className='logo-icon'>
            <img src={logoIcon} alt="logo-icon" />
            </div>
            <div>
            <h1>Crea tu propio diccionario...</h1>
            <p>...interactvo, didáctico y simple</p>
            </div>
        </div>
    </Box>
  )
}

const Box = styled.div`
position: relative;
`
const Slide = styled.div`
min-width: 100%;
overflow: hidden;
transition: 0.3s all ease;
z-index: 9;
max-height: 500px;
position: relative;

img {
    width: 100%;
    vertical-align: top;
}
`
const TextSlide = styled.div`
background: rgba(125,125,125,.3);
color: #fff;
width: 50%;
padding: 10px 60px;
text-align: center;
position: absolute;
bottom: 0;
margin: 0 25%;
border-radius:25px 25px 0 0;
@media screen and (max-width: 700px){
    padding: 0;
    border-radius: 15px 15px 0 0;
    height:20px;
    font-size: 16px;
}
`
const BoxSlideShow = styled.div`
display: flex;
flex-wrap: nowrap;
`
const Arrow = styled.div`
position: absolute;
top: 0;
z-index: 20;
width: 100%;
height: 30%;
margin-top: 10% ;
pointer-event: none;
`
const Btn = styled.button`
pointer-event: all;
background: none;
color: #fff;
border: none;
cursor: pointer;
outline: none;
width: 50px;
font-size: 30px;
height: 80%;
text-align: center;
position: absolute;
transition: .3s all ease;
border-radius: 30px;
&:hover {
    background: rgba(0,0,0,.2);
}

${props => props.right ? 'right: 0': 'left: 0'}
`

export default Slideshow