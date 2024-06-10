import styled, { css } from 'styled-components';
import { Container, Card as BootstrapCard } from 'react-bootstrap';
import React, { useState } from "react";

interface CardProps {
  $variant: 'info' | 'secondary';
}

interface ButtonProps {
  $primary?: boolean;
}

interface TitleProps {
  $size?: 'small' | 'medium' | 'large';
}

const Title = styled.h1<TitleProps>`
  font-size: ${props => {
    switch (props.$size) {
      case 'small':
        return '1rem';
      case 'medium':
        return '2rem';
      case 'large':
        return '3rem';
      default:
        return '2rem';
    }
  }};
`;

const Button = styled.button<ButtonProps>`
  background-color: ${props => props.$primary ? 'blue' : 'gray'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 10px;
`;

const Card = styled.div<CardProps>`
  background-color: ${props => props.$variant === 'info' ? 'lightblue' : 'lightgray'};
  color: white;
  padding: 20px;
  border-radius: 10px;

  ${(props) =>
      props.$variant === 'info' &&
      css`
        border: 2px solid white;
      `};
  
  & h2 {
    font-size: 2rem;
    text-decoration: underline;
  }
  
  & p {
    font-size: 1rem;
  }
`;

const StyledBootstrapCard = styled(BootstrapCard)`
  background-color: lightblue;
  color: white;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid white;

  & h2 {
    font-size: 2rem;
    text-decoration: underline;
  }

  & p {
    font-size: 1rem;
  }
`;

const App: React.FC = () => {
  const [titleSize, setTitleSize] = useState<TitleProps['$size']>('medium');

  return (
    <Container className={'mt-5'}>
      <Title $size={titleSize}>Chapter 2 Example</Title>
      <Button $primary={titleSize === 'small'} onClick={() => setTitleSize('small')}>Small Title</Button>
      <Button $primary={titleSize === 'medium'} onClick={() => setTitleSize('medium')}>Medium Title</Button>
      <Button $primary={titleSize === 'large'} onClick={() => setTitleSize('large')}>Large Title</Button>

      <Card $variant="info">
        <h2>Info Card</h2>
        <p>This is an info card.</p>
      </Card>
      <Card $variant="secondary">
        <h2>Secondary Card</h2>
        <p>This is a secondary card.</p>
      </Card>

      <StyledBootstrapCard>
        <BootstrapCard.Body>
          <BootstrapCard.Title>Bootstrap Card</BootstrapCard.Title>
          <BootstrapCard.Text>This is a Bootstrap card.</BootstrapCard.Text>
        </BootstrapCard.Body>
      </StyledBootstrapCard>
    </Container>
  );
};

export default App;
