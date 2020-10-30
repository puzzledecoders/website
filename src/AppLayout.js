import React from 'react';
import styled from 'styled-components';
import figlet from 'figlet';
import doom from 'figlet/importable-fonts/Doom.js'

figlet.parseFont('doom', doom);
 
var asciiTitle = "";

figlet.text('Puzzle Decoders', {
    font: 'doom',
}, function(err, data) {
    asciiTitle = data;
});

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  width: 100vw;
  height: 100vh;
`;

const StyledMargin = styled.div`
  background-color: #EDEFEC;
`;

const StyledAppContentContainer = styled.div`
  background-color: white;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: #41CCCA;
  font-size: 10pt;
  font-family: Monospace;
  white-space: pre;
  display: flex;
  align-self: center;
`;

const AppLayout = () => <StyledAppLayout>
  <StyledMargin />
  <StyledAppContentContainer>   
    <Title>{asciiTitle}</Title>                                                       
  </StyledAppContentContainer>
  <StyledMargin/>
</StyledAppLayout>;

export default AppLayout;