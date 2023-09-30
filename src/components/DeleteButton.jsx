import PropTypes from 'prop-types'
import useCollection from '../hooks/useCollection'

DeleteButton.propTypes = {
    itemId: PropTypes.string,
    itemName: PropTypes.string,
}

export default function DeleteButton({itemId, itemName}) {
    const {deleteItem} = useCollection()

    const handleDelete = () => {
        if(confirm(`Tem certeza que deseja excluir ${itemName}?`)) {
            deleteItem(itemId)
        }
    }

    return (
        <button 
            style={{
                backgroundColor: 'red', 
                borderRadius: '.5rem',
                padding: '1rem',
                border: 0,
                cursor: 'pointer'
            }}
            onClick={handleDelete}
        >
            Excluir
        </button>
    )
}