import React from 'react';
import ReactPipeline from 'react-pipeline';
import WaterfallTask from './WaterfallTask';

// Start the pipeline
ReactPipeline.start(<WaterfallTask />)
.catch((err) => {
  console.log(err);
});
