import styled from 'styled-components';

export const Section = styled.section`
    background-color: #f1f1f1;
    padding: 80px 0;
`;

export const MaxWidth = styled.div`
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1200px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    color: #333;
    text-align: center;
`;

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const LeftColumn = styled.div`
    width: 100%;
    
    img {
        height: 400px;
        width: 400px;
        object-fit: cover;
        border-radius: 50%;
    }

    @media (min-width: 768px) {
        width: 45%;
        margin-bottom: 0;
    }
`;

export const RightColumn = styled.div`
    width: 100%;

    .text {
        font-size: 35px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    span {
        color: rgb(20, 190, 220);
    }

    p {
        text-align: justify;
        font-size: 20px;
    }

    a {
        display: inline-block;
        background: #5d8cc9;
        color: #ffffff;
        font-size: 20px;
        font-weight: 500;
        padding: 10px 30px;
        margin-top: 20px;
        border-radius: 6px;
        border: 2px solid #0e53ae;
        transition: all 0.3s ease;

        &:hover {
            color: #0e53ae;
            background: none;
        }
    }

    @media (min-width: 768px) {
        width: 45%;
    }
`;
