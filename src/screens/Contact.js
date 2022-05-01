import React from "react";
import ScreenLayout from "../components/ScreenLayout";
import styled from "styled-components";
import { IoLogoInstagram, IoLogoFacebook, IoLogoGithub } from "react-icons/io";
import { colors } from "../utils/colors";
import { useForm } from "react-hook-form";
import { init, send } from "@emailjs/browser";

export default function Contact() {
  init("user_KLZ4yRcvBwnZVfFADzXUj");
  const { register, handleSubmit, formState } = useForm({ mode: "onSubmit" });
  const onValid = (data) => {
    console.log(data);
    send("service_8nc23u4", "template_3fmphv9", data, "user_KLZ4yRcvBwnZVfFADzXUj");
  };
  console.log(formState.errors?.from_email?.type);

  return (
    <ScreenLayout>
      <Container>
        <div style={{ width: "30vw", gap: 10, display: "flex", flexDirection: "column" }}>
          <BoldText style={{ fontSize: 20, marginBottom: 10 }}>문의 및 피드백을 기다립니다!</BoldText>
          <BoldText style={{ fontSize: 50 }}>문의하기</BoldText>
          <SlimText>부천시 장말로 136</SlimText>
          <SlimText>hi6724@gmail.com | +8180-9437-9431</SlimText>
          <div style={{ display: "flex", gap: 15 }}>
            <SnsLink href={"https://github.com/hi6724"} target="_blank">
              <IoLogoGithub size={"3vw"} color={colors.gray} />
            </SnsLink>
            <SnsLink href={"https://www.facebook.com/hunmok.ha"} target="_blank">
              <IoLogoFacebook size={"3vw"} color={colors.link} />
            </SnsLink>
            <SnsLink href={"https://www.instagram.com/ha_hunmok/"} target="_blank">
              <IoLogoInstagram size={"3vw"} color={colors.pink} />
            </SnsLink>
          </div>
        </div>
        <div style={{ width: "30vw" }}>
          <form
            action="#"
            autoComplete="off"
            onSubmit={handleSubmit(onValid)}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Input
              autocomplete="off"
              isError={formState?.errors?.from_name?.message.length > 1}
              placeholder={
                formState?.errors?.from_name?.message.length > 1 ? formState?.errors?.from_name?.message : "이름"
              }
              {...register("from_name", { required: { value: true, message: "이름을 입력해주세요" } })}
            />
            {formState?.errors?.from_email?.type === "pattern" && <ErrorMsg>옳바른 이메일을 입력해주세요</ErrorMsg>}

            <Input
              autocomplete="off"
              isError={formState?.errors?.from_email?.message.length > 1}
              placeholder={
                formState?.errors?.from_email?.type.length > 1 ? formState?.errors?.from_email?.message : "이메일"
              }
              {...register("from_email", {
                required: { value: true, message: "이메일을 입력해주세요" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "옳바른 이메일을 입력해주세요",
                },
              })}
            />

            <InputBox
              autocomplete="off"
              isError={formState?.errors?.message?.message.length > 1}
              placeholder={
                formState?.errors?.message?.message.length > 1 ? formState?.errors?.message?.message : "메세지"
              }
              {...register("message", { required: { value: true, message: "내용을 입력해주세요" } })}
            />
          </form>
          <div style={{ justifyContent: "flex-end", display: "flex" }}>
            <SubmitButton onClick={handleSubmit(onValid)}>제출</SubmitButton>
          </div>
        </div>
      </Container>
    </ScreenLayout>
  );
}
const ErrorMsg = styled.h1`
  color: tomato;
  font-family: "BM-Air";
`;
const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: transparent;
  font-family: "BM-Pro";
  font-size: 18px;
  border: 0px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    color: ${colors.deepBlue};
    background-color: ${colors.link};
  }
`;
const Input = styled.input`
  margin-bottom: 15px;
  height: 5vh;
  padding: 5px 15px;
  font-size: 16px;
  font-family: "BM-Air";
  border: 1px solid ${colors.gray};
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => (props.isError ? "tomato" : "black")};
  }
  :focus {
    border: 2px solid ${colors.purple};
  }
`;
const InputBox = styled(Input)`
  transition: all 0.2s;
  :focus {
    height: 15vh;
  }
`;
const SlimText = styled.h1`
  font-family: "BM-Air";
`;
const BoldText = styled.h1`
  font-family: "BM-Pro";
  color: black;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SnsLink = styled.a`
  color: black;
`;
