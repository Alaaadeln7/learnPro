import ReviewItem from "./ReviewItem";

export default function Reviews() {
  return (
    <section>
      <h1 className="text-2xl my-5">Reviews</h1>
      <div className="flex flex-col justify-center items-start">
        <div className="flex flex-col gap-5">
          <ReviewItem />
          <ReviewItem />
        </div>
      </div>
    </section>
  );
}
