const Carousel = require("../models/carouselmodel")

const getCarouseldata = async (req, res) => {
    try {
        const data = await Carousel.find();
        res.status(200).json(
            data
        )
    }

    catch (ex) {
        res.status(500).json({
            message: "internal server error"
        })
    }
}

module.exports = getCarouseldata;