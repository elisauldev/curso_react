 export function TwitterFollowCard({userName, name, isFollowing}) {
    return (
 <article className="tw-card-follow">
            <header className="tw-card-header">
                <img className="tw-card-image" src={`https://img.freepik.com/free-psd/
                3d-illustration-person-with-sunglasses_23-2149436188.jpg?semt=ais_hybrid&w=740&q=80/${userName}`}
                alt="Avatar Random" />
                <div className="tw-card-info">
                    <strong className="tw-card-name">
                        {name}
                    </strong>
                    <span className="tw-card-userName">@{userName}</span>
    
                </div>
            </header>
            <aside className="tw-card-button">
                        <button className="tw-card-button-style">
                            Seguir
                        </button>
                    </aside>
        </article>)
        }