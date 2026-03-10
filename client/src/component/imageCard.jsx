
import React, { useState } from "react"; // useState add kiya
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { DownloadRounded, Close } from "@mui/icons-material"; // Close icon for better UI
import FileSaver from "file-saver";
import Avatar from "@mui/material/Avatar";

const Card = styled.div`
position: relative;
display: flex;
border-radius: 20px;
box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black};
transition: all 0.3s ease;
&:hover {
box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black}
scale:1.05;
}
&:nth-child(7n+1){
grid-column: auto/span 2
}
`;
const HoverOverlay = styled.div`
opacity: 0;
position: absolute;
top: 0;
left:0;
right:0;
bottom:0;
display:flex;
flex-direction: column;
align-items:start;
gap:10px;
backdrop-filter : blur(2px);
background:rgba(0,0,0,0.5);
color:${({ theme }) => theme.white};
transition: opacity 0.3s ease; 
border-radius: 6px;
justify-content:end;
padding: 12px

${Card}:hover & {
opacity:1;}
`;
const Prompt = styled.div`
font-weight: 400px;
font-size: 15px;
color:${({ theme }) => theme.white};

`;
const Author = styled.div`
font-weight: 600px;
font-size: 14px;
display:flex;
gap:8px;
align-items: center;
color:${({ theme }) => theme.white};
`;


const DownloadButtonOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  padding: 15px 25px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  z-index: 10;
  color: white;
  font-weight: bold;
  box-shadow: 0px 4px 15px rgba(0,0,0,0.3);
  &:hover {
    background: ${({ theme }) => theme.primary || "#007AFF"};
  }
`;

const ImagesCard = ({ item }) => {
  // State to show/hide download button
  const [showDownloadOption, setShowDownloadOption] = useState(false);

  const handleCardClick = () => {
    setShowDownloadOption(!showDownloadOption); // Toggle option on click
  };

  const handleDownload = (e) => {
    e.stopPropagation(); // Stop parent click (takay overlay band na ho jaye foran)
    FileSaver.saveAs(item?.photo, `${item?.name || 'image'}.jpg`);
    setShowDownloadOption(false); // Download ke baad hide kar den
  };

  return (
    <Card onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <LazyLoadImage
        alt={item?.prompt}
        style={{ borderRadius: "12px" }}
        width="100%"
        src={item?.photo}
      />

      {/* Jab Image par click ho, tab ye beech mein show hoga */}
      {showDownloadOption && (
        <DownloadButtonOverlay onClick={handleDownload}>
          <DownloadRounded />
          Download Now
        </DownloadButtonOverlay>
      )}

      <HoverOverlay>
        <Prompt>{item?.prompt}</Prompt>
        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Author>
            <Avatar style={{ width: "32px", height: "32px" }}>
              {item?.name[0]}
            </Avatar>
            {item?.name}
          </Author>
        </div>
      </HoverOverlay>
    </Card>
  );
};

export default ImagesCard;