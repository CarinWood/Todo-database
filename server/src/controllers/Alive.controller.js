const apiAlive = async (req, res) => {
    res.status(200).send('API is ALIVE!')
}

export default {
    apiAlive
}