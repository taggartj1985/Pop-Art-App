use popArt_Hub;
db.dropDatabase();

db.artists.insertMany([
   {
      name: "Andy Warhol",
      shortBio: "Andy Warhol was an American pop artist best known using both avant-garde and commercial sensibilities that often blurred the lines between fine art and mainstream aesthetics. He ventured into a variety of art forms including performance art, filmmaking, video installations, and writing.",
      careerBio: [
        "In the early 1960s, he began to experiment with reproductions based on advertisements, newspaper headlines and other mass-produced images from American popular culture such as Campbell's soup tins and Coca Cola bottles. In 1962, he began his series portraits of Marilyn Monroe. Other subjects given similar treatment included Jackie Kennedy and Elvis Presley. The same year he took part in the New Realists exhibition in New York, which was the first important survey of Pop Art.",
        "In 1963, Warhol began to make experimental films. His studio, known as the Factory, became a meeting point for young artists, actors, musicians and hangers-on. One of these, Valerie Solanas, shot and seriously wounded him in 1968."
      ],
      artistImageURL: "https://d32dm0rphc51dk.cloudfront.net/HmNcK3X-t6WR9UV9AJAb4g/large.jpg"
    },

    {
      name: "Roy Lichtenstein",
      shortBio: "Roy Lichtenstein was an American pop artist. During the 1960s, he became a leading figure in the new art movement among many other artists. His work defined the premise of pop art through parody. Inspired by the comic strip, Lichtenstein produced precise compositions that documented while they parodied, often in a tongue-in-cheek manner. His work was influenced by popular advertising and the comic book style.",
      careerBio: [
        "A key figure in the Pop art movement and beyond, Roy Lichtenstein grounded his profoundly inventive career in imitation—beginning by borrowing images from comic books and advertisements in the early 1960s, and eventually encompassing those of everyday objects, artistic styles, and art history itself. Referring to Lichtenstein’s equalizing treatment of the subjects he chose for his art, Richard Hamilton, a fellow Pop artist, wrote in 1968: “Parthenon, Picasso or Polynesian maiden are reduced to the same kind of cliché by the syntax of the print: reproducing a Lichtenstein is like throwing a fish back into water.”",
        "Lichtenstein's emphasis on methods of mechanical reproduction - particularly through his signature use of Ben-Day dots - highlighted one of the central lessons of Pop art, that all forms of communication, all messages, are filtered through codes or languages. Arguably, he learned his appreciation of the value of codes from his early work, which drew on an eclectic range of modern painting. This appreciation may also have later encouraged him to make work inspired by masterpieces of modern art; in these works he argued that high art and popular art were no different: both rely on code."
      ],
      artistImageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Roy_Lichtenstein.jpg/1024px-Roy_Lichtenstein.jpg"
    },

    {
      name: "Robert Rauschenberg",
      shortBio: "Robert Rauschenberg was an American painter and graphic artist whose early works anticipated the pop art movement. Rauschenberg is well known for his combines of the 1950s, in which non-traditional materials and objects were employed in various combinations. Rauschenberg was both a painter and a sculptor, and the combines are a combination of the two, but he also worked with photography, printmaking, papermaking and performance.",
      artistImageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Robert_Rauschenberg_%281968%29.jpg/1024px-Robert_Rauschenberg_%281968%29.jpg"
    },

    {
      name: "Richard Hamiliton",
      shortBio: "Richard Hamilton was an English painter and collage artist. His 1955 exhibition Man, Machine and Motion (Hatton Gallery, Newcastle upon Tyne) and his 1956 collage Just what is it that makes today's homes so different, so appealing?, produced for the This Is Tomorrow exhibition of the Independent Group in London, are considered by critics and historians to be among the earliest works of pop art.",
      artistImageURL: "https://upload.wikimedia.org/wikipedia/en/8/80/Richard_Hamilton_Artist.jpg"
    },

    {
      name: "Peter Blake",
      shortBio: "Peter Blake is an English pop artist, best known for co-creating the sleeve design for the Beatles' album Sgt. Pepper's Lonely Hearts Club Band and for two of the Who's albums. One of the best known British pop artists, Blake is considered to be a prominent figure in the pop art movement.Central to his paintings are his interest in images from popular culture which have infused his collages.",
      artistImageURL: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/02/06/09/peterblake.jpg?width=1368&height=912&fit=bounds&format=pjpg&auto=webp&quality=70"
    }
]);

