import { CardProps } from "../src/components/molecules/Card/Card";
import CardSlider from "../src/components/organisms/CardSlider/CardSlider";

const cards: CardProps[] = [
    {
      imageUrl: "https://www.backpackeninazie.nl/wp-content/uploads/2012/11/Koh-Phi-Phi-1.jpg",
      location: "Thailand",
      price: "$1,480",
      title: "Phi Phi Islands",
    },
    {
      imageUrl: "https://media.hrs.com/media/image/8d/e4/14/Kandima_Maldives-Kudahuvadhoo-Aussenansicht-907859_600x600.jpg",
      location: "Maldives",
      price: "$1,480",
      title: "Kudahuvadhoo Island",
    },
    {
      imageUrl: "https://www.backpackeninazie.nl/wp-content/uploads/2012/11/Koh-Phi-Phi-1.jpg",
      location: "Thailand",
      price: "$1,480",
      title: "Phi Phi Islands",
    },
    {
      imageUrl: "https://media.hrs.com/media/image/8d/e4/14/Kandima_Maldives-Kudahuvadhoo-Aussenansicht-907859_600x600.jpg",
      location: "Maldives",
      price: "$1,480",
      title: "Kudahuvadhoo Island",
    },
    {
      imageUrl: "https://media.hrs.com/media/image/8d/e4/14/Kandima_Maldives-Kudahuvadhoo-Aussenansicht-907859_600x600.jpg",
      location: "Maldives",
      price: "$1,480",
      title: "Kudahuvadhoo Island",
    },
    {
      imageUrl: "https://media.hrs.com/media/image/8d/e4/14/Kandima_Maldives-Kudahuvadhoo-Aussenansicht-907859_600x600.jpg",
      location: "Maldives",
      price: "$1,480",
      title: "Kudahuvadhoo Island",
    }
  ]

export default function Slider () {
    return <CardSlider cards={cards}/>
};
