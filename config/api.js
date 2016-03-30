module.exports = {
    root: {
        message: 'Welcome to the root of the api. Here are your options from here on',
        secure: '/secure --Services which require authentication are inside this branch',
        blog: '/blog --Blog posts and such'
    },
    
    blog: {
        root: {
            message: 'You are currently at /blog',
            posts: 'Shows amount of posts in the database + the first 50 blog posts',
            posts_id: 'Shows up to 50 blog posts using the id as offset'
        }
    }
}