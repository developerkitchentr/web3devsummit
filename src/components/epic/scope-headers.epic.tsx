import ButtonCommon from "../common/button.common";
import Link from "next/link";

const classNames = {
    scopeRoot: (variant: string = "") => `scope-headers ${variant}`,
    head: "text-4xl color-white mb-2",
    sub: (button_text?: string) => `color-white text-xl ${button_text ? "mb-5" : ''}`
}

const ScopeHeadersEpic = ({head, sub, variant, button_text, button_link, button_id}: Props) => {
    return (
        <div className={classNames.scopeRoot(variant)}>
            <h2 className={classNames.head}>
                {head}
            </h2>
            {sub &&
                <p className={classNames.sub(button_text)}>
                    {sub}
                </p>
            }
            {(button_id && button_text) ?
                <ButtonCommon id={button_id} variant="primary">
                    {button_text}
                </ButtonCommon>
                : (button_text && button_link) &&
                <Link target="_blank" href={button_link} className="mr-3">
                    <ButtonCommon variant="primary">
                        {button_text}
                    </ButtonCommon>
                </Link>
            }
        </div>
    )
}

interface Props {
    head?: string;
    sub?: string;
    variant?: string;
    button_text?: string;
    button_link?: string;
    button_id?: string
}

export default ScopeHeadersEpic
