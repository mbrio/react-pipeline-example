import React from 'react';
import { Task } from 'react-pipeline';
import path from 'path';
import Print from './Print';
import ReadFile from './ReadFile';
import CountWords from './CountWords';
import TopNWords from './TopNWords';
import ObjectToJson from './ObjectToJson';

export default class WaterfallTask extends Task {
  constructor(props, context) {
    super(props, context);
    this.handleComplete = ::this.handleComplete;
  }

  state = { result: '' };
  handleComplete(result) {
    this.setState({ result });
  }

  render() {
    const input = path.join(__dirname, '..', 'spec', 'fixtures', 'declaration-of-independence.txt');

    return (
      <Task>
        <ReadFile path={input} onComplete={this.handleComplete} />
        <CountWords text={this.state.result} onComplete={this.handleComplete} />
        <TopNWords words={this.state.result} onComplete={this.handleComplete} />
        <ObjectToJson obj={this.state.result} onComplete={this.handleComplete} />
        <Print stdout={process.stdout} message={this.state.result} />
      </Task>
    );
  }
}
