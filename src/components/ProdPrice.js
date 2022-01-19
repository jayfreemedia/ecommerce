const ProdPrice = (props) => 

        <div id= 'prodprice'>
            <h1 className= 'prod-price'> ${props.price}</h1>
            <h2 className= 'prod-perc'>   {props.percent}% </h2>
            <h3 className= 'prod-save'>  ${props.discount} </h3>
        </div>

export default ProdPrice
