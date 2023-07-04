import React from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackContainer } from './Feedback.styled';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    this.setState(prevState => {
      return { [e.target.name]: (prevState[e.target.name] += 1) };
    });
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <FeedbackContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistic">
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </FeedbackContainer>
    );
  }
}

export default Feedback;