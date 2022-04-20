const Stats = ({ feedBack }) => {
    return (
        <div className="flex justify-between container mx-auto max-w-screen-md my-4 font-bold">
            <p><span>{feedBack.length}</span> Reviews</p>
            <p>Average Rating:<span>{(feedBack.map((item) => (item.rating)).reduce((acc, curVal) => ((acc + curVal)),0)/feedBack.length).toFixed(2)}</span></p>
        </div>
    )
}

export default Stats
