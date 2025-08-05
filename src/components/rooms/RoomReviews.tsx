// components/rooms/RoomReviews.tsx
import React from 'react';
import { Review } from '@/lib/types'; // สมมติว่ามี Type 'Review'

interface RoomReviewsProps {
  reviews: Review[];
}

const RoomReviews: React.FC<RoomReviewsProps> = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-gray-600 p-4 bg-gray-50 rounded-lg">
        ยังไม่มีรีวิวสำหรับห้องพักนี้
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-2">
            <div className="font-bold text-gray-800 mr-2">{review.reviewerName}</div>
            <div className="text-yellow-500 flex items-center">
              {/* Star rating display */}
              {'★'.repeat(review.rating)}
              {'☆'.repeat(5 - review.rating)}
            </div>
            <span className="text-sm text-gray-500 ml-auto">
              {review.date ? new Date(review.date).toLocaleDateString('th-TH', {
                year: 'numeric', month: 'long', day: 'numeric'
              }) : 'ไม่ระบุวันที่'}
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RoomReviews;