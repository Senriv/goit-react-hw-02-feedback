import PropTypes from 'prop-types';
import {
  FeedbackBtnList,
  FeedbackBtnItem,
  FeedbackBtn,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackBtnList>
    {options.map((option, index) => (
      <FeedbackBtnItem key={index}>
        <FeedbackBtn onClick={onLeaveFeedback} name={option}>
          {option.replace(option[0], option[0].toUpperCase())}
        </FeedbackBtn>
      </FeedbackBtnItem>
    ))}
  </FeedbackBtnList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
