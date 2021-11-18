import React from "react";
<<<<<<< HEAD
import styled from "styled-components";
import CenterDotIcon from "../../assets/icons/centerDot.svg";

const ListItem = ({ datum }) => {
  return (
    <StyledWrapper>
      <div className="subTitle">{datum.title}</div>
      <div className="paragraph2">{datum.subTitle}</div>
      <div className="caption">
        <span>좋아요{datum.like}</span>
        <img src={CenterDotIcon} alt="dot" />
        <span>댓글{datum.comment}</span>
        <img src={CenterDotIcon} alt="dot" />
        <span>공유{datum.share}</span>
        <img src={CenterDotIcon} alt="dot" />
        <span>{datum.time}시간 전</span>
        <img src={CenterDotIcon} alt="dot" />
        <span>by {datum.writer}</span>
      </div>
    </StyledWrapper>
  );
};

export default ListItem;

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 17rem;
  margin-bottom: 1.5rem;
  padding-top: 2.7rem;
  padding-left: 3rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray300};

  .subTitle {
    font-size: ${({ theme }) => theme.fontSizes.subTitle1};
    margin-bottom: 0.5rem;
    line-height: 1.8;
  }

  .paragraph2 {
    font-size: ${({ theme }) => theme.fontSizes.paragraph2};
    line-height: 1.8;
    margin-bottom: 1.7rem;
    letter-spacing: -0.04em;
    width: 74.9rem;
  }

  .caption {
    display: flex;
    color: ${({ theme }) => theme.colors.gray600};
    font-size: ${({ theme }) => theme.fontSizes.caption};
  }

  .caption img {
    margin-left: 0.9rem;
    margin-right: 0.6rem;
  }
`;
=======

const ListItem = () => {
  return <div></div>;
};

export default ListItem;
>>>>>>> 83cf7d9 (:tada: feat: 헤더 틀 잡기)
