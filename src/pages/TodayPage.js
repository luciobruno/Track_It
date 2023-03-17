import styled from "styled-components"
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import Topo from "../components/Topo";
import Menu from "../components/Menu";

export default function TodayPage() {

    return (
        <>
            <Topo></Topo>
            <PageContainer>
                <TitlePage>
                    <div>Meus hábitos</div>
                    <button>+</button>
                </TitlePage>
                <ContentPage>
                    <div>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>
                </ContentPage>
            </PageContainer>
            <Menu></Menu>
        </>

    )
}

const PageContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    height: 100vh;
    margin-top: 70px;
    flex-direction: column;
`

const ContentPage = styled.div`
    display: flex;
    margin-top: 28px;
    width: 338px;
    height: 74px;
    margin-right: 10px;
    font-family: 'Lexend Deca',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`
const TitlePage = styled.div`
    display: flex;
    margin-top: 28px;
    justify-content: space-between;
    width: 100vw;
    height: 20px;
    align-items: center;
    & button{
        width: 40px;
        height: 35px;
        border-radius: 4.6px;
        background-color: #52b6ff;
        border: none;
        font-family: 'Lexend Deca',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        color: #FFFFFF;
        margin-right: 18px;
    }
    & div{
        font-family: 'Lexend Deca',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-left: 17px;
    }
`