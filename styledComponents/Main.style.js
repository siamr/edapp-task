import styled from "styled-components";


// Main secton

export const MainDescriptionContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
margin-bottom: 25px;
` 

export const MainDescription = styled.div`
width: 50%;
text-align: center;

` 

export const Main= styled.div`
width: 100%;
max-height: fit-content; 
position: relative;
` 
export const MainImg = styled.img`
width: 100%;
max-height: 450px;
object-fit: cover;
position: relative;
display: grid;
grid-template-columns: 50% 50%;
` 
export const MainTextContainer = styled.div`
display: grid;
grid-template-columns: 50% 50%;
position: absolute;
top: 0;
`
export const MainSection = styled.div`
display: grid;
grid-template-columns: 50% 50%;
top: 0;
`
export const MainText = styled.div`
top: 0;
text-align: center;
padding: 30px;
padding-right: ${props => props.paddingr};
padding-top: ${props => props.paddingt};
padding-bottom: ${props => props.paddingb};
padding-left: ${props => props.paddingl};
margin-left: ${props => props.marginl};
line-height: 25px;
text-align: ${props => props.texta};

@media screen and (max-width: 1186px) {
    padding: 0 0 0 0;
    display: block;
    margin-top: ${props => props.mobileMt};
    margin-left: ${props => props.mlMob};

    
}
@media screen and (min-width: 1500px) {
    padding-left: 20px;
    margin-top: ${props => props.mobileMt};
    margin-left: ${props => props.mobileMl};
    padding-left: ${props => props.paddingMl} ;
    padding-right: ${props => props.paddingMr} ;
    width: ${props => props.widthM} ;
    
}
`

// Yotube Video

export const VideoContainer = styled.div`
width: 100%;
padding: 30px 0 30px 0;
display: flex;
justify-content: center;
`
export const Video = styled.iframe`
width: 50vw;
height: 400px;
`
//Testimonial section

export const TestimonialSection = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const TestimonialImg = styled.img`
width: 650px;
`
export const TestimonialText = styled.h5`
width: 450px;
width: ${props => props.testWidth};
font-size: 0.8rem;
font-size: ${props => props.fontS};
text-align: ${props => props.textA};
padding-left: ${props => props.paddingl};
padding-right: ${props => props.paddingr};
margin-left: ${props => props.marginl};

@media screen and (min-width: 1500px) {
    margin-left: ${props => props.mMr};
}
`
export const TestimonialAuthor = styled.p`
width: 450px;
font-size: 0.8rem;
`

//Phone Image
export const PhoneImage = styled.img`
height: 520px;
width: 520px;
`