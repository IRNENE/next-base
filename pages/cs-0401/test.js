import React from 'react'
import { increase } from './reducer'

const sampleData = [
  {
    id: 1,
    name: '小熊餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
];

export default function Test(){
  console.log(increase(sampleData,1));
  console.log(increase(sampleData,2));


return <div>test</div>
}
