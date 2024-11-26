import React from "react";

const reviews = [
  {
    name: "Anirban Chatterjee",
    review:
      "This app helped me to get a job in my dream company. I was stressed about not getting a career opportunity after my graduation. One prediction from an astrologer gave me a ray of hope, and within a few months, I had a job offer in hand. Thank you so much Jyotish Aloy for helping me out!",
    rating: "5/5 stars",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Tapati Mondal",
    review:
      "I highly recommend Jyotish Aloy! Their accurate birth chart analysis and daily horoscopes have helped me navigate life's challenges. The modern design and intuitive interface make it easy to use.",
    rating: "5/5 stars",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Ishan Mitra",
    review:
      "Jyotish Aloy is a revelation! The love compatibility tool and community forum are invaluable resources. Expert astrologers genuinely care, and the site's security measures reassure. Jyotish Aloy improved my self-awareness and relationships - I've already recommended it!",
    rating: "5/5 stars",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

const Reviews = () => {
  return (
    <section className="bg-yellow-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">REVIEWS</h2>
        <p className="text-lg mb-8">Reviews by our Customers</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 relative border border-gray-200"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 rounded-full border-4 border-yellow-500 shadow-md"
                />
              </div>
              <div className="pt-10">
                <h3 className="text-xl font-semibold text-yellow-700 mb-2">
                  {review.name}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{review.review}</p>
                <p className="text-yellow-600 font-medium">{review.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
