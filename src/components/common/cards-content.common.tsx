import Link from "next/link";
import TwitterIcon from "./icons/twitter.icon";
import LinkedinIcon from "./icons/linkedin.icon";
import ListEpic from "../epic/list.epic";
import { RouterPaths_ } from "../../constants/router-paths";
import ReactMarkdown from "react-markdown";

const classNames = {
    cardsContentCommon: 'cards-content-common flex',
    cardsContentName: "color-white font-bold text-xl",
    cardsContentTitle: "color-white text-sm font-bold",
    cardsContentDesc: "color-white mb-3",
    cardsContentNumber: 'color-white text-sm mr-4'
}

const CardsContentCommon = (
    {
        name,
        title,
        desc,
        twitter_link,
        linkedin_link,
        number,
        list
    }: Props_CardsContentCommon
) => {
    return (
        <div className={ classNames.cardsContentCommon }>
            { number &&
				<div className={ classNames.cardsContentNumber }>
                    { number }
				</div>
            }
            <div>
                <h2 className={ classNames.cardsContentName }>
                    { name }
                </h2>
                { title &&
					<h4 className={ classNames.cardsContentTitle }>
                        { title }
					</h4>
                }
                { desc &&
					<p style={{minHeight: 42}} className={ classNames.cardsContentDesc }>
                        { desc }
					</p>
                }
                { list &&
					<ReactMarkdown className="c-fff">
                        { list }
					</ReactMarkdown>
                }
                <div className="flex items-center" style={ { minHeight: 24 } }>
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
            </div>
        </div>
    );
};

export interface Props_CardsContentCommon {
    name?: string;
    title?: string;
    desc?: string;
    twitter_link?: string;
    linkedin_link?: string;
    number?: string;
    list?: string
}

export default CardsContentCommon;