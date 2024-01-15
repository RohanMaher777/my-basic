import './../styles/cards.css'

function CardHeader({children}){
    return <h3 className= "card-header">{children}</h3>
}

function CardPara({children}){
    return <p>
        {children}
    </p>
}

function Card({children}){
    return <div className='card'>
        {children}
    </div>
}

function SimpleCard({title, children}){
    return <Card>
        <CardHeader>{title}</CardHeader>
        <CardPara>{children}</CardPara>
    </Card>
}

function CardWithLink({title, children, href}){
    return <a href={href} target="_blank">
       <Card>
        <CardHeader>{title}</CardHeader>
        <CardPara>{children}</CardPara>
    </Card>
    </a>
}

function CardWithImage({title, src, children}){
    return <Card>
        <CardHeader>{title}</CardHeader>
        <div>
            <img src={src}/>
        </div>
        <CardPara>{children}</CardPara>
    </Card>

}

export {
    SimpleCard,
    CardWithLink,
    CardWithImage
}