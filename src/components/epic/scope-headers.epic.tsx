interface Props {
    head: string;
    sub: string;
    variant?: string;
}

const ScopeHeadersEpic = ({ head, sub, variant }: Props) => {
    return (
        <div className={`scope-headers text-center ${variant}`}>
            <h2 className="text-4xl color-white mb-2">{ head }</h2>
            <p className="color-white text-xl">
                { sub }
            </p>
        </div>
    )
}

export default ScopeHeadersEpic