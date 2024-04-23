import styled from 'styled-components';

export const List = styled.ul`
  width: 888px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 24px;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
`;

export const ImageItemWrapper = styled.div`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  background-size: cover;
`;

export const ImageItem = styled.img`
  border-radius: 10px;
  object-fit: cover;
  height: 310px;
  width: 290px;
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #101828;

  font-size: 24px;
  font-weight: 600;
  line-height: 30px; /* 125% */
  margin-bottom: 8px;
`;

export const PriceContein = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
`;

export const RatingWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
  gap: 18px;
  align-items: center;
`;

export const Rating = styled.span`
  /* font-family: Inter; */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
`;


export const Description = styled.div`
  margin-bottom: 24px;
`;

export const DescriptionText = styled.p`
  overflow: hidden;
  color: #475467;

  text-overflow: ellipsis;
  /* Main text */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const InfoWrapper = styled.div``;

export const InfoList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 24px;
`;

export const InfoItem = styled.li`
  display: flex;
  padding: 12px 18px;
  align-items: center;
  border-radius: 100px;
  background: #f2f4f7;
  mix-blend-mode: multiply;
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 200px;
  background: #e44848;

  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;
  border: none;
  outline: none;

  &:hover,
  &:focus  {
    background: #d84343;
  }
`;