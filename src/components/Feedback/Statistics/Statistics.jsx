import PropTypes from 'prop-types';
import {
  FeedbackStatisticList,
  FeedbackStatisticItem,
  FeedbackStatistic,
  FeedbackStatisticSpan,
} from './Statistics.styled';

export const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (
  <FeedbackStatisticList>
    <FeedbackStatisticItem>
      <FeedbackStatistic>
        Good: <FeedbackStatisticSpan>{good}</FeedbackStatisticSpan>
      </FeedbackStatistic>
    </FeedbackStatisticItem>
    <FeedbackStatisticItem>
      <FeedbackStatistic>
        Neutral: <FeedbackStatisticSpan>{neutral}</FeedbackStatisticSpan>
      </FeedbackStatistic>
    </FeedbackStatisticItem>
    <FeedbackStatisticItem>
      <FeedbackStatistic>
        Bad: <FeedbackStatisticSpan>{bad}</FeedbackStatisticSpan>
      </FeedbackStatistic>
    </FeedbackStatisticItem>
    <FeedbackStatisticItem>
      <FeedbackStatistic>
        Total:{' '}
        <FeedbackStatisticSpan>
          {countTotalFeedback(good, neutral, bad)}
        </FeedbackStatisticSpan>
      </FeedbackStatistic>
    </FeedbackStatisticItem>
    <FeedbackStatisticItem>
      <FeedbackStatistic>
        Positive feedback:{' '}
        <FeedbackStatisticSpan>
          {countTotalFeedback(good, neutral, bad) > 0
            ? countPositiveFeedbackPercentage(good, neutral, bad)
            : 0}
          %
        </FeedbackStatisticSpan>
      </FeedbackStatistic>
    </FeedbackStatisticItem>
  </FeedbackStatisticList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};
