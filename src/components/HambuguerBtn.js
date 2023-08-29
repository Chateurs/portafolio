
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  align-items: center;
  z-index: 10;
  
  

  span {
    width: 100%;
    height: 4px;
    background-color: white;
    transition: 0.3s;
    border-radius: 5px;
  }

  .top,
  .bottom {
    width: 100%;
  }

  .middle {
    width: 100%;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    .top {
      transform: translateY(9px) rotate(45deg);
    }

    .middle {
      opacity: 0;
    }

    .bottom {
      transform: translateY(-15px) rotate(-45deg);
    }
  `}
`;

const HamburguerButton = ({ isOpen, onClick }) => {
  return (
    <Button isOpen={isOpen} onClick={onClick}>
      <span className="top"></span>
      <span className="middle"></span>
      <span className="bottom"></span>
    </Button>
  );
};

export default HamburguerButton;
