export interface GiftSuggestion {
  name: string;
  why: string;
  priceRange: string;
  link: string;
}

export interface GiftGuide {
  slug: string;
  occasion: string;
  description: string;
  products: GiftSuggestion[];
}

export const giftGuides: GiftGuide[] = [
  {
    slug: "hanukkah",
    occasion: "Hanukkah",
    description: "Eight nights, eight chances to get it right. Whether you are shopping for the person who has everything or the kid who wants something cool to wear, this guide covers all eight bases.",
    products: [
      {
        name: "JewSA Basic Tee",
        why: "Because showing up to the family Hanukkah party in a shirt that announces your Jewish-American pride is a mitzvah in its own right. Comfortable, well-made, and guaranteed to prompt exactly one question per family member.",
        priceRange: "$25",
        link: "/#shop",
      },
      {
        name: "Old School Bucket Hat",
        why: "A hat that says 'I know who I am and I am having a good time about it.' Perfect for the person who takes their Jewish pride seriously but not themselves.",
        priceRange: "$25",
        link: "/#shop",
      },
      {
        name: "Quality Hanukkiah (Menorah)",
        why: "Every home needs one worth displaying. A well-crafted chanukiah is a Hanukkah gift that comes back out year after year, carrying the memory of the person who gave it.",
        priceRange: "$40-$150",
        link: "/#shop",
      },
      {
        name: "A Jewish Cookbook",
        why: "The gift of Jewish food is the gift of culture, memory, and an excuse to invite people over. Modern Jewish cookbooks connect ancient tradition to contemporary kitchens in genuinely beautiful ways.",
        priceRange: "$30-$45",
        link: "/#shop",
      },
      {
        name: "Dreidel Set with Gelt",
        why: "For the family with young kids, a quality dreidel set with real chocolate gelt creates the kind of Hanukkah memory that lasts. The classics are classics for a reason.",
        priceRange: "$15-$35",
        link: "/#shop",
      },
      {
        name: "Personalized Jewelry",
        why: "A necklace or bracelet with a Hebrew name or the word chai — life — is a Hanukkah gift that carries meaning long past December. Choose quality and it becomes an heirloom.",
        priceRange: "$50-$200",
        link: "/#shop",
      },
    ],
  },
  {
    slug: "passover",
    occasion: "Passover",
    description: "The holiday of freedom deserves gifts worth celebrating. Whether you are a seder guest or the host, these suggestions honor the spirit of Pesach — meaningful, thoughtful, and built to last.",
    products: [
      {
        name: "JewSA Basic Tee",
        why: "Show up to the seder in something that represents who you are. A tee that announces Jewish-American pride is exactly the conversation starter your Uncle Larry does not need to start himself.",
        priceRange: "$25",
        link: "/#shop",
      },
      {
        name: "A Modern Haggadah",
        why: "The Haggadah is the seder's roadmap, and a great one makes the difference between a 90-minute experience and a four-hour argument. Modern illustrated Haggadahs bring the ancient story to life for every generation at the table.",
        priceRange: "$20-$40",
        link: "/#shop",
      },
      {
        name: "Seder Plate",
        why: "A beautiful Seder plate is a gift that comes back to the table every year. Ceramic, pewter, hand-painted — choose something meaningful and it becomes part of the family ritual.",
        priceRange: "$40-$120",
        link: "/#shop",
      },
      {
        name: "Matzah Cover Set",
        why: "An embroidered matzah cover and afikomen bag honor the ritual and look beautiful on the Seder table. A practical gift that carries genuine symbolism.",
        priceRange: "$25-$80",
        link: "/#shop",
      },
      {
        name: "Wine for the Four Cups",
        why: "You cannot do a seder without wine. A quality bottle of Kosher wine from Israel or California respects the tradition and ensures the four cups are worth drinking.",
        priceRange: "$15-$50",
        link: "/#shop",
      },
    ],
  },
  {
    slug: "bar-mitzvah",
    occasion: "Bar Mitzvah",
    description: "A young man has spent months studying Torah, stood before his congregation, and chanted his portion. Honor that accomplishment with something that actually matters — not another savings bond in a drawer.",
    products: [
      {
        name: "JewSA Basic Tee",
        why: "A bar mitzvah boy is now a Jewish adult. Give him gear that reflects that identity with pride and a little humor. Something he will actually wear, not display on a shelf.",
        priceRange: "$25",
        link: "/#shop",
      },
      {
        name: "Old School Bucket Hat",
        why: "Thirteen-year-olds wear hats. This one says something real about who he is. It is a gift that acknowledges his new adult Jewish identity in a way that lands.",
        priceRange: "$25",
        link: "/#shop",
      },
      {
        name: "Quality Tallit",
        why: "A bar mitzvah boy is now old enough for his own tallit. A quality prayer shawl — chosen for him rather than handed to him — is a gift he will carry through a lifetime of morning prayers.",
        priceRange: "$60-$200",
        link: "/#shop",
      },
      {
        name: "Cash in Multiples of $18",
        why: "Chai — life — equals 18 in Hebrew numerology. $36, $54, $72, $180. Honest, traditional, and goes directly toward whatever he actually wants. Add a heartfelt card and it is the best gift at the party.",
        priceRange: "$36-$180+",
        link: "/#shop",
      },
      {
        name: "Jewish Biography or History Book",
        why: "Find the one that connects to what he loves. A book about Jewish comedians, Jewish athletes, Jewish scientists — something that shows him the lineage he is now part of. Match the book to the kid.",
        priceRange: "$18-$35",
        link: "/#shop",
      },
    ],
  },
  {
    slug: "bat-mitzvah",
    occasion: "Bat Mitzvah",
    description: "She has studied, prepared, and led her community in prayer. A bat mitzvah is one of the most significant milestones in a young Jewish woman's life. Give something that honors the occasion and the person.",
    products: [
      {
        name: "JewSA Basic Tee",
        why: "Jewish-American pride looks great on everyone. A shirt that celebrates her heritage with humor and quality is a gift she will actually pull out of her closet.",
        priceRange: "$25",
        link: "/#shop",
      },
      {
        name: "Jewish Star or Hamsa Necklace",
        why: "Quality jewelry with Jewish symbolism is the bat mitzvah gift that never ages. A gold or silver hamsa or Star of David necklace from a real artisan becomes part of her daily identity.",
        priceRange: "$50-$200",
        link: "/#shop",
      },
      {
        name: "Cash in Multiples of $18",
        why: "Every bubbe who ever lived knows this is the right answer. $36, $54, $180 — she knows what she wants better than you do. The card matters as much as the cash.",
        priceRange: "$36-$180+",
        link: "/#shop",
      },
      {
        name: "Personalized Bat Mitzvah Journal",
        why: "A leather journal with her Hebrew name embossed on the cover is a place to write the thoughts of someone who has just entered Jewish adulthood. Thoughtful, personal, and lasting.",
        priceRange: "$30-$60",
        link: "/#shop",
      },
      {
        name: "Experience Gift",
        why: "A cooking class, concert tickets, art workshop — something she will talk about. Experiences outlast objects. Know what she loves and build the gift around that.",
        priceRange: "$50-$150",
        link: "/#shop",
      },
    ],
  },
  {
    slug: "rosh-hashanah",
    occasion: "Rosh Hashanah",
    description: "The Jewish New Year calls for gifts that carry meaning and sweetness. Whether you are bringing something to a holiday dinner or honoring someone special, these options match the occasion.",
    products: [
      {
        name: "Honey and Apples Gift Set",
        why: "The most traditional Rosh Hashanah symbol — apples dipped in honey for a sweet new year. A quality honey set from an artisan producer is a gift that feels exactly right.",
        priceRange: "$20-$45",
        link: "/#shop",
      },
      {
        name: "JewSA Basic Tee",
        why: "Start the new year wearing who you are. A gift that says 'I know exactly what you are about' — delivered with Jewish-American pride.",
        priceRange: "$25",
        link: "/#shop",
      },
      {
        name: "Rosh Hashanah Greeting Card (Handwritten)",
        why: "L'Shanah Tovah Tikateivu — may you be inscribed for a good year. A real card, with real words in your own hand, is a gift people keep. Do not underestimate it.",
        priceRange: "$0-$5",
        link: "/#shop",
      },
      {
        name: "Round Challah for the Holiday Table",
        why: "A round challah from a quality Jewish bakery is a beautiful Rosh Hashanah gift. If you can make one yourself, that is even better. Bring it to dinner and you will be invited back.",
        priceRange: "$10-$20",
        link: "/#shop",
      },
      {
        name: "Jewish New Year Pomegranate Dish",
        why: "Pomegranates are eaten on Rosh Hashanah to represent the hope for a year as full of blessings as the pomegranate is full of seeds. A beautiful pomegranate-themed dish or artwork makes a meaningful holiday gift.",
        priceRange: "$25-$80",
        link: "/#shop",
      },
    ],
  },
  {
    slug: "wedding",
    occasion: "Jewish Wedding",
    description: "Mazel tov — they found each other. A Jewish wedding is one of the most beautiful milestones in Jewish life. These gifts honor the occasion with the weight and joy it deserves.",
    products: [
      {
        name: "Cash in Multiples of $18",
        why: "Chai means life. 18 is the number. $180, $360, $540 — scale to your relationship with the couple. Always accompanied by a heartfelt card. Always the right answer at a Jewish wedding.",
        priceRange: "$180+",
        link: "/#shop",
      },
      {
        name: "Matching JewSA Tees",
        why: "A fun, unexpected engagement or wedding gift for a couple who wears their identity with pride. Not the wedding night look, but for every Jewish-American occasion that follows.",
        priceRange: "$50",
        link: "/#shop",
      },
      {
        name: "Mezuzah for Their New Home",
        why: "A mezuzah for the doorpost of their first home is the most Jewish gift imaginable — and one that stays with them as long as they live there. Choose a quality one from an artisan.",
        priceRange: "$40-$200",
        link: "/#shop",
      },
      {
        name: "Kiddush Cup",
        why: "Every Jewish home needs a quality Kiddush cup for Shabbat and holidays. A silver or pewter cup is a lasting gift that becomes part of the fabric of their Jewish home life.",
        priceRange: "$50-$200",
        link: "/#shop",
      },
      {
        name: "Jewish Cookbook for the Home",
        why: "A great Jewish cookbook is a gift they will use for decades. It teaches the recipes they grew up with and introduces new ones, building the culinary tradition of their household.",
        priceRange: "$30-$45",
        link: "/#shop",
      },
      {
        name: "Charitable Donation in Their Honor",
        why: "Tikkun olam — repairing the world — is a core Jewish value. A donation to a cause meaningful to the couple, made in their names, is a deeply Jewish wedding gift. Include a note explaining why you chose it.",
        priceRange: "$36-$360",
        link: "/#shop",
      },
    ],
  },
  {
    slug: "shabbat",
    occasion: "Shabbat",
    description: "The weekly Sabbath is the heartbeat of Jewish life — a day of rest, family, food, and holiness. These gifts honor the ritual and the people who keep it.",
    products: [
      {
        name: "Shabbat Candlesticks",
        why: "Candle lighting is the gateway to Shabbat. Quality candlesticks — silver, pewter, hand-crafted — become part of the family ritual, present every Friday night.",
        priceRange: "$40-$200",
        link: "/#shop",
      },
      {
        name: "Challah Board and Cover Set",
        why: "A wooden challah board with a beautiful embroidered cover honors the ritual of Shabbat bread. Practical, beautiful, and used every week — this is a gift that earns its place.",
        priceRange: "$35-$80",
        link: "/#shop",
      },
      {
        name: "Quality Kiddush Cup",
        why: "Shabbat begins with Kiddush over wine. A quality cup in silver or hand-blown glass elevates the ritual and becomes an heirloom. Choose something the family will treasure.",
        priceRange: "$50-$200",
        link: "/#shop",
      },
      {
        name: "JewSA Basic Tee",
        why: "Because even the most observant among us needs something to wear on Shabbat afternoon when everyone is lounging at the table refusing to move. Comfortable, proud, and on brand.",
        priceRange: "$25",
        link: "/#shop",
      },
      {
        name: "Artisan Shabbat Honey and Challah",
        why: "A gift of quality honey and a beautiful handmade challah from a local bakery is the most welcome Shabbat arrival. If you are a guest, this is always correct.",
        priceRange: "$20-$40",
        link: "/#shop",
      },
    ],
  },
  {
    slug: "just-because",
    occasion: "Just Because",
    description: "Because being Jewish-American is reason enough. No occasion required. These are the gifts that say 'I see you, I appreciate you, and I thought of you' — without needing a reason.",
    products: [
      {
        name: "JewSA Basic Tee",
        why: "The purest just-because gift: comfortable, well-made, and loaded with Jewish-American pride. Wear it everywhere. The tee works.",
        priceRange: "$25",
        link: "/#shop",
      },
      {
        name: "Old School Bucket Hat",
        why: "A bucket hat that announces who you are. Wear it to the farmer's market. Wear it on Shabbat. Wear it when someone needs to know exactly where you stand.",
        priceRange: "$25",
        link: "/#shop",
      },
      {
        name: "Yiddish Phrase Mug or Print",
        why: "A mug that says Chutzpah or a print of a Yiddish expression you love is a no-occasion gift that lands every time. Small, intentional, funny. Perfect.",
        priceRange: "$15-$35",
        link: "/#shop",
      },
      {
        name: "Jewish Humor Book",
        why: "A good book of Jewish humor is the gift that pays for itself ten times over. Someone who understands why the jokes work will read it in one sitting and quote it forever.",
        priceRange: "$18-$28",
        link: "/#shop",
      },
      {
        name: "Hamsa Charm or Pendant",
        why: "Protective, beautiful, cross-culturally meaningful — a hamsa necklace or charm is the just-because gift that says you were thinking of them. Small but significant.",
        priceRange: "$20-$80",
        link: "/#shop",
      },
    ],
  },
];

export function getAllGiftGuides(): GiftGuide[] {
  return giftGuides;
}

export function getGiftGuideBySlug(slug: string): GiftGuide | undefined {
  return giftGuides.find((g) => g.slug === slug);
}
