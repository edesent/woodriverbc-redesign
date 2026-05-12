export const site = {
  name: "Wood River Baptist Church",
  shortName: "Wood River",
  tagline: "Preaching God's Word Since 1723",
  verse: "Casting all your care upon him; for he careth for you.",
  verseReference: "1 Peter 5:7",
  address: "246 Kingstown Rd, Wyoming, RI 02898",
  mailingAddress: "P.O. Box 213, Wyoming, RI 02898",
  phone: "(401) 539-2642",
  secondaryPhone: "(401) 206-9378",
  email: "pastor@woodriverbc.org",
  originalUrl: "https://www.woodriverbc.org",
  facebook: "https://www.facebook.com/WoodRiverBC",
  instagram: "https://www.instagram.com/woodriver4christ/",
  podcast:
    "https://itunes.apple.com/us/podcast/wood-river-baptist-church/id1451324093?mt=2",
  twitter: "http://twitter.com/WoodRiverBC",
};

export const navGroups = [
  {
    label: "Our Daily Walk",
    items: [
      ["Devotionals", "/devotionals"],
      ["Scripture Memory", "/scripture-memory-1"],
      ["Bible Reading Tracker", "/bible-reading-tracker"],
      [
        "Bible StudyGPT",
        "https://chatgpt.com/g/g-681240e8934c81918366a095cffc6910-wood-river-baptist-church-bible-study",
      ],
      ["Bible Studies", "/bible-studies"],
      ["Missions Prayer Email Signup", "/missions-prayer-email-signup"],
      ["Prayer", "/prayer-2"],
      ["Prayer Request", "/prayer"],
      ["Ask A Question", "/ask-a-question"],
      ["Opportunities To Serve", "/opportunities-to-serve"],
      ["Christian Radio", "/christian-radio"],
      ["The Bible", "/the-bible"],
    ],
  },
  {
    label: "About WRBC",
    items: [
      ["About", "/about"],
      ["Find Us", "/find-us"],
      ["Contact Us", "/contact-us"],
      ["Pastor", "/pastor"],
      ["Covenant", "/covenant"],
      ["Mission", "/mission"],
      ["Members", "/directory"],
    ],
  },
] as const;

export const primaryNav = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Events", "/events"],
  ["Thy Word", "/thy-word-is-a-lamp-unto-my-feet"],
  ["Who Is Jesus", "/who-is-jesus"],
] as const;

export const services = [
  {
    title: "Sunday School",
    day: "Sunday",
    time: "10:00 AM",
    image: "/woodriver/sunday-school.jpg",
  },
  {
    title: "Morning Worship",
    day: "Sunday",
    time: "11:00 AM",
    image: "/woodriver/morning-worship.jpg",
  },
  {
    title: "Evening Worship",
    day: "Sunday",
    time: "6:00 PM",
    image: "/woodriver/evening-worship.jpg",
  },
  {
    title: "Prayer Meeting and Youth",
    day: "Wednesday",
    time: "6:30 PM",
    image: "/woodriver/wednesday-night.jpg",
  },
] as const;

export const homeLinks = [
  ["Who Is Jesus?", "/who-is-jesus"],
  ["The Romans Road", "/the-romans-road"],
  ["The Gospel In Your Own Language", "https://templebaptistchurch.com/pages/way-of-salvation.php"],
  ["Ask A Question", "/ask-a-question"],
  ["Prayer Request", "/prayer"],
] as const;

export const devotionals = [
  ["Bible Apologetics", "https://bibleapologetics.org/"],
  ["Thy Word Is A Lamp Unto My Feet", "/thy-word-is-a-lamp-unto-my-feet"],
  ["Spurgeon Morning Meditation", "https://www.sermonaudio.com/daily-devotional/morning"],
  ["Spurgeon Evening Meditation", "https://www.sermonaudio.com/daily-devotional/evening"],
  ["Faith's Checkbook", "https://www.romans45.org/faiths-checkbook"],
  ["My Utmost For His Highest", "https://utmost.org/"],
  ["Streams In the Desert", "https://www.crosswalk.com/devotionals/desert/"],
  ["Days of Praise", "https://www.icr.org/days-of-praise"],
  ["Love Worth Finding", "https://www.crosswalk.com/devotionals/loveworthfinding/"],
  ["The Valley of Vision", "https://banneroftruth.org/us/devotional/the-valley-of-vision/"],
] as const;

