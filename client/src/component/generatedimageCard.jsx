import React from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

const Container = styled.div`
  display: flex;
  min-height: 300px;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  gap: 16px;
  padding: 16px;
  border: 2px dashed ${({theme}) => theme.yellow};
  color: ${({theme}) => theme.arrow + "80"};
  border-radius: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
`;

const GeneratedImagesCard = ({ src, loading }) => {
  return (
    <Container>
      {loading ? (
        <>
          <CircularProgress style={{ color: "inherit", width: "24px", height: "24px" }} />
          Generating your Image ...
        </>
      ) : (
        <>
          {src ? <Image src={src} alt="Generated" /> : <>write a prompt to generate images</>}
        </>
      )}
    </Container>
  );
};

export default GeneratedImagesCard;
