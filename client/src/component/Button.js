import React from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

const ButtonWrapper = styled.div`
  border-radius: 10px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: min-content;
  padding: 10px 24px;

  @media (max-width: 600px) {
    padding: 8px 12px;
  }

  ${({ type, theme }) =>
    type === "secondary"
      ? `
        background: ${theme.secondary};
      `
      : `
        background: ${theme.primary};
      `}
`;

const CustomButton = ({
  text,
  leftIcon,
  isLoading = false,
  onClick,
  type,
}) => {
  return (
    <ButtonWrapper onClick={onClick} type={type}>
      {isLoading ? (
        <CircularProgress size={18} color="inherit" />
      ) : (
        <>
          {leftIcon && (
            <span style={{ display: "flex", alignItems: "center" }}>
              {leftIcon}
            </span>
          )}
          {text}
        </>
      )}
    </ButtonWrapper>
  );
};

export default CustomButton;