export const scriptureMemory = [
  "Selections from Psalm 119 Part 1",
  "The Greatest of These: I Corinthians 13",
  "Select Verses On Love",
  "Psalm 145:15-21 A Table Prayer of Thanksgiving",
  "Psalm 27 - A Psalm For Courage And Strength",
  "Philippians 2:1-11 The Humility & Exaltation of Christ",
  "Romans 8:31-39 - The Power Of God's Love To Us",
  "Isaiah 55:6-13",
  "John 1:1-14",
  "The Romans Road",
  "Thoughts on Prayer",
  "Jesus Is Coming Again!",
  "A Psalm of Patient Confidence",
  "The Soul-winners Concern",
  "Thoughts on True Worship",
  "The Importance Of God's Word",
  "I John 3:1-7",
  "Prompting Praise",
  "Heaven",
] as const;

export const bibleStudies = [
  {
    book: "Psalms",
    lessons: ["Psalm 33", "Psalm 78:1-8", "Psalm 45", "Psalm 42", "Psalm 37", "Psalm 32", "Psalm 27"],
  },
  {
    book: "1 Corinthians",
    lessons: [
      "1 Corinthians 1:1-8",
      "1 Corinthians 1:9-16",
      "1 Corinthians 1:17-25",
      "1 Corinthians 1:26-32",
      "1 Corinthians 2:1-6",
      "1 Corinthians 2:7-16",
      "1 Corinthians 3:1-11",
      "1 Corinthians 3:12-26",
      "1 Corinthians 4:1-5",
      "1 Corinthians 4:6-13",
      "1 Corinthians 4:14-21",
      "1 Corinthians 5",
      "1 Corinthians 6",
      "1 Corinthians 7:1-7",
      "1 Corinthians 7:8-16",
      "1 Corinthians 7:18-24",
      "1 Corinthians 7:25-40",
      "1 Corinthians 8:1-13",
    ],
  },
  {
    book: "Galatians",
    lessons: [
      "Galatians 5:1-12",
      "Galatians 4:17-31",
      "Galatians 4:8-16",
      "Galatians 4:1-7",
      "Galatians 3:19-29",
      "Galatians 3:10-19",
    ],
  },
  {
    book: "I John",
    lessons: ["I John 2:13", "I John 2:8", "I John 2:3", "I John 2:1-2", "I John 1:5-7", "I John 1:1-4"],
  },
  {
    book: "Habakkuk",
    lessons: [
      "Habakkuk 1:1",
      "Habakkuk 1:3",
      "Habakkuk 1:5",
      "Habakkuk 1:12",
      "Habakkuk 2:4",
      "Habakkuk 2:9",
      "Habakkuk 2:11",
      "Habakkuk 2:19",
      "Habakkuk 3:1, 2",
      "Habakkuk 3:16",
      "Habakkuk 3:19",
    ],
  },
] as const;

export const events = [
  {
    title: "Resurrection Day Services and Easter Breakfast",
    date: "Sunday, April 5, 2026",
    time: "6:30 AM - 11:30 PM",
    description:
      "Sunrise outdoor service, Easter breakfast, Jubilee hymnsing, and Resurrection Day service celebrating the risen Saviour.",
  },
  {
    title: "Christmas Eve Service",
    date: "Wednesday, December 24, 2025",
    time: "6:30 PM - 8:00 PM",
    description:
      "Worship with songs, praises, Scripture, joyful fellowship, and Christmas Eve candle-lighting.",
  },
  {
    title: "Living Nativity",
    date: "Saturday, December 20, 2025",
    time: "6:00 PM - 8:00 PM",
    description:
      "An outdoor Christmas gospel presentation with singing, the Christmas story, warm fires, and refreshments.",
    image: "/woodriver/vbs.jpg",
  },
  {
    title: "Vacation Bible School - Wonder Junction",
    date: "June 23-28, 2025",
    time: "Evenings and Saturday afternoon",
    description:
      "A train-themed VBS with Bible lessons, crafts, games, music, snacks, and truth from God's Word.",
    image: "/woodriver/vbs.jpg",
  },
  {
    title: "Church Fellowship & Charity Dinner",
    date: "Sunday, July 6, 2025",
    time: "10:00 AM - 2:00 PM",
    description:
      "Bi-monthly church fellowship dinner after morning worship with shared food, testimonies, prayer, and a special offering.",
  },
  {
    title: "American Independence Picnic & Prayer Meeting",
    date: "Wednesday, July 2, 2025",
    time: "5:00 PM - 9:00 PM",
    description:
      "Food, games, preaching, prayer, and reflection on civic responsibility and God's mercy.",
  },
] as const;

