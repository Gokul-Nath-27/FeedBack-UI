const RatingRadioBtn = () => {
    const ratings = [1,2,3,4,5,6,7,8,9,10]

    return (
        <ul className="flex w-4/5 m-auto my-6 justify-center flex-wrap">
            {ratings.map((rating) => {
                return (
                    <li key={rating} className="font-medium h-10 w-10 mx-1 my-2 rounded-full bg-gray-500 hover:bg-brightPink hover:cursor-pointer flex items-center justify-center text-white">
                        {rating}
                    </li>
                )
                }
                    
            )}
        </ul>
    )
}

export default RatingRadioBtn
