import React from 'react';
import ReactPipeline, { Task } from 'react-pipeline';
import Print from './Print';
import Wait from './Wait';

// Start the pipeline
ReactPipeline.start(
  <Task>
    <Print stdout={process.stdout} message="starting" />
    <Wait duration={2000} />
    <Print stdout={process.stdout} message="done" />
  </Task>
);
