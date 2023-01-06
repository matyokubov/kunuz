import styled from "styled-components";

const getType = ({type}) => {
    switch(type){
        case "recent":
            return `
                width: 445px;
                height: 115px;
                margin-top: 20px
            `
        default:
            return `
                width: 892px;
                height: 330px;
                background: #EFF2F8;
            `
    }
}

export const Box = styled.div`
    ${getType}
`