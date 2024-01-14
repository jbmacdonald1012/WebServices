const homeRoute = (req,res) => {
    res.send("Esteissy Macdonald");
}

const kidsRoute = (req, res) => {
    res.send("Logan Macdonald, Chloe Macdonald, Isabella Macdonald, Charlotte Macdonald");
}

module.exports = {
    homeRoute,
    kidsRoute,
};

