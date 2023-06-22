import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


const AdminManageProduct = () => {
  return(
    <>
      <Header/>
      <Container>
        <ImageInput>
          <input type="file"/>
        </ImageInput>
        <Text>
          <h1>MANAGE PRODUCT</h1> <br/> 
          <a>Back to Inventory</a> <br/> <br/>
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Stock"/>
          <input type="price" className="wholeWidthInput" placeholder="Stock"/>
          <textarea placeholder="Description"/>
          <button type="submit">Submit</button>
        </Text>
      </Container>
      <Footer/>
    </>
  )
}

export default AdminManageProduct;

const Container = styled.div`
  display: flex;
  align-items:center
  gap: 2rem;
  width: 80%;
  max-width: 1280 px;
  margin: 0 auto;
  border-radius: 6px;
  background: #F5F7F9;
  z-index: 1;
  @media (max-width: 840px){
    width: 90%;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Text = styled.div`
  flex: 1;
  align-items: center
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
    text-align: justify;
    line-height: 1.5;
  }
  button {
    padding: 0.7rem 2rem;
    margin-top: 1rem;
    width: 98%;
    cursor: pointer;
    background-color: #f9a826;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: 500;
  }
  input {
    border-radius: 6px;
    margin-right: 10px;
    background: #FFF;
    width: 48%;
    height: 50px;
    color: #000;
    font-size: 16px;
    font-family: Poppins;
    margin-bottom: 10px;
  }
  .wholeWidthInput {
    width: 98%;
  }
  textarea {
    width: 98%;
    height: 20rem;
  }
`;

const ImageInput = styled.div`
  margin-right: 2rem;
  input {
    width: 50rem;
    height: 50rem;
    border-radius: 6px;
    background: #E8E8E8;
    @media (max-width: 790px) {
      width: 30rem;
      height: 30rem;
    }
    @media (max-width: 640px){
      width: 25rem;
      height: 25rem;
      margin-top: 1rem;
    }
  }
`;