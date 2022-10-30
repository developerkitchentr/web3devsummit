import ButtonCommon from "../common/button.common";

const classNames = {
    scopeRoot: (variant: string = "") => `scope-headers ${ variant }`,
    head: "text-4xl color-white mb-2",
    sub: (button_text?: string) => `color-white text-xl ${ button_text ? "mb-5" : '' }`
}

const ScopeHeadersEpic = ({ head, sub, variant, button_text }: Props) => {
    return (
        <div className={ classNames.scopeRoot(variant) }>
            <h2 className={ classNames.head }>
                { head }
            </h2>
            <p className={ classNames.sub(button_text) }>
                { sub }
            </p>
            { button_text &&
				<ButtonCommon variant="primary">
                    { button_text }
				</ButtonCommon>
            }
        </div>
    )
}

interface Props {
    head: string;
    sub: string;
    variant?: string;
    button_text?: string;
}

export default ScopeHeadersEpic