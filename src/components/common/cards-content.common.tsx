interface Props {
    name: string;
    title: string;
    desc: string;
    twitter_link?: string;
    linkedin_link?: string
}

const CardsContentCommon = (
    {
        name,
        title,
        desc,
        twitter_link,
        linkedin_link
    }: Props
) => {
    return (
        <div className="cards-content-common">
            <h2 className="color-white text-2xl mb-3">{ name }</h2>
            <h4 className="color-white text-base font-bold mb-3">{ title }</h4>
            <p className="color-white text-sm font-bold mb-3">{ desc }</p>
        </div>
    );
};

export default CardsContentCommon;