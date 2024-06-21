import PropTypes from 'prop-types'

function Item({marca ='faltou marca', ano_lancamento = 0}) {
    return (
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )    
}


Item.propTypes={
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

export default Item
   