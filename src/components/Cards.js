import './../styles/cards.css'

function SimpleCard({title, children}){
    return <div className="card">
        <h3>{title}</h3>
        <p>
            {children}
        </p>
    </div>
}

function CardWithLink({title, children, href}){
    return <a href={href} target="_blank">
        <SimpleCard title={title}>
            {children}
        </SimpleCard>
    </a>

}

export {
    SimpleCard,
    CardWithLink
}