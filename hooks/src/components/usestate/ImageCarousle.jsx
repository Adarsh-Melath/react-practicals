import { useEffect, useState } from "react"

/**
 * ImageCarousel Component
 * ------------------------------------------------------------------
 * A simple image carousel implementation that allows users to
 * navigate through a predefined list of images using "left" and
 * "right" controls.
 *
 * Responsibilities:
 * - Maintain the index of the currently displayed image
 * - Update the displayed image whenever the index changes
 * - Provide navigation controls to move forward and backward
 *   through the image list
 *
 * React Concepts Demonstrated:
 * - useState for managing component state
 * - useEffect for reacting to state changes
 * - Conditional index logic for circular navigation
 *
 * Note:
 * This example uses text placeholders instead of real images
 * to focus on the carousel logic.
 */

const ImageCarousel = () => {

    /**
     * currentImageIndex
     * --------------------------------------------------------------
     * Represents the position of the current image in the `images`
     * array.
     *
     * setCurrentPageIndex:
     * Function used to update the index when navigating through
     * the carousel.
     */
    const [currentImageIndex, setCurrentPageIndex] = useState(0)

    /**
     * currentImage
     * --------------------------------------------------------------
     * Stores the currently displayed image title.
     *
     * In this simplified example, it is a string representing the
     * image identifier. In a real application, this could be a URL
     * or an object containing metadata about the image.
     */
    const [currentImage, setCurrentImage] = useState('');

    /**
     * images
     * --------------------------------------------------------------
     * Static list representing available images in the carousel.
     *
     * Each image contains:
     * - id    : unique identifier
     * - title : name or placeholder for the image
     *
     * In production applications, this data might come from an API
     * or external data source.
     */
    const images = [
        {
            id: 1,
            title: 'image1'
        },
        {
            id: 2,
            title: 'image2'
        },
        {
            id: 3,
            title: 'image3'
        }
    ]

    /**
     * useEffect Hook
     * --------------------------------------------------------------
     * This effect runs whenever `currentImageIndex` changes.
     *
     * Purpose:
     * Synchronizes the `currentImage` state with the image at the
     * current index in the `images` array.
     *
     * Dependency:
     * - currentImageIndex
     *
     * Behavior:
     * When the index changes, the corresponding image title is
     * retrieved and stored in `currentImage`.
     */
    useEffect(() => {
        setCurrentImage(images[currentImageIndex].title)
    }, [currentImageIndex])


    /**
     * handleNext
     * --------------------------------------------------------------
     * Moves the carousel forward to the next image.
     *
     * Logic:
     * - If the current index is less than the last index,
     *   increment the index.
     * - If the current index is the last image, wrap around
     *   to the first image (index 0).
     *
     * This creates a circular carousel behavior.
     */
    const handleNext = () => {
        setCurrentPageIndex(prev => prev < images.length - 1 ? prev + 1 : 0)
    }

    /**
     * handlePrevious
     * --------------------------------------------------------------
     * Moves the carousel backward to the previous image.
     *
     * Logic:
     * - If the current index is greater than 0,
     *   decrement the index.
     * - If the current index is already at the first image,
     *   wrap around to the last image.
     *
     * This ensures smooth circular navigation.
     */
    const handlePrevious = () => {
        setCurrentPageIndex(prev => prev > 0 ? prev - 1 : images.length - 1)
    }

    /**
     * Component Rendering
     * --------------------------------------------------------------
     * The UI consists of:
     *
     * 1. A left button to navigate to the previous image
     * 2. The current image title displayed in the center
     * 3. A right button to navigate to the next image
     */
    return (
        <>
            <button onClick={handlePrevious}>
                left
            </button>

            {currentImage}

            <button onClick={handleNext}>
                right
            </button>
        </>
    )
}

export default ImageCarousel