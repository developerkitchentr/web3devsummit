interface Props {
    children: JSX.Element,
    variant: string
}

const PaperCommon = ({ children, variant }: Props) => {
    return (
        <div className={ `paper ${ variant }` }>
            { children }
        </div>
    )
}

export default PaperCommon