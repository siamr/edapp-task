import { RichText } from "prismic-reactjs";
import { Client } from "../../prismic-configuration";
import styles from "../../styles/Header.module.css"
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Features from '../../components/Features'
import Explore from '../../components/Explore'
import { Header, HeaderInfo, HeaderLogo, HeaderTitle, HeaderTitle2, HeaderImage, HR } from "../../styledComponents/Header.style";
import { MainImg, MainSection, Main, MainText, TestimonialImg, TestimonialContainer, MainTextContainer, Video, PhoneImage, VideoContainer, TestimonialSection, TestimonialText, TestimonialAuthor, MainDescription, MainDescriptionContainer } from "../../styledComponents/Main.style";
import styled from "styled-components";

import Footer from "../../components/Footer"

export default function Article({ article }) {
  return (

      <div>
          <Navbar/>

          {/* Header section */}
          <Header>
              <HeaderImage src={article.data.header_image.url} />
             <HeaderInfo>
              <HeaderLogo src ={article.data.logo.url} />
              <HeaderTitle>{RichText.render(article.data.title)}</HeaderTitle>
              <HeaderTitle2>{RichText.render(article.data.subtitle)}</HeaderTitle2>
            </HeaderInfo> 
          </Header>
          <HR/>
          <MainDescriptionContainer>
          <MainDescription>{RichText.render(article.data.description)}</MainDescription>
          </MainDescriptionContainer>

          
          <Main>
            <MainImg src={article.data.main_image1.url}/>
            <MainTextContainer>
                <MainText>{RichText.render(article.data.main_text_col1)}</MainText>
                <MainText paddingMl ="200px" >{RichText.render(article.data.main_text_col2)}</MainText>
            </MainTextContainer>
          </Main>
          <VideoContainer>
              <Video src="https://www.youtube.com/embed/8J0QZndZU1U"></Video>  
            </VideoContainer>
          <Main>
            <MainImg src={article.data.main_image2.url}/>
            <MainTextContainer>
                <MainText mobileMt ="80px" marginl="50px" paddingl="80px" paddingr="180px">{RichText.render(article.data.main_text2_col1)}</MainText>
                <MainText>{RichText.render(article.data.main_text2_col2)}</MainText>
            </MainTextContainer>
          </Main>
          <TestimonialSection>
            <TestimonialImg src={article.data.review_image.url}/>
            <TestimonialText>{RichText.render(article.data.review)}
                <TestimonialAuthor>{RichText.render(article.data.reviewer)}</TestimonialAuthor>
            </TestimonialText>
          </TestimonialSection>
          <Main>
            <MainImg src={article.data.main_image3.url}/>
            <MainTextContainer>
                <MainText>{RichText.render(article.data.main_text3_col1)}
                </MainText>
                <MainText>{RichText.render(article.data.main_text3_col2)}
                      <TestimonialText mMr="24%" marginl="100px" paddingr="200px" paddingl = "25px" textA = "left" fontS="1rem" testWidth="600px">
                        {RichText.render(article.data.more_review)}
                        </TestimonialText>
                </MainText>
            </MainTextContainer>
          </Main>
          <MainSection>
                <MainText mlMob ="100px" mobileMl="200px"  paddingl ="7rem" texta="left">{RichText.render(article.data.main_text4)}</MainText>
                <PhoneImage src={article.data.main_image4.url} />
          </MainSection>
          <TestimonialSection>
            <TestimonialText fontS="0.6rem" testWidth="600px">
            {RichText.render(article.data.main_text4_review)}
            </TestimonialText>
          </TestimonialSection>
            

          <Banner/>
          <Features/>
          <Explore/>
          <Banner/>
          <Footer/>

       

         

          
          




      </div>
  );
}

export async function getServerSideProps(context) {
  const article = await Client().getByUID("article", context.query.article);

  return {
    props: {
      article: article,
    },
  };
}
