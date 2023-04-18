import { Grid, Typography } from "@mui/material";
import React from "react";
import { LeftContainer, RightContainer } from "../styles/login";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginType } from "../types/global";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginType>();
  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    if (data) return navigate("/dashboard");
  };

  return (
    <>
      <Grid container>
        <LeftContainer item md={6} xs={12}>
          <Grid
            container
            alignItems={"center"}
            flexDirection={"column"}
            rowSpacing={5}
          >
            <Grid item>
              <Typography textAlign={"center"} variant="h6">
                Teste de habilidades
              </Typography>
              <Typography textAlign={"center"} variant="h4">
                Login
              </Typography>
            </Grid>
            <Grid item>
              <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <label htmlFor="login">Login:</label>
                <input
                  id="login"
                  type="text"
                  placeholder="example.login"
                  required
                  {...register("login")}
                />
                <label htmlFor="login">Password:</label>
                <input
                  id="password"
                  type="password"
                  placeholder="*************"
                  required
                  {...register("password")}
                />
                <input type="submit" value={"Login"} />
              </form>
            </Grid>
          </Grid>
        </LeftContainer>
        <RightContainer item md={6} xs={12}>
          <h1>What is Lorem Ipsum?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>
              Vivamus faucibus enim molestie lectus cursus, id volutpat risus
              ullamcorper.
            </li>
            <li>Maecenas pulvinar turpis vel arcu posuere ultrices.</li>
            <li>Integer sagittis ex eget urna commodo scelerisque.</li>
            <li>
              Nullam dapibus leo eget arcu varius, sit amet porta magna congue.
            </li>
            <li>Suspendisse aliquet mauris non est lacinia pretium.</li>
            <li>
              Nunc finibus magna ac metus tincidunt, et dignissim nunc gravida.
            </li>
          </ul>
        </RightContainer>
      </Grid>
    </>
  );
};

export default Login;
