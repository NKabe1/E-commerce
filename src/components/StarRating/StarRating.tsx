import StarRatings from "react-star-ratings";

export function StarRating({ itemRating }: {itemRating: number | undefined}) {
  return (
    <StarRatings
      rating={itemRating}
      starRatedColor="rgb(255,226,52)"
      numberOfStars={5}
      name="rating"
      starDimension="16px"
      starSpacing="2px"
    />
  );
}