db.artworks.insertMany([
  {
    title: "Campbell’s Soup Cans",
    artist: "Andy Warhol",
    category: "painting",
    year: 1962,
    medium: "Synthetic polymer paint on canvas",
    imageURL: "https://www.moma.org/learn/moma_learning/_assets/www.moma.org/wp/moma_learning/wp-content/uploads/2012/06/Warhol.-Soup-Cans-469x292.jpg"
  },

  {
    title: "Marilyn x 100",
    artist: "Andy Warhol",
    category: "painting",
    year: 1962,
    medium: "Screenprint ink and synthetic polymer paint on canvas",
    imageURL: "https://6d49d47bd32a151032ae-907965fc79c9900a93c12efeb23103bd.ssl.cf1.rackcdn.com/artworks/andy_warhol_1.jpg"
  },

  {
    title: "Velvet Underground Cover",
    artist: "Andy Warhol",
    category: "album cover",
    year: 1967,
    caption: "Many people know that Andy Warhol designed the now-famous banana artwork for The Velvet Underground’s first record, The Velvet Underground & Nico. What some may not know is that Andy Warhol was actually the band’s manager during that time as well. Born out of Warhol’s desire to make art in as many different mediums as possible, he worked with the band to create a strange, cacophonous, distorted record that took on topics that other bands at the time wouldn’t. While the record didn’t sell many copies, it is still considered to be one of the most influential albums in modern rock music.",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/0/0c/Velvet_Underground_and_Nico.jpg",
    musicVideo: "https://www.youtube.com/watch?v=CGqwy_DQnS4&list=PLBkPWPmDlcDFTYkPNfes6HiKyZLPA242u&index=5"
  },

  {
    title: "Skulls",
    artist: "Andy Warhol",
    category: "painting",
    year: 1976,
    caption: "After he was shot and critically injured in 1968, Warhol became even more obsessed with the theme of death than he had been previously. The skull, a traditional symbol of mortality, is repeated six times, with the impenetrable darkness of the hollow eye sockets echoed in each image. The shadow cast by the skull resembles a baby’s profile, although whether this was intentional is unknown as Warhol did not take the photograph that the screenprint is based on. It seems unlikely, however, that this effective combination of both life and death would escape Warhol’s sharp gaze. In contrast to the sinister subject, the colours are vibrant. Perhaps Warhol is attempting to acknowledge that death is not something to be feared but instead, should be accepted as part of life.",
    medium: "Acrylic paint and silkscreen on 6 canvases",
    imageURL: "https://www.artfund.org/gallery/740x500/assets/what-we-do/art-weve-helped-buy/artwork/2008/2008013_Warh_Skull.jpg"
  },

  {
    title: "Empire",
    artist: "Andy Warhol",
    year: 1964,
    caption: "Empire consists of a single stationary shot of the Empire State Building filmed from 8:06 p.m. to 2:42 a.m., July 25–26, 1964. The eight-hour, five-minute film, which is typically shown in a theater, lacks a traditional narrative or characters. The passage from daylight to darkness becomes the film’s narrative, while the protagonist is the iconic building that was (and is again) the tallest in New York City. Warhol lengthened Empire’s running time by projecting the film at a speed of sixteen frames per second, slower than its shooting speed of twenty-four frames per second, thus making the progression to darkness almost imperceptible. Non-events such as a blinking light at the top of a neighboring building mark the passage of time. According to Warhol, the point of this film—perhaps his most famous and influential cinematic work—is to 'see time go by'.",
    category: 'film',
    filmURL: "https://www.youtube.com/embed/-sSsWj2HWk0",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/2/24/Empire_Screenshot_Warhol.jpg"
  },

  {
    title: "Whaam!",
    artist: "Roy Lichtenstein",
    category: "painting",
    year: 1963,
    medium: "Acrylic and oil paint on canvas",
    imageURL: "https://www.tate.org.uk/art/images/work/T/T00/T00897_10.jpg"
  },

  {
    title: "Drowning Girl",
    artist: "Roy Lichtenstein",
    category: "painting",
    year: 1963,
    medium: "Oil and synthetic polymer paint on canvas",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/d/df/Roy_Lichtenstein_Drowning_Girl.jpg"
  },

  {
    title: "Brushstroke",
    artist: "Roy Lichtenstein",
    category: "painting",
    year: 1965,
    medium: "Screenprint on paper",
    imageURL: "https://www.tate.org.uk/art/images/work/P/P07/P07354_10.jpg"
  },

  {
    title: "Explosion",
    artist: "Roy Lichtenstein",
    category: "painting",
    year: 1965,
    medium: "Lithograph on paper",
    imageURL: "https://www.tate.org.uk/art/images/work/P/P01/P01796_10.jpg"
  },

  {
      title: "Retroactive I",
      artist: "Robert Rauschenberg",
      category: "painting",
      year: 1963,
      medium: "Oil and silkscreen ink on canvas",
      imageURL: "https://www.rauschenbergfoundation.org/sites/default/files/styles/artwork_fullsize/public/images_artwork/64.006.jpg"
  },

  {
    title: "Storyline I (Reels [B+C])",
    artist: "Robert Rauschenberg",
    category: "painting",
    year: 1968,
    medium: "Lithograph",
    imageURL: "https://www.rauschenbergfoundation.org/sites/default/files/styles/artwork_fullsize/public/images_artwork/68.E004.jpg"
  },

  {
    title: "Just what is it that makes today’s homes so different, so appealing?",
    artist: "Richard Hamilton",
    category: "painting",
    year: 1956,
    medium: "Collage",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/f/ff/Hamilton-appealing2.jpg"
  },

  {
    title: "My Marilyn",
    artist: "Richard Hamilton",
    category: "painting",
    year: 1965,
    medium: "Screenprint on paper",
    imageURL: "https://www.tate.org.uk/art/images/work/P/P04/P04251_10.jpg"
  },

  {
    title: "Sgt. Pepper's Lonely Hearts Club Band",
    artist: "Peter Blake",
    category: "painting",
    year :1967,
    medium: "Print, collage",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg"
  },

  {
      title: "Self-Portrait with Badges",
      artist: "Peter Blake",
      cateogry: "painting",
      year: 1961,
      medium: "Oil paint on board",
      imageURL: "https://www.tate.org.uk/art/images/work/T/T02/T02406_10.jpg"

  }

])
