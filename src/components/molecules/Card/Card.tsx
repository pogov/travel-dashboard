/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
// import Image from 'next/image'
import Bookmark from '../../atoms/Bookmark/Bookmark';
import Price from '../../atoms/Price/Price';
import Location from '../../atoms/Location/Location';
import CardHeader from '../../atoms/CardHeader/CardHeader';

const CardWrapper = styled.div`
  height: 260px;
  width: 290px;
  border-radius: 25px;
  background-color: #ffffff;
  box-shadow: 0px 100px 80px rgba(153, 165, 236, 0.05), 0px 64.8148px 46.8519px rgba(153, 165, 236, 0.037963),
    0px 38.5185px 25.4815px rgba(153, 165, 236, 0.0303704), 0px 20px 13px rgba(153, 165, 236, 0.025),
    0px 8.14815px 6.51852px rgba(153, 165, 236, 0.0196296), 0px 1.85185px 3.14815px rgba(153, 165, 236, 0.012037);
  padding: 14px;
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const ImageWrapper = styled.div<{ src: string }>`
  border-radius: 25px;
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  flex: 2;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface Props {
  imageUrl: any;
  location: string;
  price: string;
  title: string;
}

const Card: React.FC<Props> = ({ imageUrl, location, price, title }) => {
  return (
    <CardWrapper>
      <ImageWrapper src={imageUrl}>
        <Bookmark size="small" />
      </ImageWrapper>
      <CardHeader>{title}</CardHeader>
      <InfoBox>
        <Location>{location}</Location>
        <Price>{price}</Price>
      </InfoBox>
    </CardWrapper>
  );
};

export default Card;
