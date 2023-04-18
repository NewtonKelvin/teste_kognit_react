import styled from "styled-components";
import { Grid } from "@mui/material";

export const LeftContainer = styled(Grid)`
  padding: var(--page-padding);
  background-color: var(--container);
  height: calc(100vh - (var(--layout-padding) * 2));
  border-radius: var(--border-radius);

  width: 100%;
  margin: 0;

  img {
    filter: brightness(0) invert(1);
  }
  div.MuiGrid-container {
    height: 100%;
    margin: 0;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  label {
    font-size: 0.8em;
    padding: 5px 0;
  }

  input[type="submit"] {
    background-color: rgb(63, 94, 251);
    color: var(--text-color);
    margin: 10px 0;
    width: 100%;
  }
`;

export const RightContainer = styled(Grid)`
  padding: 10px 30px;
  background-color: transparent;
  height: calc(100vh - (var(--layout-padding) * 2));
  border-radius: var(--border-radius);

  margin: 0;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;

  @media (max-width: 900px) {
    display: none !important;
  }
`;
