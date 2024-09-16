import { memo } from "react";
import { StarEmpty, StarFull, StarHalf } from "./svgs";

const RenderStars = memo(({ className, rating }) => {
    const fullStars = Math.floor(Number(rating));
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const stars = [
        ...Array(fullStars).fill(null).map((_, i) => <StarFull className={className} key={`full-${i}`} />),
        ...(halfStar ? [<StarHalf className={className} key="half-star" />] : []),
        ...Array(emptyStars).fill(null).map((_, i) => <StarEmpty className={className} key={`empty-${i}`} />),
    ];

    return <>{stars}</>;
});

RenderStars.displayName = "RenderStars";

export default RenderStars;
