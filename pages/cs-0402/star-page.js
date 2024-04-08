import { useState } from 'react';
import StarRating from '@/components/star-rating';
import { FaHeart, FaStar } from 'react-icons/fa';

export default function StarPage() {
  const [rating1, setRating1] = useState(3);
  const [rating2, setRating2] = useState(1);

  return (
    <>
      <h1>星星評分元件測試頁</h1>
      <h2>對照組</h2>
      <StarRating />
      <h2>測試組</h2>
      <StarRating
        initRating={rating1}
        onRatingChange={setRating1}
        color="pink"
        icon={<FaHeart />}
      />
      {/* <StarRating
        initRating={rating2}
        maxCount={10}
        onRatingChange={setRating2}
        color="#ff6600"
        icon={<FaStar />}
      /> */}
      <button
        onClick={() => {
          setRating1(5);
        }}
      >
        設定rating1為5
      </button>
    </>
  );
}
