const ProdPrice = (item) => 

        <div className= 'prod-price-container'>
            <h1 className= 'prod-price'> ${item.price}</h1>
            <h2 className= 'prod-perc'>   {item.percent}% </h2>
            <h3 className= 'prod-save'>  ${item.discount} </h3>
        </div>

export default ProdPrice
