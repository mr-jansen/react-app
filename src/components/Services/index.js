import React from "react";
import Icon1 from '../../images/svg-3.svg';
import Icon2 from '../../images/svg10.svg';
import Icon3 from '../../images/svg9.svg';
 
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesWrapper,ServicesP
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1> Nossos Serviços</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2> Torneio de Warzone</ServicesH2>
          <ServicesP> Solo - Duos - Squads/ Entradas a partir de R$5,00 reais </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2> Torneios de Fortnite </ServicesH2>
          <ServicesP> Solo - Duos - Trios - Squads / Entradas a partir de R$5,00 reais </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2> Torneios de CS GO </ServicesH2>
          <ServicesP> 4X4 - Melhor de 3 / campeonatos de madrugada - Corujões. Entradas a partir de R$5,00 reais  </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
