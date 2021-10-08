import PropTypes from "prop-types";

const Filter = ({ filter, handleChange }) => {
  return (
    <label>
      <h3>Find contacts by name</h3>
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
