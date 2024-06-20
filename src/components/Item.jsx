import PropTypes from 'prop-types'

function Item({marca, ano_lacamento}) {
    return (
        <>
        <li>{marca} - {ano_lacamento}</li>
        </>
    )    
}

export default Item


Item.propTypes={
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps={
    marca: 'faltou a marca',
    ano_lacamento: 0,
}
   