 export function TwitterFollowCard({formatUserName, userName, name, }) {
    return (
        <>
 <article className="tw-card-follow">
            <header className="tw-card-header">
                <img className="tw-card-image" src= {`https://unavatar.io/${userName}`}
                alt="Avatar Random" />
                <div className="tw-card-info">
                    <strong className="tw-card-name">
                        {name}
                    </strong>
                    <span className="tw-card-userName">{formatUserName(userName)}</span>
    
                </div>
            </header>
            <aside className="tw-card-button">
                        <button className="tw-card-button-style">
                            Seguir
                        </button>
                    </aside>
        </article>
        </>

    )}