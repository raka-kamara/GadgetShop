import ReviewCard from "./ReviewCard";

const UserReview = () => {
    return (
        <div className="lg:flex items-center justify-center gap-4">
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
        </div>
    );
};

export default UserReview;