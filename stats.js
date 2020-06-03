var comparison = require("./lib/transcript_comparison");

const proto = {
  stats: {
    entries: 0,
    google: {
      matches: 0,
      percentage: function(that) {
        return Math.round(
          (that.stats.google.matches / that.stats.entries) * 100
        );
      }
    },
    microsoft: {
      matches: 0,
      percentage: function(that) {
        return Math.round(
          (that.stats.microsoft.matches / that.stats.entries) * 100
        );
      }
    }
  },
  parse: function() {}
};

("use strict");
function StatParserCreate(properties) {
  if (properties == "undefined") {
    console.log("No custom properties defined for Statistic Parser");
    properties = {};
  }

  var obj = Object.assign(Object.create(proto), properties);

  obj.parse = function parse(result) {
    obj.stats.entries = result.length;

    for (el of result) {
      el.result.google.match = comparison(
        el.original,
        el.result.google.transcription
      );
      el.result.microsoft.match = comparison(
        el.original,
        el.result.microsoft.transcription
      );

      el.result.google.match ? obj.stats.google.matches++ : null;
      el.result.microsoft.match ? obj.stats.microsoft.matches++ : null;
    }

    console.log(JSON.stringify(result));
    console.log("Statistic");
    console.log("----------");
    console.log("Entries  | Google | Microsoft ");
    console.log("------------------------------");
    console.log(
      "  " +
        obj.stats.entries +
        " " +
        obj.stats.google.percentage(obj) +
        "  " +
        obj.stats.microsoft.percentage(obj)
    );
    console.log(JSON.stringify(obj.stats));
  };

  return obj;
}

module.exports = StatParserCreate;