export const thyWordPosts = [
  {
    title: "The Legacy Worth Leaving",
    date: "June 17, 2025",
    reference: "Psalm 78:6-7",
    body:
      "God reminds us of our sacred duty to pass on His Word, works, and ways to the generation that follows. Homes should become places of praise, prayer, and courage.",
  },
  {
    title: "Because They Trust In Him",
    date: "June 3, 2025",
    body: "Learn the blessings of trusting God with your enemies.",
  },
  {
    title: "He Preparest A Table",
    date: "April 13, 2025",
    body:
      "How the Shepherd and Bishop of our souls prepares a table for His children in the presence of their enemies.",
  },
  {
    title: "The Valley of the Shadow of Death",
    date: "April 6, 2025",
    body: "How does our Great Shepherd lead us through the valley of the shadow of death?",
  },
  {
    title: "The Blessed Home",
    date: "February 23, 2025",
    body:
      "An exposition of Psalm 128 on the blessings that come to those who walk in the ways of the Lord.",
  },
] as const;

export const prayerSections = [
  {
    title: "Our Greatest Needs",
    items: [
      "Evangelism: the burden, the labourers, purification, opportunities, and empowerment for soul winning.",
      "Preaching: clear, pointed, convincing, God-glorifying, and believer-edifying.",
      "Revival: personally, in families, in the church, in the nation, and in the world.",
      "Personal worship: study of the Word, fellowship, prayer, confession, and steadfastness.",
    ],
  },
  {
    title: "Prayer For America And Our Soldiers",
    items: [
      "President, Vice President, Congress, Supreme Court, Governor, Rhode Island government, town councils, and school committees.",
      "Soldiers serving in Japan, Germany, South Korea, Guam, Italy, the United Kingdom, the Middle East, and elsewhere throughout the world.",
      "The wounded, families, finances, mental health, retired service members, and young recruits.",
    ],
  },
  {
    title: "For Revival",
    items: [
      "For the filling of the Holy Spirit.",
      "For preaching and teaching that exalts the Lord Jesus Christ and edifies believers.",
      "For the salvation of souls.",
      "For protection and provision for pastors and their families serving in Rhode Island.",
      "For courage, church planting, commitment, and contentment in following Christ.",
    ],
  },
  {
    title: "Villages And Cities Near Us",
    items: [
      "Wyoming, West Kingston, Hope Valley, Carolina, Wood River Junction, Rockville, Ashaway, Hopkinton, and Charlestown.",
      "Westerly, Providence, URI, and CCRI.",
    ],
  },
] as const;

export const radioLinks = [
  ["Family Christian Radio", "https://radio.securenetsystems.net/cirrusencore/FAMILY"],
  ["Bible Broadcasting Network", "https://www.bbnradio.org/"],
  ["KNVBC", "https://knvbc.com/"],
  ["Crown Radio", "https://crownradio.org/"],
] as const;

export const romansRoad = [
  ["Romans 3:19", "Every mouth is stopped, and all the world becomes guilty before God."],
  ["Romans 3:23", "All have sinned, and come short of the glory of God."],
  ["Romans 5:8", "Christ died for us while we were yet sinners."],
  ["Romans 6:23", "The wages of sin is death, but the gift of God is eternal life through Jesus Christ our Lord."],
  ["Romans 4:25", "Jesus was delivered for our offences and raised again for our justification."],
  ["Romans 14:9", "Christ died, rose, and revived, that He might be Lord both of the dead and living."],
  ["Romans 10:9", "Confess the Lord Jesus and believe that God raised Him from the dead."],
  ["Romans 10:13", "Whosoever shall call upon the name of the Lord shall be saved."],
  ["Romans 6:4", "Those saved by Christ should walk in newness of life."],
  ["Romans 12:1", "Present your body a living sacrifice, holy, acceptable unto God."],
] as const;

