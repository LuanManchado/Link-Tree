document.addEventListener('DOMContentLoaded', () => 
{
    new TypeIt('.text', {
    speed: 150,
    loop: true,
    })

    .type('Streamer - Twitch!', {delay: 900}) .delete(18)
    .type('Youtuber!', {delay: 900}) .delete(9)
    .type('TikToker!', {delay: 900}) .delete(9)
    .type('Futuro jogador do complexo!', {delay: 900}) .delete(27)
    .go()
});



