import styled from 'styled-components';

export const PasswordInput = styled.div`

    .passwordWrapper{
        &::before,&::after{
            content: unset;
        }

        width: 100%;
        background: #FFFFFF;
        border: 1px solid #CDD2E1;
        border-radius: 6px;
        height: 40px;
        padding: 8px 12px;

        input{
            font-family: 'SF Pro Display', sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: #2C2E3E;
        }

        input::placeholder{
            color: black;
        }
    }

`