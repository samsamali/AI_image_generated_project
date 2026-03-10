import React from "react";
import styled from "styled-components";
import SearchBar from "../component/Searchbar";
import ImagesCard from "../component/imageCard";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { GetPosts } from "../api";
import { useEffect } from "react";
const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: ${({ theme }) => theme.bg};
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;
const CardWrapper = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 640px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;


const Headline = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Span = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};

  @media (max-width:600px) {
  font-size: 20px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
  background: red;
`;


const Home = () => {
  const [posts, setPosts] = useState([]); // CamelCase convention
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const getPosts = async () => {
    setLoading(true);
    try {
      const res = await GetPosts();
      // Ensure data exists before setting
      const fetchedPosts = res?.data?.data || res?.data || []; 
      setPosts(fetchedPosts);
      setFilteredPosts(fetchedPosts);
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (!search) {
      setFilteredPosts(posts);
      return; // Exit early if no search
    }

    const searchResult = posts.filter((post) => {
      const promptMatch = post?.prompt?.toLowerCase().includes(search.toLowerCase());
      const authorMatch = post?.name?.toLowerCase().includes(search.toLowerCase());
      return promptMatch || authorMatch;
    });

    setFilteredPosts(searchResult);
  }, [posts, search]);

  return (
    <Container>
      <Headline>
        Explore popular posts in the community!
        <Span>•Generate with AI•</Span>
      </Headline>
      <SearchBar search={search} setSearch={setSearch} />
      <Wrapper style={{ background: "transparent" }}> {/* Removed Red Background */}
        {error && <div style={{ color: "red" }}>{error}</div>}
        
        {loading ? (
          <CircularProgress />
        ) : (
          <CardWrapper>
            {filteredPosts.length === 0 ? (
              "No posts found"
            ) : (
              filteredPosts
                .slice()
                .reverse()
                .map((item, index) => <ImagesCard key={item._id || index} item={item} />)
            )}
            {/* Removed the extra <ImagesCard /> from here */}
          </CardWrapper>
        )}
      </Wrapper>
    </Container>
  );
};

export default Home;