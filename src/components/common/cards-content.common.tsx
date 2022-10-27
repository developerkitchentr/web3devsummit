import Link from "next/link";
import TwitterIcon from "./icons/twitter.icon";
import LinkedinIcon from "./icons/linkedin.icon";

const classNames = {
    cardsContentCommon: 'cards-content-common',
    cardsContentName: "color-white text-2xl",
    cardsContentTitle: "color-white text-base font-bold",
    cardsContentDesc: "color-white text-sm font-bold mb-3"
}

const CardsContentCommon = (
    {
        name,
        title,
        desc,
        twitter_link,
        linkedin_link
    }: Props_CardsContentCommon
) => {
    return (
        <div className={ classNames.cardsContentCommon }>
            <h2 className={ classNames.cardsContentName }>
                { name }
            </h2>
            <h4 className={ classNames.cardsContentTitle }>
                { title }
            </h4>
            <p className={ classNames.cardsContentDesc }>
                { desc }
            </p>
            { (twitter_link || linkedin_link) &&
				<div className="flex items-center">
                    { twitter_link &&
						<Link target="_blank" href={ twitter_link } className="mr-3">
							<TwitterIcon/>
						</Link>
                    }
                    { linkedin_link &&
						<Link target="_blank" href={ linkedin_link }>
							<LinkedinIcon/>
						</Link>
                    }
				</div>
            }
        </div>
    );
};

export interface Props_CardsContentCommon {
    name: string;
    title: string;
    desc: string;
    twitter_link?: string;
    linkedin_link?: string
}

export default CardsContentCommon;