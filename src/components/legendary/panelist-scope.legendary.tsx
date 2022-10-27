import ScopeHeadersEpic from "../epic/scope-headers.epic";
import CardEpic from "../epic/card.epic";

const classNames = {
    panelistRoot: "panelist-scope-legendary",
    panelistGrid: "grid grid-cols-4 gap-6"
}

const PanelistScopeLegendary = () => {
    const list = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

    return (
        <div className={ classNames.panelistRoot }>
            <ScopeHeadersEpic
                variant="mb-12"
                head="Panelistler"
                sub="Risus, auctor sagittis nec pretium id sit faucibus. In elit dignissim vitae diam vestibulum curabitur ac."
            />
            <div className={ classNames.panelistGrid }>
                { list.map((list, index) => (
                    <CardEpic
                        key={ `panelistler-${ index }` }
                        image={ `/images/person-0${ index + 1 }.png` }
                        content={ {
                            name: 'Yakında Açıklanacak'
                        } }
                    />
                )) }
            </div>
        </div>
    )
}

export default PanelistScopeLegendary