export const bibleBooks = [
  "Genesis",
  "Exodus",
  "Leviticus",
  "Numbers",
  "Deuteronomy",
  "Joshua",
  "Judges",
  "Ruth",
  "1 Samuel",
  "2 Samuel",
  "1 Kings",
  "2 Kings",
  "1 Chronicles",
  "2 Chronicles",
  "Ezra",
  "Nehemiah",
  "Esther",
  "Job",
  "Psalms",
  "Proverbs",
  "Ecclesiastes",
  "Song of Solomon",
  "Isaiah",
  "Jeremiah",
  "Lamentations",
  "Ezekiel",
  "Daniel",
  "Hosea",
  "Joel",
  "Amos",
  "Obadiah",
  "Jonah",
  "Micah",
  "Nahum",
  "Habakkuk",
  "Zephaniah",
  "Haggai",
  "Zechariah",
  "Malachi",
  "Matthew",
  "Mark",
  "Luke",
  "John",
  "Acts",
  "Romans",
  "1 Corinthians",
  "2 Corinthians",
  "Galatians",
  "Ephesians",
  "Philippians",
  "Colossians",
  "1 Thessalonians",
  "2 Thessalonians",
  "1 Timothy",
  "2 Timothy",
  "Titus",
  "Philemon",
  "Hebrews",
  "James",
  "1 Peter",
  "2 Peter",
  "1 John",
  "2 John",
  "3 John",
  "Jude",
  "Revelation",
] as const;

export type TextPage = {
  title: string;
  eyebrow?: string;
  image?: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
  cta?: readonly [string, string];
};

