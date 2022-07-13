import React, { useRef } from 'react'
import img1 from '../../assets/images/acuáticos.png';
import img2 from '../../assets/images/dinos.png';
import img3 from '../../assets/images/mascotas.png';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled from 'styled-components';

const Slideshow = () => {
    const slideshow = useRef(null);

    const next = () =>{
        //comprueba si tiene elementos
        if (slideshow.current.children.length > 0) {
            //Se obtiene el primer elemento
            const firstElement = slideshow.current.children[0];

            //Se establece la transicion
            slideshow.current.style.transition = `500ms ease-out all`;

            //Se obtiene el tamaño
            const size = slideshow.current.children[0].offsetWidth;

            //Movimiento
            slideshow.current.style.transform = `translateX(-${size}px)`

            const transition = () =>{
                //Cambio de posicion de imagenes al principio
            slideshow.current.style.transition = 'none';
            slideshow.current.style.transform = `translateX(0)`;

            //cambio de posicion de imagenes del primero al final
            slideshow.current.appendChild(firstElement);

            slideshow.current.removeEventListener('transitionend', transition);
            }

            //Evenlistener para cuando termina la animación.
            slideshow.current.addEventListener('transitionend', transition);
        }
    }
    
    const prior = () =>{
        if (slideshow.current.children.length > 0) {
            //Obtiene el ultimo elemento
            const index = slideshow.current.children.length -1;
            const lastElement = slideshow.current.children[index];

            slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

            slideshow.current.style.transition = 'none';

            const size = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${size}px)`;

            setTimeout(()=>{
                slideshow.current.style.transition = '500ms ease-out all';
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    }

    return (
    <Box>
        <BoxSlideShow ref={slideshow}>
            <Slide>
                <img src={img1} alt="acuaticos" />
                <TextSlide>
                    <p>Animales acuáticos</p>
                </TextSlide>
            </Slide>
            <Slide>
                <img src={img2} alt="dinos" />
                <TextSlide>
                    <p>Dinosaurios</p>
                </TextSlide>
            </Slide>
            <Slide>
                <img src={img3} alt="mascotas" />
                <TextSlide>
                    <p>Mascotas</p>
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
height: 50%;
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
font-size: 50px;
height: 100%;
text-align: center;
position: absolute;
transition: .3s all ease;

&:hover {
    background: rgba(0,0,0,.2);
}

${props => props.right ? 'right: 0': 'left: 0'}
`

export default Slideshow