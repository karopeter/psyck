import React from 'react';
import Elite from '../../assets/images/Vector.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormCheck from 'react-bootstrap/FormCheck';
import { Wrapper, Section, AccountH2, Dropdown, DropdownBtn, DropdownContent, Img, Input, RadioCheck, Button } from './AccountElements';

const AccountInfo = ({ id, topLine, headline}) => {
   return (
     <Wrapper id={id}>
        <Section>
          <AccountH2>{topLine}</AccountH2>
        </Section>
        <Dropdown>
         <DropdownBtn>{headline} <span><Img src={Elite} alt/></span></DropdownBtn>
         <DropdownContent></DropdownContent> 
        </Dropdown>
        <Container>
          <Row>
            <Col>
              <Input type="text" placeholder="Symbols" required/>
            </Col>
            <Col>
             <Input type="text" placeholder="Stop loss level" required/>
              <RadioCheck>
               <FormCheck aria-label="option 1" label="Alert me when price hits SL" />
              </RadioCheck>
            </Col>
          </Row>
          <Row>
            <Col>
            <Input type="text" placeholder="Entry price level" required/>
            </Col>
            <Col>
             <Input type="text" placeholder="Take profit level" required/>
             <RadioCheck>
               <FormCheck aria-label="option 1" label="Alert me when price hits TP" />
              </RadioCheck>
            </Col>
          </Row>
          <Row>
            <Col>
            <Input type="text" placeholder="LotSize(volume)" required/>
            </Col>
            <Col>
              <Input type="text" placeholder="Account balance" required/>
            </Col>
          </Row>
        </Container>
        <Button type="submit">Calculate</Button>
     </Wrapper>
   );
};

export default AccountInfo;