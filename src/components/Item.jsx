import PropTypes from 'prop-types'

function Item({marca ='faltou marca', ano_lacamento = 0}) {
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


   