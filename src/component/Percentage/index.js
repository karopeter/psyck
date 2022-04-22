import React from 'react';
import { Wrapper, Label, Input } from './PercentageElements';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PercentageSection = ({ id, demi, risk, ratio, account, gain}) => {
   return (
    <Wrapper id={id}>
      <Container>
          <Row>
            <Col>
              <Label>{demi}</Label>
              <Input type="text" placeholder="0" required />
            </Col>
            <Col>
              <Label>{risk}</Label>
              <Input type="text" placeholder="0" required />
            </Col>
          </Row>
          <Row>
              <Col>
                <Label>{ratio}</Label>
                <Input type="text" placeholder="0" required />
              </Col>
              <Col>
               <Label>{account}</Label>
               <Input type="text" placeholder="0" required />
              </Col>
          </Row>
      </Container>
      <Container fluid="md">
         <Row>
            <Col>
              <Label>{gain}</Label>
              <Input type="text" placeholder="0" required />
            </Col>
          </Row>
      </Container>
    </Wrapper>
   );
};

export default PercentageSection;