const createParser = require("./stats");

var parser = createParser();

var results = [
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_1.wav",
    original: "The birch canoe slid on the smooth planks.",
    result: {
      google: {
        transcription: "the Birch canoe slid on the smooth planks",
        match: true
      },
      microsoft: {
        transcription: "The Birch Canoe slid on the smooth planks.",
        match: true
      }
    }
  },
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_10.wav",
    original: "Large size in stockings is hard to sell.",
    result: {
      google: {
        transcription: "a large size and stockings is hard to sell",
        match: false
      },
      microsoft: {
        transcription: "A large size and stockings is hard to sell.",
        match: false
      }
    }
  },
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_11.wav",
    original: "The boy was there when the sun rose.",
    result: {
      google: {
        transcription: "the boy was there when the sun rose",
        match: true
      },
      microsoft: {
        transcription: "The boy was there when the sun rose.",
        match: true
      }
    }
  },
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_12.wav",
    original: "A rod is used to catch pink salmon.",
    result: {
      google: {
        transcription: "A-Rod is used to catch pink salmon",
        match: false
      },
      microsoft: {
        transcription: "A rod is used to catch pink salmon.",
        match: true
      }
    }
  },
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_13.wav",
    original: "The source of the huge river is the clear spring.",
    result: {
      google: {
        transcription: "the source of the huge river is the Clear Spring",
        match: true
      },
      microsoft: {
        transcription: "The source of the huge River is a clear spring.",
        match: false
      }
    }
  },
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_14.wav",
    original: "Kick the ball straight and follow through.",
    result: {
      google: {
        transcription: "Kick the Boss didn't follow through",
        match: false
      },
      microsoft: {
        transcription: "Kick the Boston. Follow through.",
        match: false
      }
    }
  },
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_15.wav",
    original: "Help the woman get back to her feet.",
    result: {
      google: {
        transcription: "how's the when we get back to her feet",
        match: false
      },
      microsoft: {
        transcription: "Help the woman get back to her feet.",
        match: true
      }
    }
  },
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_16.wav",
    original: "A pot of tea helps to pass the evening.",
    result: {
      google: {
        transcription: "a pot of tea helps to pass the evening",
        match: true
      },
      microsoft: {
        transcription: "The pot of tea helps to pass the evening.",
        match: false
      }
    }
  },
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_17.wav",
    original: "Smoky fires lack flame and heat.",
    result: {
      google: { transcription: "Smoky fires black swim in heat", match: false },
      microsoft: {
        transcription: "Smoky fires black flame in heat.",
        match: false
      }
    }
  },
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_18.wav",
    original: "The soft cushion broke the man's fall.",
    result: {
      google: {
        transcription: "the soft cushion broke the man's fault",
        match: false
      },
      microsoft: {
        transcription: "The soft cushion broke the man's fault.",
        match: false
      }
    }
  },
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_19.wav",
    original: "The salt breeze came across from the sea.",
    result: {
      google: {
        transcription: "the salt Breeze came across the sea",
        match: false
      },
      microsoft: {
        transcription: "The soft breeze came across the sea.",
        match: false
      }
    }
  },
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_2.wav",
    original: "Glue the sheet to the dark blue background.",
    result: {
      google: {
        transcription: "glue the sheets with dark blue background",
        match: false
      },
      microsoft: {
        transcription: "Glue the sheet to the dark blue background.",
        match: true
      }
    }
  },
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_3.wav",
    original: "It's easy to tell the depth of a well.",
    result: {
      google: {
        transcription: "it is easy to tell the depth of a well",
        match: false
      },
      microsoft: {
        transcription: "It is easy to tell the depth over well.",
        match: false
      }
    }
  },
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_4.wav",
    original: "These days a chicken leg is a rare dish.",
    result: {
      google: {
        transcription: "do you say the chicken nuggets a verb dish",
        match: false
      },
      microsoft: {
        transcription: "These days, a chicken leg is a rare dish.",
        match: true
      }
    }
  },
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_5.wav",
    original: "Rice is often served in round bowls.",
    result: {
      google: {
        transcription: "rice is often served in round bowls",
        match: true
      },
      microsoft: {
        transcription: "Rice is often served in Round Bowls.",
        match: true
      }
    }
  },
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_6.wav",
    original: "The juice of lemons makes fine punch.",
    result: {
      google: {
        transcription: "the juice of lemons makes fine punch",
        match: true
      },
      microsoft: {
        transcription: "The juice of lemons makes find punch.",
        match: true
      }
    }
  },
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_7.wav",
    original: "The box was thrown beside the parked truck.",
    result: {
      google: {
        transcription: "the box was the one beside the pump truck",
        match: false
      },
      microsoft: {
        transcription: "The box was thrown beside the park truck.",
        match: false
      }
    }
  },
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_8.wav",
    original: "The hogs were fed chopped corn and garbage.",
    result: {
      google: {
        transcription: "the Hogs are such hot corn and garbage",
        match: false
      },
      microsoft: {
        transcription: "The hogs were fed chopped corn and garbage.",
        match: true
      }
    }
  },
  {
    audio:
      "c:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\resources\\export_9.wav",
    original: "Four hours of steady work faced us.",
    result: {
      google: { transcription: "4 hours of study Works fastest", match: false },
      microsoft: {
        transcription: "4 hours of study work faced us.",
        match: false
      }
    }
  }
];

parser.parse(results);
