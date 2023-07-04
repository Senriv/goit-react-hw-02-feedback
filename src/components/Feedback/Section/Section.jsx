import PropTypes from 'prop-types';
import { FeedbackTitle } from './Section.styled';

export const Section = ({ title = 'Section title', children }) => {
  return (
    <section>
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
