import React, { Component } from 'react';
import { getComments } from './actions';
import { commentsStore } from './stores';
import { }

export class AppContainer extends Component {

  componentDidMount() {
    this._boundForceUpdate = () => this.forceUpdate();
    commentsStore.addEventListener('change', this._boundForceUpdate);
    getComments();
  }

  componentWillUnmount() {
    commentsStore.removeEventListener('change', this._boundForceUpdate);
  }

  render() {

  }
}
