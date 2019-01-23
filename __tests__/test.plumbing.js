const parseRawApiResponse = require("../plumbing");

test("API parser gets every record", () => {
  expect(parseRawApiResponse(TERRIBLE_MOCK)).toHaveLength(10);
});

test("items in the result have the data from the requirements", () => {
  expect(
    parseRawApiResponse(TERRIBLE_MOCK).every(
      obj =>
        Object.keys(obj) ===
        [
          "authors",
          "title",
          "publisher",
          "publishDate",
          "description",
          "imageLinks",
          "infoLink"
        ]
    )
  );
});

const TERRIBLE_MOCK = {
  kind: "books#volumes",
  totalItems: 2004,
  items: [
    {
      kind: "books#volume",
      id: "mbUwNDfOBxQC",
      etag: "q2iqdPVbm38",
      selfLink: "https://www.googleapis.com/books/v1/volumes/mbUwNDfOBxQC",
      volumeInfo: {
        title: "Taco USA",
        subtitle: "How Mexican Food Conquered America",
        authors: ["Gustavo Arellano"],
        publisher: "Simon and Schuster",
        publishedDate: "2013-04-16",
        description:
          "The award-winning ¡Ask a Mexican! columnist presents a narrative history of the progression of Mexican cuisine in the United States, sharing a century's worth of whimsical anecdotes and cultural criticism to address questions about culinary authenticity and the source of Mexican food's popularity. 25,000 first printing.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781439148624"
          },
          {
            type: "ISBN_10",
            identifier: "1439148627"
          }
        ],
        readingModes: {
          text: false,
          image: false
        },
        pageCount: 320,
        printType: "BOOK",
        categories: ["Biography & Autobiography"],
        averageRating: 3.5,
        ratingsCount: 16,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=mbUwNDfOBxQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=mbUwNDfOBxQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=mbUwNDfOBxQC&printsec=frontcover&dq=%3Dmexican+food&hl=&cd=1&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=mbUwNDfOBxQC&dq=%3Dmexican+food&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Taco_USA.html?hl=&id=mbUwNDfOBxQC"
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
        epub: {
          isAvailable: false
        },
        pdf: {
          isAvailable: false
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=mbUwNDfOBxQC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "The award-winning ¡Ask a Mexican! columnist presents a narrative history of the progression of Mexican cuisine in the United States, sharing a century&#39;s worth of whimsical anecdotes and cultural criticism to address questions about ..."
      }
    },
    {
      kind: "books#volume",
      id: "xGg4AgAAQBAJ",
      etag: "RY3hY4hBhAU",
      selfLink: "https://www.googleapis.com/books/v1/volumes/xGg4AgAAQBAJ",
      volumeInfo: {
        title: "Mexican Food Made Simple",
        authors: ["Thomasina Miers"],
        publisher: "Hodder & Stoughton",
        publishedDate: "2011-11-24",
        description:
          "If you love having friends and family round for dinner or simply rustling up fresh, fast food, Mexican cooking is fun, fantastic and full of flavour. One of its brightest stars, Wahaca chef and food writer Thomasina Miers shares the recipes she has gathered since she first fell in love with the country aged 18, reinventing the classics with accessible ingredients to demonstrate how exciting and delicious traditional Mexican food can be. Whether you're looking for street snacks full of punch, rich, hearty stews, or sensational, spicy wraps, Thomasina's Mexican Food Made Simple is bursting with recipes you'll want to eat and share: soft corn tacos and tostados; little cheesy things (Quesadillas); a great Mexican chille con carne; Grilled Seabass or succulent Lamb Chops with homemade salsas and tortilla chips; and to finish churros with chocolate sauce. The book features vibrant food photography throughout, and step-by-step guides to folding the perfect burrito, eating a taco (no knives and forks allowed), making a sizzling table salsa, and much more. And with Thomasina's guide to the world's hottest Chillis, ingenious cheats, and helpful menu planner, Mexican Food Made Simple has everything you need to put together a fantastic Mexican feast at home.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781444732207"
          },
          {
            type: "ISBN_10",
            identifier: "144473220X"
          }
        ],
        readingModes: {
          text: true,
          image: false
        },
        pageCount: 224,
        printType: "BOOK",
        categories: ["Cooking"],
        averageRating: 5.0,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.3.3.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=xGg4AgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=xGg4AgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=xGg4AgAAQBAJ&printsec=frontcover&dq=%3Dmexican+food&hl=&cd=2&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=xGg4AgAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://market.android.com/details?id=book-xGg4AgAAQBAJ"
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 0.99,
          currencyCode: "USD"
        },
        retailPrice: {
          amount: 0.99,
          currencyCode: "USD"
        },
        buyLink:
          "https://play.google.com/store/books/details?id=xGg4AgAAQBAJ&rdid=book-xGg4AgAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 990000.0,
              currencyCode: "USD"
            },
            retailPrice: {
              amountInMicros: 990000.0,
              currencyCode: "USD"
            },
            giftable: true
          }
        ]
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Mexican_Food_Made_Simple-sample-epub.acsm?id=xGg4AgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        pdf: {
          isAvailable: false
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=xGg4AgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "The book features vibrant food photography throughout, and step-by-step guides to folding the perfect burrito, eating a taco (no knives and forks allowed), making a sizzling table salsa, and much more."
      }
    },
    {
      kind: "books#volume",
      id: "vZ2sAwAAQBAJ",
      etag: "yJkLYsZUa9I",
      selfLink: "https://www.googleapis.com/books/v1/volumes/vZ2sAwAAQBAJ",
      volumeInfo: {
        title: "Real Mexican Food",
        subtitle: "Authentic recipes for burritos, tacos, salsas and more",
        authors: ["Felipe Furentes Cruz", "Ben Fordham"],
        publisher: "Ryland Peters & Small",
        publishedDate: "2014-02-21",
        description:
          "Benito's Hat aims to deliver everything that is exciting and fresh about Mexican food to the people of Britain, banishing old perceptions of heavy, greasy Tex Mex. From the beaches of Baja and Cancun to the mountains of the Sierra Madre, Mexico has an incredible variety of vibrant flavours to offer. All of this rich culinary culture has inspired Benito's Hat's delicious burritos, tacos, soups and salads. Benito's Hat founder, Ben Fordham, and his Mexican chef Felipe Fuentes Cruz have created a cookbook show-casing their favourite dishes from the restaurant, plus many more from Felipe's collection of authentic recipes. In this fabulous cookbook, you'll find Snacks &Starters; Soups & Salads; Main Courses; Side Dishes; Salsas; Desserts; and Drinks. Mouth-watering recipes include guacamole with homemade corn tortilla chips, Benito's Hat burritos with beef birria, pico de gallo and salsa brava, tacos with sautéed prawns, garlic and paprika, refried beans with chorizo, Mexican flan and plenty of margaritas and fruit juices. Felipe Fuentes Cruz was born in Puebla, Mexico and has worked in the US, Spain and now London. While working in a Mexican restaurant in 2006, he met Ben Fordham , who had fallen in love with real Mexican food when he lived in Texas. They had the same dream of bringing great Mexican food to London and in 2008, Benito's Hat was born.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781849753982"
          },
          {
            type: "ISBN_10",
            identifier: "1849753989"
          }
        ],
        readingModes: {
          text: true,
          image: true
        },
        pageCount: 144,
        printType: "BOOK",
        categories: ["Cooking"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=vZ2sAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=vZ2sAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=vZ2sAwAAQBAJ&printsec=frontcover&dq=%3Dmexican+food&hl=&cd=3&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=vZ2sAwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://market.android.com/details?id=book-vZ2sAwAAQBAJ"
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 13.99,
          currencyCode: "USD"
        },
        retailPrice: {
          amount: 9.99,
          currencyCode: "USD"
        },
        buyLink:
          "https://play.google.com/store/books/details?id=vZ2sAwAAQBAJ&rdid=book-vZ2sAwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 1.399e7,
              currencyCode: "USD"
            },
            retailPrice: {
              amountInMicros: 9990000.0,
              currencyCode: "USD"
            },
            giftable: true
          }
        ]
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Real_Mexican_Food-sample-epub.acsm?id=vZ2sAwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Real_Mexican_Food-sample-pdf.acsm?id=vZ2sAwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=vZ2sAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "Felipe Fuentes Cruz was born in Puebla, Mexico and has worked in the US, Spain and now London. While working in a Mexican restaurant in 2006, he met Ben Fordham , who had fallen in love with real Mexican food when he lived in Texas."
      }
    },
    {
      kind: "books#volume",
      id: "lVT5DAAAQBAJ",
      etag: "+dhvJwTjWxU",
      selfLink: "https://www.googleapis.com/books/v1/volumes/lVT5DAAAQBAJ",
      volumeInfo: {
        title: "Planet Taco",
        subtitle: "A Global History of Mexican Food",
        authors: ["Jeffrey M. Pilcher"],
        publisher: "Oxford University Press",
        publishedDate: "2017-03-01",
        description:
          'Planet Taco examines the historical struggles between globalization and national sovereignty in the creation of "authentic" Mexican food. By telling the stories of the "Chili Queens" of San Antonio and the inventors of the taco shell, it shows how Mexican Americans helped to make Mexican food global.',
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780190655778"
          },
          {
            type: "ISBN_10",
            identifier: "0190655771"
          }
        ],
        readingModes: {
          text: false,
          image: true
        },
        pageCount: 320,
        printType: "BOOK",
        averageRating: 4.5,
        ratingsCount: 3,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=lVT5DAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=lVT5DAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=lVT5DAAAQBAJ&printsec=frontcover&dq=%3Dmexican+food&hl=&cd=4&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=lVT5DAAAQBAJ&dq=%3Dmexican+food&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Planet_Taco.html?hl=&id=lVT5DAAAQBAJ"
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false
        },
        pdf: {
          isAvailable: false
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=lVT5DAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "&quot;In Planet Taco, Jeffrey Pilcher traces the historical origins and evolution of Mexico&#39;s national cuisine, explores its incarnation as a Mexican American fast-food, shows how surfers became global pioneers of Mexican food, and how Corona ..."
      }
    },
    {
      kind: "books#volume",
      id: "ki5gAAAAMAAJ",
      etag: "HK2LRLOCE8s",
      selfLink: "https://www.googleapis.com/books/v1/volumes/ki5gAAAAMAAJ",
      volumeInfo: {
        title: "Real Mexican Food for People with Diabetes",
        authors: ["Doris Cross"],
        publisher: "Prima Lifestyles",
        publishedDate: "1998",
        description:
          "Gathers low-fat, low-calorie recipes for enchildas, tamales, burritos, nachos, quesadillas, fajitas, and salads",
        industryIdentifiers: [
          {
            type: "OTHER",
            identifier: "UTEXAS:059173006174825"
          }
        ],
        readingModes: {
          text: false,
          image: false
        },
        pageCount: 270,
        printType: "BOOK",
        categories: ["Cooking"],
        averageRating: 3.0,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.1.0.preview.0",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=ki5gAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=ki5gAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=ki5gAAAAMAAJ&dq=%3Dmexican+food&hl=&cd=5&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=ki5gAAAAMAAJ&dq=%3Dmexican+food&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Real_Mexican_Food_for_People_with_Diabet.html?hl=&id=ki5gAAAAMAAJ"
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false
      },
      accessInfo: {
        country: "US",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false
        },
        pdf: {
          isAvailable: false
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=ki5gAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "Gathers low-fat, low-calorie recipes for enchildas, tamales, burritos, nachos, quesadillas, fajitas, and salads healthful. Now, you too can savor enchiladas, tamales, and burritos filled with cheese, sour cream, refrie"
      }
    },
    {
      kind: "books#volume",
      id: "s31wswEACAAJ",
      etag: "/8wzSVVGips",
      selfLink: "https://www.googleapis.com/books/v1/volumes/s31wswEACAAJ",
      volumeInfo: {
        title: "The Mexican Food Diet: Healthy Eating That Feels Like Cheating",
        authors: ["Maru Davila"],
        publishedDate: "2017-10-14",
        description:
          "The Mexican Food Diet(TM) is the new way of losing weight and feeling great without deprivation, hunger, boredom with bland foods, or excessive exercising. This type of eating helped Maru lose 60 lb., get rid of cravings, regain her energy, overcome her depression and recover her health. The book shows how Mexican Food is the ideal food for losing weight and getting healthier. It is delicious, nutritious, satisfying, and extremely effective for reducing toxicity and inflammation, two of the leading causes for most diseases and weight loss struggles. The 46 recipes in the book use only S.M.A.R.T. ingredients that: Support health and weight loss + Minimize toxicity + Affect mood and emotions in positive ways + Reduce inflammation + Take care of keeping hormones in balance. The diet in this book, if followed correctly, can allow readers to lose up to 7 pounds in 1 week, while reducing cravings, toxicity and inflammation; reducing bloating and improving digestion; getting more energy; feeling calmer and happier; sleeping better; and boosting the immune system so you get sick less often.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1641363800"
          },
          {
            type: "ISBN_13",
            identifier: "9781641363808"
          }
        ],
        readingModes: {
          text: false,
          image: false
        },
        pageCount: 372,
        printType: "BOOK",
        categories: ["Health & Fitness"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=s31wswEACAAJ&dq=%3Dmexican+food&hl=&cd=6&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=s31wswEACAAJ&dq=%3Dmexican+food&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/The_Mexican_Food_Diet_Healthy_Eating_Tha.html?hl=&id=s31wswEACAAJ"
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false
      },
      accessInfo: {
        country: "US",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false
        },
        pdf: {
          isAvailable: false
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=s31wswEACAAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "The diet in this book, if followed correctly, can allow readers to lose up to 7 pounds in 1 week, while reducing cravings, toxicity and inflammation; reducing bloating and improving digestion; getting more energy; feeling calmer and happier ..."
      }
    },
    {
      kind: "books#volume",
      id: "tVMzDwAAQBAJ",
      etag: "tJbbek39+RY",
      selfLink: "https://www.googleapis.com/books/v1/volumes/tVMzDwAAQBAJ",
      volumeInfo: {
        title: "Mexican-Origin Foods, Foodways, and Social Movements",
        subtitle: "Decolonial Perspectives",
        authors: [
          "Devon Peña",
          "Luz Calvo",
          "Pancho McFarland",
          "Gabriel R. Valle"
        ],
        publisher: "University of Arkansas Press",
        publishedDate: "2017-09-01",
        description:
          "This collection of new essays offers groundbreaking perspectives on the ways that food and foodways serve as an element of decolonization in Mexican-origin communities. The writers here take us from multigenerational acequia farmers, who trace their ancestry to Indigenous families in place well before the Oñate Entrada of 1598, to tomorrow’s transborder travelers who will be negotiating entry into the United States. Throughout, we witness the shifting mosaic of Mexican-origin foods and foodways in the fields, gardens, and kitchen tables from Chiapas to Alaska. Global food systems are also considered from a critical agroecological perspective, including the ways colonialism affects native biocultural diversity, ecosystem resilience, and equality across species, human groups, and generations. Mexican-Origin Foods, Foodways, and Social Movements is a major contribution to the understanding of the ways that Mexican-origin peoples have resisted and transformed food systems. It will animate scholarship on global food studies for years to come.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781610756181"
          },
          {
            type: "ISBN_10",
            identifier: "1610756185"
          }
        ],
        readingModes: {
          text: true,
          image: true
        },
        pageCount: 503,
        printType: "BOOK",
        categories: ["Social Science"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=tVMzDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=tVMzDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=tVMzDwAAQBAJ&printsec=frontcover&dq=%3Dmexican+food&hl=&cd=7&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=tVMzDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://market.android.com/details?id=book-tVMzDwAAQBAJ"
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 27.95,
          currencyCode: "USD"
        },
        retailPrice: {
          amount: 15.37,
          currencyCode: "USD"
        },
        buyLink:
          "https://play.google.com/store/books/details?id=tVMzDwAAQBAJ&rdid=book-tVMzDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2.795e7,
              currencyCode: "USD"
            },
            retailPrice: {
              amountInMicros: 1.537e7,
              currencyCode: "USD"
            },
            giftable: true
          }
        ]
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Mexican_Origin_Foods_Foodways_and_Social-sample-epub.acsm?id=tVMzDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Mexican_Origin_Foods_Foodways_and_Social-sample-pdf.acsm?id=tVMzDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=tVMzDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "Winner, 2018 ASFS (Association for the Study of Food and Society) Book Award, Edited Volume This collection of new essays offers groundbreaking perspectives on the ways that food and foodways serve as an element of decolonization in Mexican ..."
      }
    },
    {
      kind: "books#volume",
      id: "enVmDwAAQBAJ",
      etag: "5ff/i2Vk1wg",
      selfLink: "https://www.googleapis.com/books/v1/volumes/enVmDwAAQBAJ",
      volumeInfo: {
        title: "Eating NAFTA",
        subtitle: "Trade, Food Policies, and the Destruction of Mexico",
        authors: ["Alyshia Gálvez"],
        publisher: "Univ of California Press",
        publishedDate: "2018-09-18",
        description:
          "Mexican cuisine has emerged as a paradox of globalization. Food enthusiasts throughout the world celebrate the humble taco at the same time that Mexicans are eating fewer tortillas and more processed food. Today Mexico is experiencing an epidemic of diet-related chronic illness. The precipitous rise of obesity and diabetes—attributed to changes in the Mexican diet—has resulted in a public health emergency. In her gripping new book, Alyshia Gálvez exposes how changes in policy following NAFTA have fundamentally altered one of the most basic elements of life in Mexico—sustenance. Mexicans are faced with a food system that favors food security over subsistence agriculture, development over sustainability, market participation over social welfare, and ideologies of self-care over public health. Trade agreements negotiated to improve lives have resulted in unintended consequences for people’s everyday lives.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780520965447"
          },
          {
            type: "ISBN_10",
            identifier: "0520965442"
          }
        ],
        readingModes: {
          text: true,
          image: true
        },
        pageCount: 288,
        printType: "BOOK",
        categories: ["Social Science"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=enVmDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=enVmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=enVmDwAAQBAJ&printsec=frontcover&dq=%3Dmexican+food&hl=&cd=8&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=enVmDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://market.android.com/details?id=book-enVmDwAAQBAJ"
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 29.95,
          currencyCode: "USD"
        },
        retailPrice: {
          amount: 18.6,
          currencyCode: "USD"
        },
        buyLink:
          "https://play.google.com/store/books/details?id=enVmDwAAQBAJ&rdid=book-enVmDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2.995e7,
              currencyCode: "USD"
            },
            retailPrice: {
              amountInMicros: 1.86e7,
              currencyCode: "USD"
            },
            giftable: true
          }
        ]
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Eating_NAFTA-sample-epub.acsm?id=enVmDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Eating_NAFTA-sample-pdf.acsm?id=enVmDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=enVmDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "In her gripping new book, Alyshia Gálvez exposes how changes in policy following NAFTA have fundamentally altered one of the most basic elements of life in Mexico—sustenance."
      }
    },
    {
      kind: "books#volume",
      id: "eE2Uo5aexE4C",
      etag: "DUgqpvlOQMM",
      selfLink: "https://www.googleapis.com/books/v1/volumes/eE2Uo5aexE4C",
      volumeInfo: {
        title: "Mexican Cookbook",
        authors: ["Erna Fergusson"],
        publisher: "UNM Press",
        publishedDate: "1969-11-01",
        description:
          "When it was first published in 1934, Erna Fergusson's Mexican Cookbook made authentic Mexican recipes accessible to cooks nationwide--including celebrated favorites such as enchiladas, chile rellenos, and carne adovada, as well as the simple, rustic foods traditionally prepared and served in New Mexican homes. Inspired by the delight and enthusiasm with which visitors to the Southwest partook of the region's cuisine, this popular cookbook remains an enduring tribute to the ambience and spirit of territorial New Mexico.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780826351036"
          },
          {
            type: "ISBN_10",
            identifier: "0826351034"
          }
        ],
        readingModes: {
          text: true,
          image: true
        },
        pageCount: 128,
        printType: "BOOK",
        categories: ["Cooking"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.1.0.preview.3",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=eE2Uo5aexE4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=eE2Uo5aexE4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=eE2Uo5aexE4C&printsec=frontcover&dq=%3Dmexican+food&hl=&cd=9&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=eE2Uo5aexE4C&source=gbs_api",
        canonicalVolumeLink:
          "https://market.android.com/details?id=book-eE2Uo5aexE4C"
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 9.99,
          currencyCode: "USD"
        },
        retailPrice: {
          amount: 7.99,
          currencyCode: "USD"
        },
        buyLink:
          "https://play.google.com/store/books/details?id=eE2Uo5aexE4C&rdid=book-eE2Uo5aexE4C&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 9990000.0,
              currencyCode: "USD"
            },
            retailPrice: {
              amountInMicros: 7990000.0,
              currencyCode: "USD"
            },
            giftable: true
          }
        ]
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Mexican_Cookbook-sample-epub.acsm?id=eE2Uo5aexE4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Mexican_Cookbook-sample-pdf.acsm?id=eE2Uo5aexE4C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=eE2Uo5aexE4C&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "When it was first published in 1934, Erna Fergusson&#39;s Mexican Cookbook made authentic Mexican recipes accessible to cooks nationwide--including celebrated favorites such as enchiladas, chile rellenos, and carne adovada, as well as the ..."
      }
    },
    {
      kind: "books#volume",
      id: "4yLzrQEACAAJ",
      etag: "acY5WBKWppw",
      selfLink: "https://www.googleapis.com/books/v1/volumes/4yLzrQEACAAJ",
      volumeInfo: {
        title: "Cooking School: Mexican Food",
        authors: ["Sara Gilbert"],
        publisher: "Creative Paperbacks",
        publishedDate: "2015-09-15",
        description:
          "An elementary introduction to the relationship between cooking and Mexican culture, the effect of local agriculture on the diets of different regions, common tools such as rolling pins, and recipe instructions.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1628320982"
          },
          {
            type: "ISBN_13",
            identifier: "9781628320985"
          }
        ],
        readingModes: {
          text: false,
          image: false
        },
        pageCount: 24,
        printType: "BOOK",
        categories: ["Juvenile Nonfiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=4yLzrQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=4yLzrQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=4yLzrQEACAAJ&dq=%3Dmexican+food&hl=&cd=10&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=4yLzrQEACAAJ&dq=%3Dmexican+food&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Cooking_School_Mexican_Food.html?hl=&id=4yLzrQEACAAJ"
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false
      },
      accessInfo: {
        country: "US",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false
        },
        pdf: {
          isAvailable: false
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=4yLzrQEACAAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "An elementary introduction to the relationship between cooking and Mexican culture, the effect of local agriculture on the diets of different regions, common tools such as rolling pins, and recipe instructions."
      }
    }
  ]
};
