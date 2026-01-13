import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button
      {...props}
      className="bg-slate-400 p-2 rounded-md text-white">
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;