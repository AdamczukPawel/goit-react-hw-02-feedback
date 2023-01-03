import PropTypes from 'prop-types';
// import styles from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map(option => (
                <button key={option} type="button" name={option} onClick={() => onLeaveFeedback(option)}>
                    {option}
                </button>
            ))}
        </>
    )
}

FeedbackOptions.propTypes = {
    option: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}