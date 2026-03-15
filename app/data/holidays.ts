export interface Holiday {
  slug: string;
  name: string;
  hebrewName: string;
  description: string;
  significance: string;
  howObserved: string;
  scriptureRef: string;
  scriptureText: string;
  month: number;
  day?: number;
  duration?: number;
  isLunar: boolean;
  greeting?: string;
  foods?: string[];
  color: string;
}

export const holidays: Holiday[] = [
  {
    slug: "rosh-hashanah",
    name: "Rosh Hashanah",
    hebrewName: "רֹאשׁ הַשָּׁנָה",
    description: "The Jewish New Year — the first and second days of Tishrei mark the beginning of the High Holy Days, the Days of Awe. It is a time of introspection, prayer, and hopeful renewal as Jews around the world reflect on the past year and prepare for the days of judgment ahead.",
    significance: "Rosh Hashanah is considered the birthday of the world in Jewish tradition — the anniversary of God's creation of humanity. It opens a ten-day period of reflection and repentance culminating in Yom Kippur. The shofar's blast is said to awaken the soul and call people to account for their actions. Jewish teaching holds that on Rosh Hashanah, God opens the Book of Life and writes each person's fate for the coming year, which is then sealed on Yom Kippur — making these days among the most spiritually significant in the Jewish calendar.",
    howObserved: "Synagogue services feature the sounding of the shofar (ram's horn), an ancient call to reflection. Families gather for festive meals featuring apples dipped in honey, symbolizing the hope for a sweet new year. Round challahs are baked to represent the cycle of the year. Many Jews perform Tashlich, casting breadcrumbs into flowing water to symbolically release sins. Greeting cards are exchanged and the traditional wish 'L'Shanah Tovah Tikateivu' — may you be inscribed for a good year — is shared.",
    scriptureRef: "Leviticus 23:24-25",
    scriptureText: "Speak to the children of Israel, saying: In the seventh month, on the first day of the month, you shall have a sabbath rest, a sacred assembly commemorated with trumpet blasts. You shall do no laborious work, and you shall bring an offering by fire to the Lord.",
    month: 7,
    day: 1,
    duration: 2,
    isLunar: true,
    greeting: "L'Shanah Tovah Tikateivu — May you be inscribed for a good year",
    foods: ["Apples and honey", "Round challah", "Pomegranates", "Honey cake (lekach)", "Tzimmes", "Brisket", "Stuffed cabbage"],
    color: "#C9A84C",
  },
  {
    slug: "yom-kippur",
    name: "Yom Kippur",
    hebrewName: "יוֹם כִּיפּוּר",
    description: "The Day of Atonement — the holiest day in the Jewish year. Occurring on the tenth of Tishrei, Yom Kippur is a solemn 25-hour fast during which Jews seek forgiveness for sins committed against God, confront their own moral failures, and pray for a place in the Book of Life. It is a day unlike any other in Jewish observance.",
    significance: "Jewish tradition holds that Yom Kippur is the day Moses descended from Mount Sinai with the second set of tablets, signifying divine forgiveness after the sin of the Golden Calf. The day represents humanity's capacity for renewal and the mercy of God. The Kol Nidre prayer, chanted on the eve of Yom Kippur, is one of the most emotionally powerful moments in Jewish liturgy — a legal annulment of unfulfilled vows that carries centuries of Jewish history, including echoes of forced conversions and religious persecution. Yom Kippur is the culmination of the ten Days of Awe, during which God seals the fate of every human being.",
    howObserved: "The 25-hour fast begins before sundown and ends after nightfall the following day, abstaining from food, water, leather shoes, bathing, cosmetics, and marital relations. The Kol Nidre service on the eve of Yom Kippur is one of the most attended services in Jewish life. Services include the Vidui (confessional prayer), Yizkor (memorial service for the deceased), and the dramatic Neilah closing service as the gates of heaven are said to close. Many Jews wear white, symbolizing purity and, in some traditions, the burial shroud — a reminder of mortality. The fast ends with the final blast of the shofar.",
    scriptureRef: "Leviticus 16:29-30",
    scriptureText: "This shall be a statute for you forever: In the seventh month, on the tenth day of the month, you shall afflict your souls, and do no work at all, whether a native of your own country or a stranger who dwells among you. For on that day the priest shall make atonement for you, to cleanse you, that you may be clean from all your sins before the Lord.",
    month: 7,
    day: 10,
    duration: 1,
    isLunar: true,
    greeting: "G'mar Chatimah Tovah — May you be sealed for a good year",
    foods: ["Pre-fast meal of chicken soup", "Kreplach", "Honey cake", "Break-fast bagels", "Lox and cream cheese", "Noodle kugel"],
    color: "#F5F0E8",
  },
  {
    slug: "sukkot",
    name: "Sukkot",
    hebrewName: "סוּכּוֹת",
    description: "The Festival of Tabernacles — a joyful seven-day harvest festival that begins on the fifteenth of Tishrei. Sukkot commemorates the forty years the Israelites spent wandering in the desert under divine protection after the Exodus from Egypt, living in temporary shelters. It is also one of the three ancient pilgrimage festivals.",
    significance: "Sukkot holds a dual significance: it is both a harvest thanksgiving and a historical commemoration. The sukkah — a temporary hut with an open roof through which the stars can be seen — represents the fragile dwellings of the Israelites in the desert and teaches humility and dependence on God. The holiday is called 'the season of our rejoicing' in Jewish liturgy. The four species — lulav (palm branch), etrog (citron), hadassim (myrtle), and aravot (willow) — are waved together in all six directions to symbolize God's presence throughout the universe. Sukkot also has ecological significance, reminding us of our connection to and dependence on the natural world.",
    howObserved: "The central observance is building and dwelling in a sukkah — a temporary outdoor structure decorated with hanging fruits, paper chains, and artwork. Meals and sometimes sleep are taken in the sukkah. The four species are held together and waved daily during morning prayers. The holiday includes Hallel (praise psalms) and Hoshana prayers in synagogue. Simchat Beit HaShoevah water-drawing celebrations with music and dancing were held in ancient times and are still celebrated today. The last day, Hoshana Rabbah, carries special significance as a final opportunity for divine mercy.",
    scriptureRef: "Leviticus 23:42-43",
    scriptureText: "You shall dwell in sukkot for seven days. All who are native Israelites shall dwell in sukkot, that your generations may know that I made the children of Israel dwell in sukkot when I brought them out of the land of Egypt. I am the Lord your God.",
    month: 7,
    day: 15,
    duration: 7,
    isLunar: true,
    greeting: "Moadim L'Simcha — Appointed times for rejoicing",
    foods: ["Stuffed vegetables (representing the harvest)", "Apple cake", "Pomegranate dishes", "Cholent", "Kreplach", "Stuffed cabbage"],
    color: "#2D7D3A",
  },
  {
    slug: "hanukkah",
    name: "Hanukkah",
    hebrewName: "חֲנוּכָּה",
    description: "The Festival of Lights — eight nights of celebration commemorating the miracle of the Temple oil and the Maccabean victory over the Seleucid Greek empire in 165 BCE. Hanukkah begins on the twenty-fifth of Kislev and, while relatively minor in the Jewish religious calendar, has become one of the most widely recognized Jewish holidays worldwide.",
    significance: "In the second century BCE, the Seleucid king Antiochus IV desecrated the Temple in Jerusalem and outlawed Jewish practice. A small band of Jewish fighters called the Maccabees, led by Judah Maccabee, launched a successful revolt and rededicated the Temple — the word Hanukkah means 'dedication' in Hebrew. When they came to relight the Temple's menorah, they found only enough ritually pure oil for one day. Miraculously, the oil burned for eight days — long enough to prepare a fresh supply. The holiday celebrates the triumph of light over darkness, the few over the many, and the preservation of religious freedom. In America, Hanukkah has taken on additional cultural significance as a celebration of Jewish identity in the December holiday season.",
    howObserved: "The central mitzvah is lighting the Hanukkiah (nine-branched menorah) — one candle the first night, adding one each subsequent night, using the shamash (helper candle) to light the others. The chanukiah is placed in a window to publicize the miracle. Traditional songs including Ma'oz Tzur and Hanerot Halalu are sung. Games with the dreidel (spinning top with Hebrew letters) are played, with the letters standing for 'A great miracle happened there.' Gifts are exchanged, especially in American Jewish communities. Fried foods are central to the celebration.",
    scriptureRef: "Numbers 7:84",
    scriptureText: "This was the dedication of the altar after it was anointed, when the leaders of Israel offered from each leader, one silver platter, one silver bowl, one gold pan.",
    month: 9,
    day: 25,
    duration: 8,
    isLunar: true,
    greeting: "Chag Urim Sameach — Happy Festival of Lights",
    foods: ["Latkes (potato pancakes)", "Sufganiyot (jelly doughnuts)", "Gelt (chocolate coins)", "Brisket", "Sour cream", "Applesauce"],
    color: "#3B7BD4",
  },
  {
    slug: "purim",
    name: "Purim",
    hebrewName: "פּוּרִים",
    description: "The Feast of Lots — one of the most festive and joyful days in the Jewish calendar, celebrated on the fourteenth of Adar. Purim commemorates the salvation of the Jewish people in ancient Persia from the plot of the royal vizier Haman, as told in the Book of Esther. It is a day of costumes, celebration, and solidarity.",
    significance: "The Book of Esther tells the story of Queen Esther and her cousin Mordecai, who saved the Jewish people from Haman's genocidal plot. Haman cast lots — purim in Hebrew — to determine the date for the destruction of the Jews. Through Esther's courage in revealing her Jewish identity to King Ahasuerus and interceding on behalf of her people, the plot was foiled. Uniquely among Jewish holidays, God's name does not appear in the Book of Esther — the story presents salvation through human courage and moral action. Purim has endured as a celebration of Jewish survival and resilience, with themes that resonate across centuries of Jewish history.",
    howObserved: "The Megillah (Book of Esther) is read aloud in synagogue, with congregants making noise with graggers (noisemakers) to drown out Haman's name whenever it is mentioned. Wearing costumes and masks is traditional, representing the hidden miracles of the story. Mishloach manot — gift baskets of food containing at least two different foods — are sent to friends and neighbors. Matanot l'evyonim (gifts to the poor) fulfills the obligation of charity. A festive Purim seudah (meal) is held, and it is considered a mitzvah to celebrate joyfully. Ad d'lo yada — to the point of not knowing — is the traditional level of festivity encouraged.",
    scriptureRef: "Esther 9:20-22",
    scriptureText: "And Mordecai wrote these things and sent letters to all the Jews who were in all the provinces of King Ahasuerus, both near and far, to establish among them that they should celebrate yearly the fourteenth and fifteenth days of the month of Adar, as the days on which the Jews had rest from their enemies, as the month which was turned from sorrow to joy for them, and from mourning to a holiday.",
    month: 12,
    day: 14,
    duration: 1,
    isLunar: true,
    greeting: "Chag Purim Sameach — Happy Purim",
    foods: ["Hamantaschen (triangular filled cookies)", "Kreplach", "Challah", "Chickpeas", "Wine", "Festive Purim seudah dishes"],
    color: "#9B59B6",
  },
  {
    slug: "passover",
    name: "Passover",
    hebrewName: "פֶּסַח",
    description: "Pesach — the Festival of Freedom — is one of the most widely observed Jewish holidays in the world. Beginning on the fifteenth of Nisan and lasting seven or eight days, Passover commemorates the Exodus from Egypt, when God freed the Israelites from slavery under Pharaoh. It is a time of storytelling, ritual, family, and the eternal affirmation that freedom matters.",
    significance: "The Exodus from Egypt is the foundational narrative of Jewish identity. The Torah commands Jews to see themselves as if they personally went out from Egypt — not just as ancestors but as participants in the liberation. The Passover Seder is one of the most elaborate and meaning-laden ritual meals in world religion: every element on the Seder plate carries symbolic weight, every action encodes historical memory. Passover teaches that the obligation to pursue freedom does not end with one's own liberation. The commandment to remember the experience of slavery grounds Jewish ethics in the imperative to protect the vulnerable. The Haggadah — 'the telling' — has been retold and reinterpreted by every generation of Jews, making it a living document of Jewish identity.",
    howObserved: "The Passover Seder is the central observance — a ritual meal following the Haggadah that includes the recounting of the Exodus, four cups of wine, the Seder plate (containing bitter herbs, charoset, shank bone, egg, karpas, and chazeret), and the afikomen (hidden matzah the children find). Chametz (leavened grain) is removed from the home before Passover. Matzah — unleavened bread — is eaten throughout the holiday, commemorating the bread that did not have time to rise when the Israelites fled Egypt. Prayers, songs, and discussion accompany the meal, with the goal of transmitting the story to each new generation.",
    scriptureRef: "Exodus 12:14",
    scriptureText: "So this day shall be to you a memorial; and you shall keep it as a feast to the Lord throughout your generations. You shall keep it as a feast by an everlasting ordinance.",
    month: 1,
    day: 15,
    duration: 8,
    isLunar: true,
    greeting: "Chag Pesach Sameach — Happy Passover",
    foods: ["Matzah", "Matzah ball soup", "Brisket", "Charoset", "Gefilte fish with horseradish", "Macaroons", "Potato kugel", "Tzimmes"],
    color: "#C9A84C",
  },
  {
    slug: "shavuot",
    name: "Shavuot",
    hebrewName: "שָׁבוּעוֹת",
    description: "The Festival of Weeks — occurring fifty days after Passover on the sixth of Sivan, Shavuot celebrates the giving of the Torah at Mount Sinai, the harvest of the first fruits in ancient Israel, and the spiritual completion of the Exodus. It is one of the three ancient pilgrimage festivals and a holiday of profound spiritual significance.",
    significance: "If Passover celebrates physical freedom from Egypt, Shavuot celebrates the spiritual purpose of that freedom — the receiving of the Torah, which gave the Jewish people its moral and spiritual framework. The Torah was given at Sinai exactly seven weeks after the Exodus, connecting the two holidays in an unbroken chain of meaning. The Book of Ruth is read on Shavuot — Ruth's declaration of loyalty to her mother-in-law Naomi ('Where you go, I will go; your people shall be my people') is a model of the covenant and love at the heart of Jewish commitment. Shavuot also marks the first fruits offering in the Temple, connecting the spiritual Torah to the physical abundance of the land.",
    howObserved: "Tikkun Leil Shavuot — all-night Torah study — is a widespread tradition, reflecting the idea that the Israelites fell asleep before Sinai and needed Moses to wake them, so Jews today stay awake to show their eagerness to receive the Torah. The Book of Ruth is read in synagogue. Synagogues and homes are decorated with flowers and greenery, representing the blooming of Mount Sinai before the giving of the Torah. Dairy foods are the traditional culinary custom, with various explanations including the connection to the 'land flowing with milk and honey.' Confirmation ceremonies are held in many synagogues.",
    scriptureRef: "Exodus 19:17-19",
    scriptureText: "And Moses brought the people out of the camp to meet with God, and they stood at the foot of the mountain. Now Mount Sinai was completely in smoke, because the Lord descended upon it in fire. Its smoke ascended like the smoke of a furnace, and the whole mountain quaked greatly. And when the blast of the trumpet sounded long and became louder and louder, Moses spoke, and God answered him by voice.",
    month: 3,
    day: 6,
    duration: 2,
    isLunar: true,
    greeting: "Chag Shavuot Sameach — Happy Shavuot",
    foods: ["Cheesecake", "Blintzes with sour cream", "Dairy quiche", "Cheese kreplach", "Cheese blintzes", "Ice cream", "Cheesecake cookies"],
    color: "#F5F0E8",
  },
  {
    slug: "tu-bishvat",
    name: "Tu B'Shvat",
    hebrewName: "טוּ בִּשְׁבָט",
    description: "The New Year of the Trees — occurring on the fifteenth of Shevat, Tu B'Shvat is an ancient agricultural new year that has evolved into a celebration of nature, the Land of Israel, and environmental stewardship. It marks the point in the Israeli agricultural calendar when the sap begins to rise in the trees.",
    significance: "In the Mishnah, Tu B'Shvat is listed as one of four new years, marking the point at which trees begin a new growth cycle for the purposes of agricultural tithes. Kabbalists in 16th-century Safed developed the Tu B'Shvat Seder — a mystical ritual modeled on the Passover Seder — as a way to repair the world through intentional eating of the fruits of the Land of Israel. In the modern era, Tu B'Shvat has taken on powerful ecological significance: it is Jewish Arbor Day, a time to connect to the land, practice environmental awareness, and affirm the Jewish commitment to being stewards of creation. In Israel, it is widely celebrated with tree planting.",
    howObserved: "Tree planting is the primary modern observance — in Israel and in diaspora communities worldwide. Some communities hold a Tu B'Shvat Seder, eating fruits and nuts associated with the Land of Israel, particularly the seven species: wheat, barley, grapes, figs, pomegranates, olives, and dates. Four cups of wine or juice, shifting from white to red, symbolize the seasons. Schools and youth groups often hold nature walks and environmental education programs. Tzedakah campaigns focused on ecology and environmental justice are organized. The holiday has become a focal point for Jewish environmentalism.",
    scriptureRef: "Deuteronomy 20:19",
    scriptureText: "When you besiege a city for a long time, while making war against it to take it, you shall not destroy its trees by wielding an ax against them; if you can eat of them, do not cut them down to use in the siege, for the tree of the field is man's life.",
    month: 11,
    day: 15,
    isLunar: true,
    greeting: "Chag Tu B'Shvat Sameach — Happy New Year of the Trees",
    foods: ["Dates", "Figs", "Pomegranates", "Grapes and raisins", "Olives", "Carob", "Almonds and mixed nuts", "Dried apricots"],
    color: "#2D7D3A",
  },
];

export function getAllHolidays(): Holiday[] {
  return holidays;
}

export function getHolidayBySlug(slug: string): Holiday | undefined {
  return holidays.find((h) => h.slug === slug);
}
