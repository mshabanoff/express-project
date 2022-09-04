// const path = require('path');

const getMessages = (req, res) => {
    res.render('messages', {
        title: 'Messages to my Friends!',
        friends: 'Elon Musk'
    })
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
}

const postMessage = (req, res) => {
    console.log('Updating messages')
}

module.exports = {
    getMessages,
    postMessage
}