const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const fs = require('fs'); // this engine requires the fs module like we did Saturday

// make sure you change the references of madeline and hypatia to "portal"
app.engine('portal', (filePath, options, callback) => {
  // define the view engine called portal
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content
      .toString()
      .replace("#title#", "<title>" + options.title + "</title>")
      .replace("#message#", "<h1>" + options.message + "</h1>")
      .replace("#content#", "<div>" + options.content + "</div>")
      .replace('#url#', options.url)
    return callback(null, rendered);
  });
});
app.set('views', './views');
app.set('view engine', 'portal');


app.get('/0', (req, res) => {
  res.render('template2', {
    title: 'Anime',
    message: 'Naruto',
    content: 'The true measure of a shinobi is not how he lives, but how he dies.',
    url: 'https://wallpapers.com/images/hd/jiraiya-and-naruto-sweet-moment-vnf3dw6ma3n2b11l.jpg'
  });
});


app.get('/1', (req, res) => {
  res.render('template2', {
    title: 'Anime',
    message: 'Blue Lock!',
    content: 'I crushed… the dreams of these eleven people. My goal did this. What is this feeling? It’s so good',
    url: 'https://www.theanimedaily.com/wp-content/uploads/2022/10/blue-lock-194.jpg'
  });
});


app.get('/2', (req, res) => {
  res.render('template2', {
    title: 'Anime',
    message: 'Bleach!',
    content: 'Revenge is just the path you took to escape your suffering',
    url: 'https://pbs.twimg.com/media/FV9GzOyWIAACDLs.jpg'
  });
});

app.get('/3', (req, res) => {
  res.render('template2', {
    title: 'Anime',
    message: 'Death Note',
    content: 'In Human Society, There Are Very Few People Who Truly Trust Each Other.',
    url: 'https://2.bp.blogspot.com/-whvilOh8vmU/Wct7vcxZy0I/AAAAAAAAHgM/zDqQSpJ2KHs9HBraP_9QPM8YpKWgAAfjACLcBGAs/s1600/DeathNote32.jpg'
  });
});



app.get('/4', (req, res) => {
  res.render('template2', {
    title: 'Anime',
    message: 'Hajime No Ippo!',
    content: 'Run until you can’t run anymore, and then run again. Constant effort is life’s greatest shortcut.',
    url: 'https://miro.medium.com/v2/resize:fit:1400/1*n-NT302961yX9NtmWqD2fg.jpeg'
  });
});



app.get('/5', (req, res) => {
  res.render('template2', {
    title: 'Anime',
    message: 'Black Clover!',
    content: 'Surpass Your Limits. Right Here. Right Now.',
    url: 'https://m.media-amazon.com/images/M/MV5BMGI4NzdjYjctZDk5Yy00OTU1LWIyOGMtZjA2MTM3ZTU4ZTJkXkEyXkFqcGdeQXVyMTI4NzE1MTgz._V1_.jpg'
  });
});



app.get('/6', (req, res) => {
  res.render('template2', {
    title: 'Anime',
    message: 'Dragon Ball Z!',
    content: 'My Motivation Was To Be The Best, As I Always Have Been',
    url: 'https://wallpapers-clan.com/wp-content/uploads/2023/08/dbz-vegeta-blue-wallpaper.jpg'
  });
});



app.get('/7', (req, res) => {
  res.render('template2', {
    title: 'Anime',
    message: 'Demon Slayer!',
    content: 'Killing for no reason without a second thought. Without any hint of remorse. I won’t allow this kind of tyranny!',
    url: 'https://pbs.twimg.com/media/E5VizzZXIAA_261.jpg:large'
  });
});



app.get('/8', (req, res) => {
  res.render('template2', {
    title: 'Anime',
    message: 'Jujutsu Kaisen ',
    content: 'Searching for someone to blame is just a pain.',
    url: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/gojo-satoru.jpg'
  });
});



app.get('/9', (req, res) => {
  res.render('template2', {
    title: 'Anime',
    message: 'My Hero Academia !',
    content: 'It Is Fine Now. Why? Because I Am Here! !',
    url: 'https://www.meme-arsenal.com/memes/7dc1ec1de8fb701a66bb71e35f80f967.jpg'
  });
});





app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});