import React from 'react';
import ReactPipeline, { Pipeline } from 'react-pipeline';
import Print from './Print';
import Wait from './Wait';

// Start the pipeline
ReactPipeline.start(
  <Pipeline>
    <Print stdout={process.stdout} message="starting" />
    <Wait duration={2000} />
    <Print stdout={process.stdout} message="done" />
  </Pipeline>
);
