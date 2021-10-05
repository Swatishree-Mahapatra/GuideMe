import styled from 'styled-components';

export const ServicesContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background:#DDEEDF;
  color: #001a00;
`;

export const ServiceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
 
`;

export const ServiceCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
  
`;

export const ServiceImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #1E5F74;
`;

export const ServicesHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ServiceTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ServiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ServiceDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ServicePrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ServiceButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #1D2D50;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #FCDAB7;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
