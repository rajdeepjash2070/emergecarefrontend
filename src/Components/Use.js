exports.createReviews = catchAsyncError(async (req, res, next) => {

    // spread
    const { rating, comment, productId } = req.body;

    // create  new review obj
    const review = {
        user: req.user._id,
        name: req.user.name,
        comment,
        rating: Number(rating),
    }

    // check if the user is already reviewed the product or not
    // first of all we need to find the product

    const product = await Product.findById(productId);
    // so now we need to find the user in the reviews of this product
    const isReviewed = product.reviews.find((rev) => rev.user.toString() === req.user._id.toString());

    //if the user is already reviewed the product
    // then update the review
    if (isReviewed) {
        // first find the review
        product.reviews.forEach((rev) => {
            if (rev.user.toString() === req.user._id.toString()) {
                rev.comment = comment;
                rev.rating = rating;
            }
        });
    }
    else {
        // save the new review
        product.reviews.push(review);
        // update the count of reviews
        product.noOfReviews = product.reviews.length;

    }
    // update the ratings
    let avg = 0;
    product.reviews.forEach((rev) => {
        avg += rev.rating;
    });

    product.ratings = avg / product.reviews.length;

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
        message: "Review added successfully.",
        review
    });
});