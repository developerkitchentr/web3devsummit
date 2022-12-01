import CardsContentCommon, { Props_CardsContentCommon } from "../common/cards-content.common";
import Image from "next/image";

const classNames = {
    cardEpic: (variants: string = '') => `card-epic ${ variants }`,
    cardImage: (is_tmp?: boolean) => `card-epic-image ${!is_tmp ? 'obj-cover' : ''}`
}

const CardEpic = ({ variant, content, image, is_tmp }: Props) => {
    return (
        <div className={ classNames.cardEpic(variant) }>
            <Image
                className={ classNames.cardImage(is_tmp) }
                src={ image }
                width={ 500 }
                alt=""
                height={ 500 }
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
    is_tmp?: boolean
}

export default CardEpic;
