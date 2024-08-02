import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";

const PasscodeLogin = () => {
  const [passcode, setPasscode] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = (value) => {
    setPasscode((prev) => prev + value);
  };

  const handleClear = () => {
    setPasscode("");
  };

  const handleSubmit = () => {
    if (passcode === "000000") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid passcode");
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        value={passcode}
        InputProps={{
          readOnly: true,
        }}
      />
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={1} mt={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <Button
            key={num}
            variant="contained"
            color="primary"
            onClick={() => handleButtonClick(num)}
          >
            {num}
          </Button>
        ))}
      </Box>
      <Box mt={2}>
        <Button variant="contained" color="secondary" onClick={handleClear}>
          CLEAR
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
};

export default PasscodeLogin;
