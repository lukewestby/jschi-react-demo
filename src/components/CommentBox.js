import React, { Component } from 'react';
import StyleSheet from 'stilr';
import buttonStyles from '../styles/buttons';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  commentBox: {
    resize: 'none',
    outline: '0',
    display: 'block',
    width: '100%',
    padding: '8px',
    margin: '0',
    borderRadius: '3px',
    border: '1px solid #a7a7a7',
    boxSizing: 'border-box',
    ':focus': {
      borderColor: colors.BLUE
    }
  },
  buttonContainer: {
    padding: '8px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  message: {
    fontSize: '1.3em',
    color: colors.BLUE
  }
});

export default class CommentsList extends Component {

  state = {
    textAreaHeight: 'auto'
  };

  getAdjustedBoxHeight() {
    return this.refs.textArea.getDOMNode().scrollHeight + 3;
  }

  resize() {
    requestAnimationFrame(() => {
      this.setState({
        textAreaHeight: 'auto'
      });
      this.setState({
        textAreaHeight: this.getAdjustedBoxHeight()
      });
    }, 0);
  }

  onChange(ev) {
    this.props.onChange(ev.target.value);
    this.resize();
  }

  trySubmitText() {
    if(this.textIsEmpty(this.props.textContent)) return;
    this.props.onSubmit(this.props.textContent);
  }

  textIsEmpty(text) {
    return !text || /^\s*$/.test(text)
  }

  render() {
    const { textContent } = this.props;
    return (
      <div>
        <textarea ref="textArea"
                  className={styles.commentBox}
                  style={{ width: '100%', height: this.state.textAreaHeight }}
                  placeholder='Enter a comment'
                  value={textContent}
                  onChange={(ev) => this.onChange(ev)}
                  onBlur={() => this.resize()}>
        </textarea>
        <div className={styles.buttonContainer}>
          <span className={styles.message}>
            {this.props.message}
          </span>
          <button className={buttonStyles.base}
                  onClick={() => this.trySubmitText()}
                  disabled={this.textIsEmpty(textContent)}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
