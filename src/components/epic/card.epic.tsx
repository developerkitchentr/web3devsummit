import CardsContentCommon, { Props_CardsContentCommon } from "../common/cards-content.common";
import Image from "next/image";

const classNames = {
    cardEpic: (variants: string = '') => `card-epic ${ variants }`,
    cardImage: 'card-epic-image'
}

const CardEpic = ({ variant, content, image }: Props) => {
    return (
        <div className={ classNames.cardEpic(variant) }>
            <Image
                className={ classNames.cardImage }
                src={ image }
                alt={ content.name }
                width={ 310 }
                height={ 250 }
            />
            <CardsContentCommon
                name={ content.name }
                title={ content.title }
                desc={ content.desc }
                twitter_link={ content.twitter_link }
                linkedin_link={ content.linkedin_link }
                number={ content.number }
                list={ content.list }
            />
        </div>
    );
};

interface Props {
    variant?: string;
    content: Props_CardsContentCommon;
    image: string;
}

export default CardEpic;