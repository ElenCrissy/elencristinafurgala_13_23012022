import styled from "styled-components";
import argentBankLogo from "../../assets/img/argentBankLogo.png";

const HeaderWrapper = styled.header`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  a{
    font-weight: bold;
    color: #2c3e50;
  }
`


const Header = () => {
    return(
        <HeaderWrapper>
            <a href={""}>
                <img alt={"Argent Bank Logo"} src={argentBankLogo}/>
            </a>
            <ConnectionBox/>
        </HeaderWrapper>

    )
}

export default Header