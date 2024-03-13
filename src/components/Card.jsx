import PropTypes from 'prop-types'
import Button from './Button'

const Card = ({ children }) => {
  return (
    <>
      <Button className="p-4 h-24 w-auto bg-primary text-white text-xl font-semibold rounded-md hover:scale-105 transition-all ease-in-out">
        {children}
      </Button>
    </>
  )
}

Card.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Card
