import React, {useEffect, useState} from "react";
import {RatingPropsTypes} from "./types";
import StarIcon from './star.svg'
import cn from "classnames";
import s from "./Rating.module.scss";

export default function Rating({isEditable = false, rating,setRating, ...props}: RatingPropsTypes): JSX.Element {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r:JSX.Element, i: number) => {
            return (
                <StarIcon className={cn(s.star, {
                    [s.field]: i < currentRating,
                })} />
            )
        })
        setRatingArray(updatedArray);
    }

    return (
        <div{...props}>
        {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
    </div>)
};