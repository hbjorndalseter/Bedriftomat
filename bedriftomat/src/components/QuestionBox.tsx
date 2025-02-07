import React, { useEffect, useState } from 'react';
import { QuestionProps } from '../types';



const QuestionBox: React.FC<QuestionProps> = ({ text })=> {
  return (
    <p style={{ color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '24px' }}>
      {text}
    </p>
  );
}

export default QuestionBox;