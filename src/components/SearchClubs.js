import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import PropTypes from 'prop-types';

/**
 * The SearchClubs component renders a search bar that allows users to search for clubs
 * based on their name or category. It uses the backend API to fetch the list of clubs
 * and filters the results according to the user's input.
 *
 * @param {Function} setClub - A function to set the search results which will be available on the home page for other components
 * @returns {JSX.Element} The search bar
 */

const SearchClubs = ({ setClub }) => {
  SearchClubs.propTypes = {
    setClub: PropTypes.func.isRequired,
  };
  const [search, setSearch] = useState(""); //store user input

   /**
   * Handles the search functionality.
   * It fetches the list of clubs from the backend API, filters the clubs based on the search input,
   * and sets the filtered list of clubs using the parameterized setClub function.
   */
  const handleSearch = async () => {
    if (search) {
      setSearch("");
      await axios
        .get("http://localhost:5000/club/")
        .then((response) => {
          if (response.data.length > 0) {
            const searchedClub = response.data.filter(
              (item) =>
                item.clubName.toLowerCase().includes(search) ||
                item.category.toLowerCase().includes(search)
            );
            setClub(searchedClub);
          }
        })
        .catch((err) => console.log(err));
      
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mt="20px"
        mb="49px"
        textAlign="center"
      >
        Awesome Clubs You <br /> Should Join
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1000px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Clubs"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchClubs;
