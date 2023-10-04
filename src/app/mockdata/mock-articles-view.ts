import { IArticle, IArticleView, IGetArticlesByKeywordResponse } from "../interfaces/IArticles";

const MockArticles: IArticle[] = [
  {
    id: 1,
    title: "Batman new movie in 2024?!",
    content: `Matt Reeves’ “<b>The Batman</b>” isn’t a superhero movie. Not really. All the trappings are there: the Batmobile, the rugged suit, the gadgets courtesy of trusty butler Alfred. And of course, at the center, is the Caped Crusader himself: brooding, tormented, seeking his own brand of nighttime justice in a Gotham City that’s spiraling into squalor and decay.

    But in Reeves’ confident hands, everything is breathtakingly alive and new. As director and co-writer, he’s taken what might seem like a familiar tale and made it epic, even operatic. His “Batman” is more akin to a gritty, ‘70s crime drama than a soaring and transporting blockbuster. With its kinetic, unpredictable action, it calls to mind films like “The Warriors” as well as one of the greatest of them all in the genre, “The French Connection.” And with a series of high-profile murders driving the plot, it sometimes feels as if the Zodiac killer is terrorizing the citizens of Gotham.`,
    publisher: "Antonis Misirgis",
    publishDate: new Date(),
    thumbnail: "https://images7.alphacoders.com/133/1330752.png",
  },
  {
    id: 2,
    title: "LOTR: Remastered end of 2023?",
    content: `<span class="lead-in-text-callout">Look, I see</span> why Peter Jackson did it. Why he rereleased, in December of last year, his <a href="https://www.wired.com/tag/the-lord-of-the-rings/" data-uri="06aaa6b106b533f83ca79f96ded371cf"><em>Lord of the Rings</em></a> trilogy, along with <em>The Nasty Hobbitses</em>—as I like to call them, channeling Gollum—in so-called “4K Ultra HD” (a redundancy). It’s a very 21st-century-filmmaker thing to do, this remastering business. Enrich the colors, sharpen the images, and your films hold up down through the ages. It’s practically a moral obligation, a question of clarity, of being clear, and if you <em>can</em> clarify Legolas by pumping an extra 10 million pixels into his perfect Elven pores, which comes out to something like 100 billion photons, all twinkling immortally through the cosmic sweep of spacetime, why then, <em>shouldn’t</em> you?`,
    publisher: "Antonis Misirgis",
    publishDate: new Date(),
    thumbnail: "https://images7.alphacoders.com/648/648145.jpg",
  },
  {
    id: 3,
    title: "Counter Strike 2 released!",
    content: "Counter-Strike 2 is definitely on the horizon. We have multiple reasons to believe that Counter-Strike 2 is launching today, on September 27th, 2023. Here is a CS2 release date and countdown timer, which helps you keep track of when Counter-Strike 2 is coming out. Several CS:GO players were not able to get into the CS2 beta test and have been eagerly waiting to try out the upgraded version. So, do keep your eyes glued to this timer and once it expires, you should be able to download and play Counter-Strike 2 right away on Steam.",
    publisher: "Antonis Misirgis",
    publishDate: new Date(),
    thumbnail: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2023/04/counter-strike-2-system-requirements.jpg",
  },
  {
    id: 4,
    title: "Joker 2: Η νέα ματιά στο sequel έχει τον Joaquin Phoenix σε πρώτο πλάνο",
    content: `<p>Εντελώς από το πουθενά πήραμε μια νέα γεύση από το άκρως αναμενόμενο <strong>Joker 2</strong> ή όπως επίσημα θα τιτλοφορείται ως "<strong>Joker: Folie à Deux</strong>", μέσα από το Instagram του <strong>Todd Phillips,</strong> σκηνοθέτη της ταινίας.&nbsp;</p>`,
    publisher: "Antonis Misirgis",
    publishDate: new Date(),
    thumbnail: "https://images.hdqwalls.com/wallpapers/joker-2-movie-1w.jpg",
  }
];
const MockArticlesView: IArticleView[] = MockArticles;
const MockArticlesResponse: IGetArticlesByKeywordResponse = 
{
  articles: MockArticles
}

export default MockArticlesView;
export {MockArticlesResponse};