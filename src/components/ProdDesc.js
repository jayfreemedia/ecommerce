const ProdDesc = (item) => {
    return (
        <div id= 'proddesc'>
            <h1 className= 'company-name'>{item.companyname}</h1>
            <h2 className= 'prod-title'>{item.title}</h2>
            <h3 className= 'body'> {item.description}</h3>
        </div>
    )
}

export default ProdDesc
