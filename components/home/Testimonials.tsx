import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    title: "High Quality Website for my Yoga Business",
    name: "Maria Zillinger",
    description:
      "I am so happy with the design of my new website. It is exactly what I wanted. I will definitely be coming back for more projects.",
    rating: 5,
  },
  {
    description:
      "I was looking for a Website for my Videography business and I found the perfect design here. I am very happy with the result.",
    name: "Julian Stümpfl",
    title: "Great Website Design for my video Website",
    rating: 5,
  },
  {
    description:
      "As a Craftsman I needed a website to showcase my work. I found the perfect design here. I am very happy with the result.",
    name: "Nicolai Stümpfl",
    title: "Great Website Design for my craftsman business",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center py-8">
        <h1 className="text-4xl">Customers Feedback</h1>
      </div>
      <div className="grid xl:grid-cols-3 gap-8 items-center justify-center">
        {testimonials.map((testimonial, index) => {
          return <TestimonialCard key={index} {...testimonial} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;
