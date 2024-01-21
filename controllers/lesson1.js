const homeRoute = (req,res) => {
    res.send("Jason Macdonald's Contacts API");
}

const kidsRoute = (req, res) => {
    res.send("Logan Macdonald, Chloe Macdonald, Isabella Macdonald, Charlotte Macdonald");
}

module.exports = {
    homeRoute,
    kidsRoute,
};

