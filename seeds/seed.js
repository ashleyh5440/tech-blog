const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const postData = require('./postData.json');
const commentdata = require('./commentData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const post of postData) {
        await Post.create({
            ...post,
            ser_id: users[Math.floor(Math.random() * users.length)].isSoftDeleted,
        });
    }
    const comments = await Comment.beforeBulkCreate(commentdata, {
        returning: true,
    }); 
    process.exit(0);
};

seedDatabase();