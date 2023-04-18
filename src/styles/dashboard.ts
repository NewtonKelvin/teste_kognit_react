import styled from "styled-components";
import { Grid } from "@mui/material";

export const MainContainer = styled(Grid)`
  padding: var(--page-padding);
  background-color: var(--container);
  height: calc(100vh - (var(--layout-padding) * 2));
  border-radius: var(--border-radius);

  width: 100%;
  margin: 0;

  header {
    background-color: var(--input);
  }
`;

export const CustomNotification = styled.div`
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;

  max-width: 400px;
`;