export const textPages: Record<string, TextPage> = {
  "about": {
    title: "About Wood River Baptist Church",
    intro: "Our church ministries are varied and are designed for a three-fold purpose.",
    bullets: ["Evangelism", "Discipleship", "Training ministers"],
    paragraphs: [
      "We have ministries to children, teenagers, men, women, and couples.",
      "We also minister to God's children outside of the church through outside ministries and missions.",
    ],
  },
  "about-wrbc": {
    title: "About WRBC",
    intro: "Wood River Baptist Church exists to worship God, preach His Word, and serve Rhode Island with the gospel of Jesus Christ.",
    cta: ["Learn more about our mission", "/mission"],
  },
  "find-us": {
    title: "Find Us",
    intro: site.address,
    paragraphs: [
      "Wood River Baptist Church meets at 246 Kingstown Rd in Wyoming, Rhode Island.",
      "Visitors are welcome at every regular service and special fellowship day.",
    ],
    cta: ["Open directions", "https://maps.google.com/?q=246+Kingstown+Rd,+Wyoming,+RI+02898"],
  },
  "contact-us": {
    title: "Contact Us",
    intro: "We would be glad to hear from you.",
    bullets: [
      `Phone: ${site.phone} or ${site.secondaryPhone}`,
      `Email: ${site.email}`,
      `Physical address: ${site.address}`,
      `Mailing address: ${site.mailingAddress}`,
    ],
  },
  "pastor": {
    title: "Juneau Family",
    eyebrow: "Pastor Jon Juneau",
    intro:
      "I came to Rhode Island with a burden for the people of my home state and have served Wood River Baptist Church since 2011.",
    paragraphs: [
      "I grew up having parents who loved me and taught me right from wrong; yet both were unsaved. Interestingly the four things I remember being instilled in me were don’t lie, smoke, drink, or do drugs. I determined to keep each of these painstakingly through my childhood yet for the approval of men I broke them, one by one in my high school years. I praise God for these four teachings of my parents because I could not deny having broken the law of my conscience and the laws of God. I believe without these teachings, I very well may not be saved today.",
      "I went to college in North Carolina fully expecting to continue living the way I had. But God quickly put within my life Christians, men whose lives where nothing like mine but seemed far better than mine. I heard the Gospel from them numerous times my freshman year and I was invited to church over and over again but I never went.",
      "That summer I determined to find the life that those men had. I would not drink alcohol, smoke, swear, or do drugs. It was the most miserable time of my life. Praise God that salvation is not by works of righteousness we have done but by His grace! We would certainly be most wretched. I came back to college and began spending more and more time with these Christians. I went to church, attended Bible studies, and listened more intently as they spoke of Christ. In October of my sophomore year, in my room, I asked Jesus to save me!",
      "I left Rhode Island having a real distaste for it and never planned to return. After salvation God put within me a great burden for the State of my parents and with tears I began to pray for the people there and that I would be able to return there to minister. After graduation I planned to get a high paying job that would quickly pay my debts then go to seminary, taking on more debt, and after years make my way to Rhode Island to minister. Any job I had barely paid for the necessities of life (and often not even that) much less the debts I owed. God used this time to break my pride in thinking my way was better than His. On a night, similar to the night of my salvation, I asked God to forgive me of this and many other things. I determined to let God lead me day by day.",
      "Within just a few days of this Pastor Chris Baker asked me to come help for the summer at the Knotty Oak Baptist Church! It is hard to believe even to this day. I had been to the church only a handful of times while on my brief breaks at home. I had participated in just a few activities and ministries. When Pastor called I did not even know it was the Pastor because I did not remember his name! I fell to my knees and wept in praise to God. Rather than years of waiting to minister in Rhode Island, I would be there in just weeks!",
      "In April of 2003 I came to Rhode Island and have began training and ministering under the guiding hand of Pastor Chris. While there I got married to a blessed woman, Heather and we have Five children, Riley, Lilyana, Chloe, Avery, and Bailey. I cannot thank God enough for what He has done in leading me back to Rhode Island.",
      "In October of 2011 I was asked to be the Pastor of this warm-hearted and determined assembly of believers; the Wood River Baptist Church. We have seen God do many astounding and wonderful works and we are excited for the future and look forward to God’s continued blessings as we obey Him. It is my sincere desire to honour the Lord day by day in this church, in this community, and in my home. It would be our privilege to have you and your family visit us on a Lord’s Day very soon! God Bless You, Pastor Jon Juneau",
    ],
  },
  "covenant": {
    title: "Church Covenant",
    intro:
      "Having, as we trust, been brought by Divine Grace to give ourselves in faith, love, and holy obedience to God, we covenant to walk together in church relationship with brotherly love.",
    paragraphs: [
      "We engage, by God's strength, to exercise Christian care and watchfulness over one another; to faithfully admonish and entreat one another; to not forsake the assembling of ourselves together; and to pray for ourselves and others.",
      "We will endeavor to bring up those under our care in the nurture and admonition of the Lord, to bear one another's burdens, to live carefully and watchfully in the world, and to support a faithful evangelical ministry among us.",
    ],
  },
  "mission": {
    title: "Mission",
    image: "/woodriver/cross-sky.jpg",
    intro:
      "This church is a self-governed, independent assembly of people who have placed their faith in the finished work of Jesus Christ as Saviour and Lord.",
    bullets: [
      "To maintain a house of public worship.",
      "To worship God.",
      "To seek the salvation of souls.",
      "To promote the study and preaching of God's Word.",
      "To support the dissemination of the Gospel of Christ throughout the world.",
      "To administer church property for religious uses in keeping with these purposes.",
    ],
  },
  "directory": {
    title: "Members",
    intro:
      "The member directory is a secure area on the current site. This redesign keeps the page in place and points members to sign in through the church's private access flow.",
    cta: ["Member sign in", "https://www.woodriverbc.org/directory"],
  },
  "opportunities-to-serve": {
    title: "Opportunities To Serve",
    intro:
      "There is room to serve through worship, outreach, hospitality, children's ministry, missions prayer, visitation, and practical care for the church family.",
    cta: ["Ask how to serve", "/contact-us"],
  },
  "missions-prayer-email-signup": {
    title: "Missionary Prayer Email Newsletter",
    intro:
      "Sign up to receive missionary prayer needs and keep the work of gospel missions before you in prayer.",
    cta: ["Email the church", `mailto:${site.email}`],
  },
  "ask-a-question": {
    title: "Ask A Question",
    intro:
      "If you have a Bible question, submit it to the church and someone will respond as quickly as possible.",
  },
  "prayer": {
    title: "Prayer Ministry",
    intro:
      "To join the prayer chain and receive pressing prayer needs of the church, text PRAY to (844) 868-2871.",
  },
  "services": {
    title: "Services",
    image: "/woodriver/cross-sky.jpg",
    intro:
      "You and your family are invited to join us for any of our services. You will be greeted by warm and kind people who have had their lives changed by Christ and will pray for you.",
    paragraphs: [
      "On fellowship dinner Sundays, the church eats and fellowships together after Morning Worship and does not hold Evening Worship.",
      "Wednesday evenings include Patch the Pirate, Youth Group, and Adult Prayer Meeting at 6:30 PM.",
    ],
  },
  "worship": {
    title: "Worship",
    intro:
      "Gather with Wood River Baptist Church for Sunday worship, preaching, prayer, and fellowship centered on the Word of God.",
    cta: ["View service times", "/services"],
  },
};

export const aliases: Record<string, string> = {
  "daily-worship": "daily-worship",
  "new-page-1": "romans-14-9",
};
