import React from "react";
import styled from "styled-components";
import Button from "./Button";
import TextInput from "./textInput";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";
import { CreatePost, GenerateAIImage } from "../api";
import { useState } from "react";
import {useNavigate } from "react-router-dom";

const Form = styled.div`
flex:1;
padding: 16px 20px;
display: flex;
flex-direction: column;
gap:9%;
justify-content: center;

`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Title = styled.div`
font-size: 28px;
font-weight: 500;
color: ${({ theme }) => theme.text_primary}
`;
const Desc = styled.div`
font-size: 17px;
font-weight: 400;
color: ${({ theme }) => theme.text_secondary}
`;
const Body = styled.div`
display:flex;
flex-direction: column;
gap:18px;
font-size:12px;
font-weight:400;
color:${({ theme }) => theme.text_secondary}
`;
const Actions = styled.div`
flex:1;
display:flex;
gap:12px;
`;
// ** you are post AI Generated Image to the Community **

const GenrateImageForm = ({  
  post, 
  setpost,
  cratepostLoading,
  generateImageLoading,
  setGenerateImageLoading,
  setcratepostLoading, 
}) => {
  const navigate = useNavigate();
  const [error,setError] = useState("")
const generateImageFun = async () => {
  if (!post.prompt) return alert("Please enter a prompt");

  try {
    setGenerateImageLoading(true);
    setError("");

    const res = await GenerateAIImage({ prompt: post.prompt });

    // ✅ DO NOT ADD base64 again
    setpost((prev) => ({
      ...prev,
      photo: res?.data?.photo,
    }));

  } catch (error) {
    setError(error?.response?.data?.message || "Image generation failed");
  } finally {
    setGenerateImageLoading(false);
  }
};

  const createpostFun = async () => {
  if (!post.name || !post.prompt || !post.photo) {
    return alert("All fields required");
  }

  try {
    setcratepostLoading(true);
    setError("");

    await CreatePost(post);

    alert("Post Created Successfully");

    navigate("/");

  } catch (error) {
    setError(error?.response?.data?.message || "Post creation failed");
  } finally {
    setcratepostLoading(false);
  }
};

  return (
    <Form>
      <Top>
        <Title>Generate Image with prompt</Title>
        <Desc>Write your prompt according to the images you want to generate</Desc>
      </Top>
      <Body>
        <TextInput 
          label="Author" 
          placeholder="Enter your name.." 
          name="name" 
          value={post.name}
          onChange={(e) => setpost({ ...post, name: e.target.value })} // Changed to onChange
        />
        <TextInput 
          label="Image prompt" 
          placeholder="write a detailed prompt about the images ..."
          name="prompt"
          rows="8"
          textArea
          value={post.prompt}
          onChange={(e) => setpost({ ...post, prompt: e.target.value })} // Changed to onChange
        />
        {error && <div style={{color:"red"}}>{error}</div>}
      </Body>
      <Actions>
        <Button
          text="Generate Images" 
          leftIcon={<AutoAwesome />}
          isLoading={generateImageLoading}
          isDisabled={post.prompt === ""} 
          onClick={() => generateImageFun()} // Added () here
        />
        <Button
          text="Post images"
          type="secondary"
          leftIcon={<CreateRounded />}
          isLoading={cratepostLoading}
          isDisabled={post.name === "" || post.prompt === "" || post.photo === ""}
          onClick={() => createpostFun()}
        />
      </Actions>
    </Form>
  );
};
export default GenrateImageForm