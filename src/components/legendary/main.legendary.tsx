interface Props {
    children: JSX.Element;
}

const MainLegendary = ({ children }: Props) => {
    return (
        <main className="board">
            <div className="container mx-auto">
                {children}
            </div>
        </main>
    )
}

export default MainLegendary