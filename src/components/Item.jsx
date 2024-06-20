import PropTypes from 'prop-types'

export function Item({marca ='faltou marca', ano_lacamento = 0}) {
    return (
        <>
        <li>{marca} - {ano_lacamento}</li>
        </>
    )    
}


Item.propTypes={
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}


   