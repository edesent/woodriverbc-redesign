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
      ["Connect With Us", "/connect-with-us"],
      ["Pastor", "/pastor"],
      ["Covenant", "/covenant"],
      ["Mission", "/mission"],
      ["Members", "/directory"],
    ],
  },
] as const;

export const primaryNav = [
  ["Home", "/"],
  ["Services", "/#services"],
  ["Events", "/events"],
  ["Thy Word", "/thy-word-is-a-lamp-unto-my-feet"],
  ["Who Is Jesus", "/who-is-jesus"],
  ["Give", "/give"],
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
  ["Spurgeon's Morning and Evening", "https://spurgeonsmorningandevening.org"],
  ["Faith's Checkbook", "https://www.romans45.org/fcb/fcb.cgi"],
  ["My Utmost For His Highest", "https://utmost.org/"],
  ["Streams In the Desert", "https://www.crosswalk.com/devotionals/desert/"],
  ["Days of Praise", "https://www.icr.org/days-of-praise"],
  ["Love Worth Finding", "https://www.lwf.org/daily-devotionals"],
  ["The Valley of Vision", "https://banneroftruth.org/us/devotional/the-valley-of-vision/"],
] as const;

export const scriptureMemory = [
  "Selections from Psalm 119 Part 1",
  "The Greatest of These:\nI Corinthians 13",
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

const BS = "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/bible-studies";

export const bibleStudies = [
  {
    book: "Psalms",
    lessons: [
      { title: "Psalm 33", url: `${BS}/psalms/psalm-33.docx` },
      { title: "Psalm 78:1-8", url: `${BS}/psalms/psalm-78_1-8.docx` },
      { title: "Psalm 45", url: `${BS}/psalms/psalm-45.docx` },
      { title: "Psalm 42", url: `${BS}/psalms/psalm-42.docx` },
      { title: "Psalm 37", url: `${BS}/psalms/psalm-37.docx` },
      { title: "Psalm 32", url: `${BS}/psalms/psalm-32.docx` },
      { title: "Psalm 27", url: `${BS}/psalms/psalm-27.docx` },
    ],
  },
  {
    book: "1 Corinthians",
    lessons: [
      { title: "1 Corinthians 1:1-8", url: `${BS}/1-corinthians/1-cor-1_1-8.docx` },
      { title: "1 Corinthians 1:9-16", url: `${BS}/1-corinthians/1-cor-1_9-16.docx` },
      { title: "1 Corinthians 1:17-25", url: `${BS}/1-corinthians/1-cor-1_17-25.docx` },
      { title: "1 Corinthians 1:26-32", url: `${BS}/1-corinthians/1-cor-1_26-32.docx` },
      { title: "1 Corinthians 2:1-6", url: `${BS}/1-corinthians/1-cor-2_1-6.docx` },
      { title: "1 Corinthians 2:7-16", url: `${BS}/1-corinthians/1-cor-2_7-16.docx` },
      { title: "1 Corinthians 3:1-11", url: `${BS}/1-corinthians/1-cor-3_1-11.docx` },
      { title: "1 Corinthians 3:12-26", url: `${BS}/1-corinthians/1-cor-3_12-26.docx` },
      { title: "1 Corinthians 4:1-5", url: `${BS}/1-corinthians/1-cor-4_1-5.docx` },
      { title: "1 Corinthians 4:6-13", url: `${BS}/1-corinthians/1-cor-4_6-13.docx` },
      { title: "1 Corinthians 4:14-21", url: `${BS}/1-corinthians/1-cor-4_14-21.docx` },
      { title: "1 Corinthians 5", url: `${BS}/1-corinthians/1-cor-5_1-13.docx` },
      { title: "1 Corinthians 6", url: `${BS}/1-corinthians/1-cor-6.docx` },
      { title: "1 Corinthians 7:1-7", url: `${BS}/1-corinthians/1-cor-7_1-7.docx` },
      { title: "1 Corinthians 7:8-16", url: `${BS}/1-corinthians/1-cor-7_8-16.docx` },
      { title: "1 Corinthians 7:18-24", url: `${BS}/1-corinthians/1-cor-7_18-24.docx` },
      { title: "1 Corinthians 7:25-40", url: `${BS}/1-corinthians/1-cor-7_25-40.docx` },
      { title: "1 Corinthians 8:1-13", url: `${BS}/1-corinthians/1-cor-8_1-13.docx` },
    ],
  },
  {
    book: "Galatians",
    lessons: [
      { title: "Galatians 5:1-12", url: `${BS}/galatians/galatians-5_1-12.docx` },
      { title: "Galatians 4:17-31", url: `${BS}/galatians/galatians-4_17-31.docx` },
      { title: "Galatians 4:8-16", url: `${BS}/galatians/galatians-4_8-16.docx` },
      { title: "Galatians 4:1-7", url: `${BS}/galatians/galatians-4_1-7.docx` },
      { title: "Galatians 3:19-29", url: `${BS}/galatians/galatians-3_19-29.docx` },
      { title: "Galatians 3:10-19", url: `${BS}/galatians/galatians-3_10-19.docx` },
    ],
  },
  {
    book: "I John",
    lessons: [
      { title: "Knowing God — I John 2:13", url: `${BS}/i-john/knowing-god.pdf` },
      { title: "The True Light Now Shineth — I John 2:8", url: `${BS}/i-john/the-true-light-now-shineth.pdf` },
      { title: "We Know Him — I John 2:3", url: `${BS}/i-john/we-know-him.pdf` },
      { title: "We Have An Advocate — I John 2:1-2", url: `${BS}/i-john/we-have-an-advocate.pdf` },
      { title: "God Is Light — I John 1:5-7", url: `${BS}/i-john/god-is-light.pdf` },
      { title: "The Word of Life — I John 1:1-4", url: `${BS}/i-john/the-word-of-life.pdf` },
    ],
  },
  {
    book: "Habakkuk",
    lessons: [
      { title: "A Man With A Burden — Habakkuk 1:1", url: `${BS}/habakkuk/a-man-with-a-burden.pdf` },
      { title: "The Question All People Ask — Habakkuk 1:3", url: `${BS}/habakkuk/the-question-all-people-ask.pdf` },
      { title: "Remember God Is At Work — Habakkuk 1:5", url: `${BS}/habakkuk/remember-god-is-at-work.pdf` },
      { title: "The God I Know — Habakkuk 1:12", url: `${BS}/habakkuk/the-god-i-know.pdf` },
      { title: "Living By Faith — Habakkuk 2:4", url: `${BS}/habakkuk/living-by-faith.pdf` },
      { title: "All We Want Is More — Habakkuk 2:9", url: `${BS}/habakkuk/all-we-want-is-more.pdf` },
      { title: "When Stones Speak And Timbers Answer — Habakkuk 2:11", url: `${BS}/habakkuk/when-stones-speak-and-timbers-answer.pdf` },
      { title: "Calling On Gods That Cannot Answer — Habakkuk 2:19", url: `${BS}/habakkuk/calling-on-gods-that-cannot-answer.pdf` },
      { title: "The Heart Cry for Revival — Habakkuk 3:1-2", url: `${BS}/habakkuk/the-heart-cry-for-revival.pdf` },
      { title: "The Fear of the Lord — Habakkuk 3:16", url: `${BS}/habakkuk/the-fear-of-the-lord.pdf` },
      { title: "Rejoicing in the Lord — Habakkuk 3:19", url: `${BS}/habakkuk/rejoicing-in-the-lord.pdf` },
    ],
  },
] as const;

export const events = [
  {
    title: "250th Anniversary of America / VBS Cookout",
    date: "Friday, July 3, 2026",
    time: undefined,
    description: "Join us for a cookout celebrating the 250th Anniversary of America. Location: Wood River Baptist Church.",
    image: undefined,
    url: undefined,
  },
  {
    title: "4th of July Church Cookout",
    date: "Saturday, July 4, 2026",
    time: "11:00 AM – 3:00 PM",
    description: "Bring a dish! Location: Wood River Baptist Church. Call the church for more details: 401-539-2642.",
    image: undefined,
    url: undefined,
  },
  {
    title: "Movie Viewing — \"Young Washington\"",
    date: "Tuesday, July 7, 2026",
    time: "7:15 PM",
    description: "Location: Showcase Cinema, Warwick, RI.",
    image: undefined,
    url: undefined,
  },
  {
    title: "Teen Camp at Camp Northfield",
    date: "Monday, July 13 – Saturday, July 18, 2026",
    time: "All week",
    description:
      "Teens ages 14–18 are invited to join a week of Christ-centered preaching, fellowship, and camp activities at Camp Northfield in Northfield, Massachusetts. Speaker: Pastor Anthony Frazer. Cost: $340 per camper.",
    image: "/woodriver/wednesday-night.jpg",
    url: "https://www.campnorthfield.com/youth-camp-registration",
  },
  {
    title: "Men's Steak Fry",
    date: "Friday, July 24, 2026",
    time: "6:00 PM",
    description:
      "A free steak dinner for men, with practical instruction on maintaining small engines. Please RSVP by July 21.",
    image: undefined,
    url: "/events/mens-steak-fry",
  },
  {
    title: "Vacation Bible School — Emerald Crossing",
    date: "Monday, June 29 – Friday, July 3, 2026",
    time: "6:00 PM – 8:00 PM",
    description:
      "A week of Bible lessons, songs, crafts, games, and snacks for kids in Wyoming, Rhode Island. Bring your family and friends — registration is open.",
    image: "/woodriver/vbs.jpg",
    url: "https://woodriverbc.myanswers.com/emerald-crossing/",
  },
] as const;

export const thyWordPosts = [
  {
    title: "The Legacy Worth Leaving",
    date: "2025-06-17",
    author: "Pastor Jon Juneau",
    reference: "Psalm 78:6-7",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2025-06-17-the-legacy-worth-leaving.mp3",
    body: "Psalm 78:6-7 \"That the generation to come might know them, even the children which should be born... That they might set their hope in God, and not forget the works of God, but keep his commandments.\" We live in a time when true Christianity feels rare—a remnant generation, as Scripture often describes. In Psalm 78, God reminds us of our sacred duty: to pass on the knowledge of His Word, His works, and His ways to the generation that follows. This legacy is not just about what we say, but how we live. Fathers, mothers, teachers—our children are watching. They see our struggles, hear our prayers, and notice whether the name of Christ is spoken in reverence, not at all, or worse as a curse. It is not enough to be culturally Christian. Our homes must be altars of praise, our routines filled with reminders of God’s strength and goodness. For the younger generation, Psalm 78 is a call to recognize the rebellion that lies naturally within the heart. It is a call to bravery—not the kind that charges into battle, but the quiet, steady courage to follow God when no one else does. Whether you're 7 or 70, today is the day to ask God to \"set your heart aright.\" Ask Him to remove the stubbornness and replace it with a heart that delights in His commands. Let us be faithful stewards of His truth so that the next generation does not forget the mighty works of the Lord. Prayer: Lord, help me to teach Your truth diligently and to live it out bravely. Soften my heart when I resist, and make me steadfast in following You. May the next generation know and praise You because of the legacy we leave. Amen.",
  },
  {
    title: "Because They Trust In Him",
    date: "2025-06-03",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2025-06-03-because-they-trust-in-him.mp3",
    body: "Learn the blessings of trusting God with your enemies.",
  },
  {
    title: "He Preparest A Table",
    date: "2025-04-13",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2025-04-13-he-preparest-a-table.mp3",
    body: "How the Shepherd and Bishop of our souls prepares a table for His children in the presence of their enemies.",
  },
  {
    title: "The Valley of the Shadow of Death",
    date: "2025-04-06",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2025-04-06-the-valley-of-the-shadow-of-death.mp3",
    body: "How does our Great Shepherd lead us through the Valley of the Shadow of Death\"?",
  },
  {
    title: "The Blessed Home",
    date: "2025-02-23",
    author: "Pastor Jon Juneau",
    reference: "Psalm 128",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2025-02-23-the-blessed-home.mp3",
    body: "An exposition of Psalm 128 reveals the profound blessings that come to those who walk in the ways of the Lord. This Psalm emphasizes the significance of a life lived in faithfulness, portraying the joy and fulfillment experienced within the family and community that honor God’s teachings.",
  },
  {
    title: "The Desolation of Loneliness",
    date: "2024-02-15",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2024-02-15-the-desolation-of-loneliness.m4a",
    body: "What has God done to help us through the lonely times? Listen to find out.",
  },
  {
    title: "Faithful Timothy",
    date: "2024-02-06",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2024-02-06-faithful-timothy.m4a",
    body: "For this cause have I sent unto you Timotheus, who is my beloved son, and faithful in the Lord, who shall bring you into remembrance of my ways which be in Christ, as I teach every where in every church. What made Timothy a faithful servant of God? Listen to today’s message to find out.",
  },
  {
    title: "Saved Membership and Decision-making Disciples",
    date: "2024-02-06",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2024-02-06-saved-membership-and-decision-making-disciples.m4a",
    body: "Who should be a member of the Bible-believing church and who should be involved in the decision making of the church? Listen in to our Sunday School for Adults to hear what the Scripture says.",
  },
  {
    title: "The Lord Jesus Christ Is The Light",
    date: "2020-01-21",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2020-01-21-the-lord-jesus-christ-is-the-light.mp3",
  },
  {
    title: "The Light",
    date: "2020-01-21",
    author: "Kurtis Radock",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2020-01-21-the-light.mp3",
  },
  {
    title: "Bible Faith",
    date: "2020-01-21",
    author: "John Mills",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2020-01-21-bible-faith.mp3",
  },
  {
    title: "Every Soul",
    date: "2020-01-21",
    author: "John Mills",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2020-01-21-every-soul.mp3",
  },
  {
    title: "Simeon and Anna",
    date: "2019-12-31",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2019-12-31-simeon-and-anna.mp3",
  },
  {
    title: "What Mary Said About Christ Jesus",
    date: "2019-12-31",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2019-12-31-what-mary-said-about-christ-jesus.mp3",
  },
  {
    title: "The Importance of Prayer",
    date: "2019-12-31",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2019-12-31-the-importance-of-prayer.mp3",
  },
  {
    title: "The Suffering Of Saints",
    date: "2019-12-31",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2019-12-31-the-suffering-of-saints.mp3",
  },
  {
    title: "Holiness",
    date: "2019-12-31",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2019-12-31-holiness.mp3",
  },
  {
    title: "The Power Of Prayer",
    date: "2019-12-31",
    author: "Kurtis Radock",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2019-12-31-the-power-of-prayer.mp3",
  },
  {
    title: "The Gifts Of The Holy Spirit Part 2: A More Excellent Way",
    date: "2018-10-15",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-10-15-the-gifts-of-the-holy-spirit-part-2-a-more-excellent-way.mp3",
    body: "Of The Holy Spirit: A More Excellent Way Pastor Jon Juneau Download",
  },
  {
    title: "The Gifts Of The Holy Spirit Part 2",
    date: "2018-10-09",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-10-09-the-gifts-of-the-holy-spirit-part-2.mp3",
  },
  {
    title: "The Gifts Of The Holy Spirit Part 1",
    date: "2018-10-09",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-10-09-the-gifts-of-the-holy-spirit-part-1.mp3",
  },
  {
    title: "Overcoming",
    date: "2018-10-09",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-10-09-overcoming.mp3",
  },
  {
    title: "1 Peter 3",
    date: "2018-09-17",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-09-17-1-peter-3.mp3",
    body: "Jon Juneau Download",
  },
  {
    title: "Ebenezer! God Has Done Great Things",
    date: "2018-09-17",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-09-17-ebenezer-god-has-done-great-things.mp3",
  },
  {
    title: "Know Her Whom You Dwell",
    date: "2018-09-17",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-09-17-know-her-whom-you-dwell.mp3",
    body: "Her With Knowledge Pastor Jon Juneau Download",
  },
  {
    title: "Occupy Till I Come",
    date: "2018-09-17",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-09-17-occupy-till-i-come.mp3",
    body: ": The Pragmatic Christian Pastor Jon Juneau Download",
  },
  {
    title: "The Bishop And Shepherd Of Our Souls",
    date: "2018-08-29",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-08-29-the-bishop-and-shepherd-of-our-souls.mp3",
  },
  {
    title: "God's Precious Word",
    date: "2018-08-29",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-08-29-god-s-precious-word.mp3",
  },
  {
    title: "Fasting And Prayer",
    date: "2018-08-21",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-08-21-fasting-and-prayer.mp3",
    body: "Fasting Pastor Jon Juneau Download",
  },
  {
    title: "Prophesy Q & A",
    date: "2018-08-21",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-08-21-prophesy-q-a.mp3",
  },
  {
    title: "The Revived Roman Empire",
    date: "2018-08-21",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-08-21-the-revived-roman-empire.mp3",
  },
  {
    title: "The King Of The North And The Kings Of The East",
    date: "2018-08-21",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-08-21-the-king-of-the-north-and-the-kings-of-the-east.mp3",
    body: "Of The North The King's Of The East August Rosado Download",
  },
  {
    title: "Heaven Is Wonderful",
    date: "2018-08-17",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-08-17-heaven-is-wonderful.mp3",
  },
  {
    title: "Hope In The Darkness: Psalm 31",
    date: "2018-07-30",
    author: "Pastor Jon Juneau",
    reference: "Psalm 31",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-07-30-hope-in-the-darkness-psalm-31.mp3",
  },
  {
    title: "The Lord Hath Done Great Things For Them",
    date: "2018-07-24",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-07-24-the-lord-hath-done-great-things-for-them.mp3",
    body: "Juneau",
  },
  {
    title: "Train Up A Child",
    date: "2018-07-16",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-07-16-train-up-a-child.mp3",
    body: "Juneau",
  },
  {
    title: "Suffering",
    date: "2018-07-14",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-07-14-suffering.mp3",
  },
  {
    title: "The Evangelistic Example Of Christ",
    date: "2018-07-10",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-07-10-the-evangelistic-example-of-christ.mp3",
  },
  {
    title: "God's Creation Declares",
    date: "2018-07-03",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-07-03-god-s-creation-declares.mp3",
  },
  {
    title: "A Father's Day Message",
    date: "2018-06-27",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-06-27-a-father-s-day-message.mp3",
  },
  {
    title: "Be Ready to Give A Reason",
    date: "2018-06-12",
    author: "Pastor Jonathan Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-06-12-be-ready-to-give-a-reason.mp3",
  },
  {
    title: "Is There A Reason",
    date: "2018-06-12",
    author: "Jonathan Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2018-06-12-is-there-a-reason.mp3",
  },
  {
    title: "The Mount Of Olives",
    date: "2017-01-07",
    author: "Pastor Jon Juneau",
    reference: "2 Samuel 15:30",
    body: "Taken from the daily devotional, \"Days of Praise.\" This meditational though is written byHenry Morris of the Institute for Creation Research. Learn more at www.icr.org “And David went up by the ascent of mount Olivet, and wept as he went up, and had his head covered, and he went barefoot: and all the people that was with him covered every man his head, and they went up, weeping as they went up.” ( 2 Samuel 15:30 ) The Mount of Olives overlooks Jerusalem from the east. This first reference to it notes the sad occasion when King David had to flee Jerusalem for his life, escaping the conspiracy of his estranged son Absalom. Just as David wept over Jerusalem as he left it, so would his greater son, Jesus, a thousand years later, weep over the city as He entered it from Mount Olivet ( Luke 19:37 , 41). It was there that He gave the great prophecy of His second coming ( Matthew 24:3 ). It was also there He went with His disciples after the last supper, and there He agonized in prayer, alone, in the Garden of Gethsemane ( Mark 14:26 , 32). Finally, after His death and resurrection, it was from the Mount of Olives that He ascended back into heaven ( Acts 1:10-12 ). This is far from the end of the story, however. The Mount of Olives has an amazing role yet to play in the world’s future, according to a prophecy given long ago. “Behold, the day of the LORD cometh, . . . And his feet shall stand in that day upon the mount of Olives, which is before Jerusalem on the east, and the mount of Olives shall cleave in the midst thereof toward the east and toward the west, and there shall be a very great valley; and half of the mountain shall remove toward the north, and half of it toward the south” ( Zechariah 14:1 , 4). Instead of a mountain there will be a valley, and “living waters shall go out from Jerusalem” (v. 8). Instead of a mountain for weeping there will be a stream of rejoicing, and “the LORD shall be king over all the earth” (v. 9).",
  },
  {
    title: "By The Blood Of Christ",
    date: "2017-01-04",
    author: "Pastor Jon Juneau",
    reference: "Hebrews 10:19-22",
    body: "Having therefore, brethren, boldness to enter into the holiest by the blood of Jesus, by a new and living way, which he hath consecrated for us, through the veil, that is to say his flesh; and having a high priest over the house of God; let us draw near with a true heart in full assurance of faith, having our hearts sprinkled from an evil conscience, and our bodies washed with pure water. Hebrews 10:19-22 In Hebrews 4, we also have God tell us this, \"Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need.\" How can we have such boldness before an all holy and truly great God? There is only one way: through the blood of Christ. Without this we could have no boldness at all. We could only come before Him with horror at what might befall us. In the times of the Tabernacle and Temple of God in Jerusalem. The high priest would enter into the holiest once a year. This room separated by a thick veil was where the Ark of the Covenant was located. Seated upon this Ark was God himself. At one point during King David's reign the Ark was being brought back upon a cart. The cart was shaken by the oxen and David's friend, Uzzah, took hold of it and he died. This is what the high priest would face in this once a year entering in. It is said that they would tie a rope and to the priest that if he were to die as Uzzah did, others could pull him out without entering in! It is hard for us to How different it is for us now that Jesus has shed His blood for us! We can enter boldly, and not once a year but all the time! Why do we hesitate to enter into this holy place with God? It is not horror as the high priest of old. It is sadly our own lack of interest in our great God and creator. May this year be a year not of occasional time with God but oftentimes with Him! The veil is torn in two and there is no longer a barrier to keep us from Him for those who have trusted Him, the Saviour, Jesus Christ. Humble yourselves in the sight of God and come! You are accepted not because of what you have done, but because of what He has done for you! When you enter in you can ask for mercy because of sins and He will give it! You can ask for grace to help, He will give it! There is no fear of God killing you off because you enter into His presence for His glory and your help. Come boldly! Question: What keeps you from coming boldly to the throne of Christ?",
  },
  {
    title: "He Hath Quickened",
    date: "2017-01-03",
    author: "Pastor Jon Juneau",
    reference: "Ephesians 2:1",
    body: "\"And you hath he quickened, who were dead in trespasses and sins;\" ~ Ephesians 2:1 You - Paul is the scribe of this letter and he is writing it to the church in Ephesus. This by extension would mean that God is speaking to all who are saved today as well. he hath - this wonderful word! This speaks of God's great ability. It means the past work, in this case of God. There is nothing that God is incapable of doing and in this case it is a miracle what he has done! quickened - in this instance this means that God gave us our being, \"we are, when we weren't.\" God is able to take something that isn't and make it something that is. Quickening is always a miracle because nothing and no one but God can take nothing and make something. Here God makes us alive from the dead. He by saving us makes us alive! who were - there is a proper description of who we were before God did this quickening work... dead - we were dead. We were without God or apart from Him. We were not joined with God, we were without. We were dead. in trespasses - the reason for our being without is trespasses. I have committed trespasses. I have deviated from God. I have decided to leave Him and His way. I was dead because of me. and sins - again it is my sins that have separated me from God. I have missed the mark. Praise the Lord for His wonderful work. I was dead and now I am alive by His work. I trespassed against Him and yet he loved me (vs. 4) and made me alive! Today, if you have come to Jesus Christ, would you remember this great work he has done. It is a true miracle! Also remember that all that we are is because of Him. We have nothing to boast in except Him. We have free entrance into His presence because of what He did for us. If he did not we would be forever and perilously barred from Him. In thinking about these verses, Oswald Chambers wrote, \"We must never allow the idea that because we have been obedient, because our need is great, because we long for it, therefore God will hear us. There is only one way into the holiest, and that is by the blood of Jesus.\" He has made us a being, not dead but alive, and therefore we can enter boldly before Him. Enter boldly today brethren!",
  },
  {
    title: "From C.H. Spurgeon's Morning Meditation",
    date: "2016-06-27",
    author: "Pastor Jon Juneau",
    reference: "Exodus 8:28",
    body: "Only ye shall not go very far away.\"—Exodus 8:28. THIS is a crafty word from the lip of the arch-tyrant Pharaoh. If the poor bondaged Israelites must needs go out of Egypt, then he bargains with them that it shall not be very far away; not too far for them to escape the terror of his arms, and the observation of his spies. After the same fashion, the world loves not the non-conformity of nonconformity, or the dissidence of dissent, it would have us be more charitable and not carry matters with too severe a hand. Death to the world, and burial with Christ, are experiences which carnal minds treat with ridicule, and hence the ordinance which sets them forth is almost universally neglected, and even contemned. Worldly wisdom recommends the path of compromise, and talks of \"moderation.\" According to this carnal policy, purity is admitted to be very desirable, but we are warned against being too precise; truth is of course to be followed, but error is not to be severely denounced. \"Yes,\" says the world, \"be spiritually minded by all means, but do not deny yourself a little gay society, an occasional ball, and a Christmas visit to a theatre. What's the good of crying down a thing when it is so fashionable, and everybody does it?\" Multitudes of professors yield to this cunning advice, to their own eternal ruin. If we would follow the Lord wholly, we must go right away into the wilderness of separation, and leave the Egypt of the carnal world behind us. We must leave its maxims, its pleasures, and its religion too, and go far away to the place where the Lord calls His sanctified ones. When the town is on fire, our house cannot be too far from the flames. When the plague is abroad, a man cannot be too far from its haunts. The further from a viper the better, and the further from worldly conformity the better. To all true believers let the trumpet-call be sounded, \"Come ye out from among them, be ye separate.\"",
  },
  {
    title: "BEHOLD!",
    date: "2016-06-15",
    author: "Pastor Jon Juneau",
    body: "bless us by letting us see intently His great love. His love calls us sons and daughters of His. We! We who were at enmity with Him. We whose sin reveals not love but disdain. We had no good affection for Him as our creator but worshipped the creature instead. What amazing love! Lord, help us to behold your love for us. Lord, how we have failed to be pure and holy. Help us today to purify ourselves that we may be prepared for that day when we see you!",
  },
  {
    title: "Those That Wait Upon The Lord",
    date: "2016-06-14",
    author: "Pastor Jon Juneau",
    reference: "Isaiah 40:28-31",
    body: "Hast thou not known? hast thou not heard, that the everlasting God, the Lord , the Creator of the ends of the earth, fainteth not, neither is weary? there is no searching of his understanding. He giveth power to the faint; and to them that have no might he increaseth strength. Even the youths shall faint and be weary, and the young men shall utterly fall: But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint. Isaiah 40:28-31 The Lord tells us in Galatians 6:9 to \"be not weary.\" Yet the Lord also knows that our flesh grows weary and we are apt to quit doing His will. How can God command something that our flesh is incapable of? Does He want to drive us into the ground like a prisoner at a Siberian labor camp. Of course we know this is not within God's character. He does not grow weary like we do. He is the \"Everlasting God, the Lord, the Creator of the ends of the earth, that fainteth not, neither is weary!\" Oh how we must be reminded of this each day! Without this reminder we will either live at ease, never laboring in prayer, never seeking and doing God's will, never doing good to all men especially to those who are of the household of faith; or we will labor until we are ragged and quit with bitter and untrue thoughts about God. No person is limitless in strength and power. Young people at their peak will faint and get frustrated and utterly fall. This fall is brought on by pride, thinking that there is a capability of doing the work of God because of youth, strength, intelligence, or training. God's work cannot be done without God. Wonderfully He giveth more strength! I think all of God's children have come to the end of our rope trying to please our Father in doing His will. I am glad He does not leave us to pick ourselves up and continue wearily lest we be whipped. Rather He says come to Me who never loses His power. He says, \"wait upon me and I will renew your strength.\" This time though it will not be the limited strength of our flesh but the limitless strength of God. It is important to remember that our waiting is not once for a lifetime of strength. We wait everyday for strength for today. This morning, wait on the Lord to give you His strength. You will be able to do all He would have you to do today. Wait I say on the Lord!",
  },
  {
    title: "The Lord's Creation Speaks",
    date: "2016-06-13",
    author: "Pastor Jon Juneau",
    reference: "Job 12:7",
    body: "But ask now the beasts, and they shall teach thee; and the fowls of the air, and they shall tell thee: Or speak to the earth, and it shall teach thee: and the fishes of the sea shall declare unto thee. Who knoweth not in all these that the hand of the Lord hath wrought this? In whose hand is the soul of every living thing, and the breath of all mankind. Job 12:7‭-‬10 Job, in responding to his friend, declares that the creation of the Lord speaks to us of His work in our lives. Of course the lower creatures do not speak with language but they most certainly declare the glory of the Lord. Job was experiencing more loss and heartache than any person ever has. I believe he looked to the creation of God and found some encouragement. His creation proves He cares because of its beauty, order, and vastness. His creation can speak to you too. Look, smell, touch, and even taste it and then think about how it all works. You will be praising God for His work very soon. I do not believe you need a doctorate in order to scientifically observe God's amazing creation. Last night at church we worked through these statements of Job and we were encouraged in the Lord. 1) Ask now the beasts and it shall teach thee. We thought on the ants amazing ability to pick up and move objects many times their bodyweight. Also spiders which use several types of thread to design their web. And the giraffe that could not drink water without an ability to unconsciously have its huge heart stop as it bends its neck down. If it didn't the blood vessels in its brain would rupture due to incredible pressure. Of course I've never observed this but it is true! What observations have you made of God's amazing creatures. 2) And the fowls of the air , and they shall tell thee. Have you considered the ingenuity of Canadian geese that fly in a V formation. This allows them to fly incredible distances by sharing the drag of the air as they alternate the front position. The woodpecker which can use great force to pick into trees and yet doesn't suffer concussions. It also has a very long tongue that wraps around its skull. It uses this tongue to reach into trees to capture bugs. The hummingbird is remarkable, several folks have these birds come back every year to great delight. Have you ever been taught by birds? 3) Talk to the earth, and shall teach thee. In everything except God's creation if their is symmetry, design is assumed. Have you considered the symmetry of leaves, flowers, and so many other things. The symmetry of these things help define their beauty. The process of photosynthesis is amazing and all of the parts of the process have to work or there would be no plants. The very dirt we walk on is designed just right for life to exist. What things on the earth lead you to remember the greatness of God. 4) The fishes of the sea shall declare unto thee. The nautilus is an amazing creation. It moves through the ocean by filling and emptying chambers in its shell. Jules Verne's, 20,000 Leagues Under The Sea, has a submarine called, The Nautilus , and submarines today work using this design. Breathing with gills is another life system that would not work without many parts working together perfectly. It is far from simple and no inventor has recreated it. What part of God's wonderful watery creation has spoken to you? The Lord's creation is truly remarkable! If you have had trials and difficulties in your life and have struggled to praise and worship the Lord Jesus Christ. Look and let His creation speak to you. It will change your life! Nautilus The nautilus move by filling and emptying chambers in its shell. Modern submarines use this same design.",
  },
  {
    title: "Follow In Our Father's Footsteps",
    date: "2016-04-05",
    author: "Pastor Jon Juneau",
    reference: "Ephesians 5:1",
    body: "Be ye therefore followers of God, as dear children; And walk in love, as Christ also hath loved us, and hath given himself for us an offering and a sacrifice to God for a sweetsmelling savour. Ephesians 5:1, 2 The Lord has made it possible for all who have received Him to follow in HIs footsteps. This shows God's truly remarkable grace. As some are overwhelmed at the prospect of following in the footsteps of a father who has accomplished much we should be overwhelmed by the prospect of following in the footsteps of our Heavenly Father who created all things and is holy beyond compare. Yet He has made it possible and wants us to do so! Notice the word followers in Ephesians 5:1 and the word walk in Ephesians 5:2 . When we follow we go forward step by step with another person. In order to walk we must take steps. The Lord is telling us to follow in His footsteps. We know that this figure of speech is speaking of living our lives as one who has gone before has. How do we live our lives as God does? Notice: One, we are his children. Truly the relationship that is most appropriate for following in another's footsteps is Father and Child. The Bible tells us in John 1:12 that, \"But as many received Him, to them gave he power to become the sons of God, even to them that believe on His name.\" If you have received Jesus Christ as your Saviour, you are His child. Two, we are His dear children. In other places this word is translated, wellbeloved. We are not despised children, illegitimate children, abandoned children, or beaten children. We are God's children, wellbeloved! God's love for us is more than we can comprehend. We often say to our children, \"I love you more than you know.\" This may be true but this is most certainly true of God's love for us. Notice in Ephesians 5:2, Christ loved us an offered himself for us that we may be a sweetsmelling savour to Him. With this as our foundation God says, \"Walk in love.\" In order to follow in His footsteps, we must love others as He loves us. When we are mean-spirited or self-serving with our wives we are not following in our God's footsteps. When we treat our children as servants rather than raising them in the nurture and admonition of the Lord, we are not following in our God's footsteps. When we look down upon and are unfriendly to a fellow church member because they have been caught in sin we are not following in our God's footsteps. The list of our steps and missteps as God's children in this world are infinite. The truth that God would have us follow in His steps is overwhelming. Certainly God will have to be merciful to us. He has given numerous promises that He is merciful! ( I John 1:9 , Lamentations 3:22, 23 , Luke 7:39-50 , etc.) By God's grace we can walk with Him today!",
  },
  {
    title: "The Pastor's Battle With The Devil",
    date: "2016-03-08",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2016-03-08-the-pastor-s-battle-with-the-devil.mp3",
  },
  {
    title: "Let Us Not Sleep",
    date: "2016-03-05",
    author: "Pastor Jon Juneau",
    reference: "1 Thessalonians 5:6",
    body: "For more thought provoking devotions and help in your personal walk with God go to: www.woodriverbc.org and click the Worship tab. Saturday, March 05, 2016 This Morning's Meditation C. H. Spurgeon \"Let us not sleep, as do others.\"—1 Thessalonians 5:6. THERE are many ways of promoting Christian wakefulness. Among the rest, let me strongly advise Christians to converse together concerning the ways of the Lord. Christian and Hopeful, as they journeyed towards the Celestial City, said to themselves, \"To prevent drowsiness in this place, let us fall into good discourse.\" Christian enquired, \"Brother, where shall we begin?\" And Hopeful answered, \"Where God began with us.\" Then Christian sang this song— \"When saints do sleepy grow, let them come hither, And hear how these two pilgrims talk together; Yea, let them learn of them, in any wise, Thus to keep open their drowsy slumb'ring eyes. Saints' fellowship, if it be managed well, Keeps them awake, and that in spite of hell.\" Christians who isolate themselves and walk alone, are very liable to grow drowsy. Hold Christian company, and you will be kept wakeful by it, and refreshed and encouraged to make quicker progress in the road to heaven. But as you thus take \"sweet counsel\" with others in the ways of God, take care that the theme of your converse is the Lord Jesus. Let the eye of faith be constantly looking unto Him; let your heart be full of Him; let your lips speak of His worth. Friend, live near to the cross, and thou wilt not sleep. Labour to impress thyself with a deep sense of the value of the place to which thou art going. If thou rememberest that thou art going to heaven, thou wilt not sleep on the road. If thou thinkest that hell is behind thee, and the devil pursuing thee, thou wilt not loiter. Would the manslayer sleep with the avenger of blood behind him, and the city of refuge before him? Christian, wilt thou sleep whilst the pearly gates are open—the songs of angels waiting for thee to join them—a crown of gold ready for thy brow? Ah! no; in holy fellowship continue to watch and pray that ye enter not into temptation.",
  },
  {
    title: "The Pastor",
    date: "2016-02-23",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2016-02-23-the-pastor.mp3",
    body: "Jon Juneau",
  },
  {
    title: "Guarded by His Power",
    date: "2016-02-16",
    author: "Pastor Jon Juneau",
    reference: "Mark 6:47",
    body: "This devotional is by the late Adrian Rogers' \"Love Worth Finding.\" Find this daily devotional and many more tools for worship on our website. www.woodriverbc.org “ And when evening was come, the ship was in the midst of the sea, and He alone on the land. And He saw them toiling in rowing … and … He cometh unto them, walking upon the sea … ” - Mark 6:47 Jesus’ disciples were way out in the sea, and Jesus was on the shore. But He saw them toiling and rowing. He never took His eyes off them. Are you in the midst of a storm? Did you know He sees you right now? You say, “He doesn’t know where I am. He doesn’t know this difficulty. Why is He so far away? Why am I in the storm and He is on the shore?” Friend, He is there, and He’s praying for you. He’s up there on the mountain looking down. He sees right through the dark. You can’t see Him, but He sees you. You can say, “His eye is on the sparrow, and I know He watches me.” My advice for you in the midst of your storm is to see Jesus, the great I AM, and see Him walking on the water. And that thing that looks like it’s going to be over your head is already under His feet. You’re seated in the heavenlies with Him. And you can’t drown with your head above water. He is the great I AM. You can put it down: you are guarded by His power.",
  },
  {
    title: "The Walk of Love",
    date: "2016-02-15",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2016-02-15-the-walk-of-love.mp3",
  },
  {
    title: "Sufferings and Consolations",
    date: "2016-02-12",
    author: "Pastor Jon Juneau",
    reference: "2 Corinthians 1:5",
    body: "Spurgeon's \"Morning and Evening\" devotional. You can find this and many other tools to meet with the Lord each day on our website. http://www.woodriverbc.org/devotionals/ Charles H. Spurgeon \"For as the sufferings of Christ abound in us, so our consolation also aboundeth by Christ.\"—2 Corinthians 1:5. HERE is a blessed proportion. The Ruler of Providence bears a pair of scales—in this side He puts His people's trials, and in that He puts their consolations. When the scale of trial is nearly empty, you will always find the scale of consolation in nearly the same condition; and when the scale of trials is full, you will find the scale of consolation just as heavy. When the black clouds gather most, the light is the more brightly revealed to us. When the night lowers and the tempest is coming on, the Heavenly Captain is always closest to His crew. It is a blessed thing, that when we are most cast down, then it is that we are most lifted up by the consolations of the Spirit. One reason is, because trials make more room for consolation. Great hearts can only be made by great troubles. The spade of trouble digs the reservoir of comfort deeper, and makes more room for consolation. God comes into our heart—He finds it full—He begins to break our comforts and to make it empty; then there is more room for grace. The humbler a man lies, the more comfort he will always have, because he will be more fitted to receive it. Another reason why we are often most happy in our troubles, is this— then we have the closest dealings with God. When the barn is full, man can live without God: when the purse is bursting with gold, we try to do without so much prayer. But once take our gourds away, and we want our God; once cleanse the idols out of the house, then we are compelled to honour Jehovah. \"Out of the depths have I cried unto thee, O Lord.\" There is no cry so good as that which comes from the bottom of the mountains; no prayer half so hearty as that which comes up from the depths of the soul, through deep trials and afflictions. Hence they bring us to God, and we are happier; for nearness to God is happiness. Come, troubled believer, fret not over your heavy troubles, for they are the heralds of weighty mercies.",
  },
  {
    title: "The First Exhortation",
    date: "2016-02-10",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2016-02-10-the-first-exhortation.mp3",
    body: "Exhortaion Pastor Jon Juneau",
  },
  {
    title: "The Rock That Is Higher Than I",
    date: "2016-02-01",
    author: "Pastor Jon Juneau",
    reference: "Psalms 61:1-4",
    body: "Hear my cry, O God; attend unto my prayer. From the end of the earth will I cry unto thee, when my heart is overwhelmed: lead me to the rock that is higher than I. For thou hast been a shelter for me, and a strong tower from the enemy. I will abide in thy tabernacle for ever: I will trust in the covert of thy wings. Selah. Psalms 61:1-4 As we continue on the path that God leads his children we at times find ourselves overwhelmed by the difficulty and peril before us. We, like Pilgrim in Pilgrim's Progress, are tempted to turn back. This beautiful and needed Psalm is a reminder, not to turn back, but to go up to the \"Rock that is higher than I.\" This Rock is the Lord Jesus Christ. No peril for us is perilous for our Lord. No difficulty is difficult for Him. No responsibility is impossible to accomplish for Him. Go to Him this day. Go quickly and He will show you that He is not overwhelmed and what comfort and peace we will have. We will be able to say with the hymnist, \"whatever my lot, thou hast taught me to say, it is well, it is well with my soul!\"",
  },
  {
    title: "The Seven Vial Judgments of Revelation",
    date: "2016-01-27",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2016-01-27-the-seven-vial-judgments-of-revelation.mp3",
    body: "Vial Jugments of Revlation Pastor Jon Juneau Download",
  },
  {
    title: "The Ministry",
    date: "2016-01-26",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2016-01-26-the-ministry.mp3",
    body: "1. I Must Be Saved vs. 15 2. I Must Be Counted Faithful vs. 12 To God’s Word To Humility Before God To The Body of Christ To Holiness 3. I Must Be Enabled vs. 12 4. I Will Show The Glory of God In My Life vs. 16",
  },
  {
    title: "We Have An Unction",
    date: "2016-01-26",
    author: "Pastor Jon Juneau",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2016-01-26-we-have-an-unction.mp3",
    body: "How can we know what to say and when to say it? How can we know what to do and how to do it? Our God who knows all things dwells within those who are saved. He can and will tell us. We have an unction!",
  },
  {
    title: "True Doctrine and False Doctrine",
    date: "2016-01-11",
    author: "Pastor Jon Juneau",
    reference: "I Timothy 1:3-11",
    audio: "https://q6axj5fl7frjn0ax.public.blob.vercel-storage.com/thy-word/2016-01-11-true-doctrine-and-false-doctrine.mp3",
    body: "Principles to Learn & Teach I Timothy 1:3-11 1. True Doctrine Edifies Charity: I Peter 4:8, 9; Colossians 3:12-15 A Good Conscience: Romans 12:1, 2; I Thessalonians 5:20-21 Unfeigned Faith: 2 Timothy 1:5, Hebrews 11:6 2. False Doctrine Destroys It Makes No Sense: Romans 16:18 It Leads To Terrible Sorrow: I Thessalonians 4:13 It Leads To Terrible Sins: Romans 5:20-6:2 It Dooms To Hell: 2 Peter 2:1 3. The Gospel Is The Foundation Of All True Doctrine",
  },
  {
    title: "Striving Together In Prayer",
    date: "2016-01-07",
    author: "Pastor Jon Juneau",
    reference: "Romans 15:30",
    body: "\"Now I beseech you, brethren, for the Lord Jesus Christ's sake, and for the love of the Spirit, that ye strive together with me in your prayers to God for me;\" Romans 15:30 In this precious verse we learn many things about prayer that if we as God's people take hold of, will truly help us not only to pray but to continue to pray. Many growing Christians will at the beginning of the year determine to pray more and more effectively. May these words be a help. 1) Our praying, or asking God to meet a particular desire, is good for the Lord Jesus Christ. We see that praying is for the Lord's sake. Because we care about the Lord Jesus Christ we will pray. When we call on someone to do something for their \"sake\" it is assumed that there is a genuine care for that person. If we genuinely care we will pray. 2) Paul sees fit to call upon a sincere love of the Spirit. We ought to love the Spirit, because like the Lord Jesus who first loved us so did the Holy Spirit. Without Him we would not be saved for he is the one who taught you the truth. Without Him you could not truly understand the Word of God. Without Him you would not know how to pray. Without Him you would not know how to do the will of God. Without Him our consciences would not be sensitive to sin. We ought to love the Holy Spirit and if we are not praying then we are lacking in love for Him. 3) We ought to pray for ourselves! Paul said \"Strive together with me... for me.\" I have heard people proclaim never praying for themselves because they do not want to be selfish. This is a misunderstanding about God. If every person in the world prayed for themselves at the same time, God would hear and be able to answer each one without the slightest effort. This is also a misunderstanding of ourselves. We cannot walk this perilous road without God. We need His grace, mercy, and peace. We need His wisdom and protection. We need Him to comfort us and console us. The sin of not praying for oneself is the sin of Laodicea in Revelation 3. They said, \"I have need of nothing.\" 4) We ought to pray for others. Just as we need the Lord so do all others. I believe Paul was admitting two things by this beseeching of believers. First, our prayers for ourselves are not as effective as our prayers for ourselves with others. It seems God is moved as more of His children cry unto Him. Second, I believe Paul understood that there are things he might not pray for himself that others would. We can have blind spots in our own lives that others see and can pray for. 5) We ought to pray together. This is of the upmost importance. It is important to pray alone in our \"closets,\" but we must pray together. This prayer together will lead us to a care for the one being prayed for and the one we are praying with in truly supernatural ways. If we do not make time to pray with others we are lacking in our prayer lives. 6) We must \"strive\" in prayer. To strive is to reach forth with all our might without giving up. Prayer is hard; physically, emotionally, and mentally. Anything that is hard we are always in danger of quitting; exercise, cleaning, yard work, you name it. If it is hard we are always in danger of quitting before we are finished. We cannot quit praying. The reward is to great and it will be forfeited if we do not continue in prayer. This means we will pray when we don't want to. We will because the end of our prayer is God's precious answer. \"We have not because we ask not!\" God bless you brethren! I beseech you to pray for me! May this year be our greatest year with the Lord! Thy Word RSS",
  },
  {
    title: "God's Communication - Jonah 1:1",
    date: "2015-12-09",
    author: "Pastor Jon Juneau",
    reference: "Jonah 1:1",
    body: "\"Now the word of the LORD came unto Jonah the son of Amittai...\" Jonah 1:1 When the Lord sent his word unto Jonah, he was attempting to communicate to Him both what He would like for Jonah to do as well as His heart or reasoning to go. We should remember that the Lord is not seeking to simply communicate the do's and don'ts of the \"good\" Christian but to truly communicate His heart. A truly Godly Christian will take hold of what God is seeking to communicate both in HIs commands and His reasoning or His heart in so commanding. In John 14:15, Jesus said, \"If ye love me, keep my commandments.\" By combining the terms love and keep He is reminding us that our relationship to Him is not simply, \"Do what I tell you to do.\" But much deeper and heartfelt. He desires us to take hold of Himself and what He is doing on the World and why He is doing it. God was not being cruel to Jonah in His command to go. He was inviting him to come along side and be part of His work in the world, of which he \"so loves.\" As you read the Bible, study its precious truths, and meditate on it, God is seeking to communicate with you! Will you listen not just for the words but also for the heart of God. If we receive just the words and their meaning and fail to catch onto God's heart, we, like Jonah will be greatly lacking. Ask God to reveal His heart, His desires, and He will. Reveal to God your heart as well; He knows already. Also, it is vitally important that we learn to communicate this way with others of whom we have intimate relationships with: Our spouses, children, friends, family, brethren. If we fail to communicate our heart to others we will never have the deepness that God desire for our earthly relationships. The deepness others have in our heart's desires will most certainly vary depending on what type of relationship we have (we will not reveal to a coworker what we would reveal to our spouse) but our heart must be given. May God help us to take hold of all He is seeking to communicate to us! Thy Word RSS",
  },
  {
    title: "American, Islamic, and Biblical Culture",
    date: "2015-12-03",
    author: "Pastor Jon Juneau",
    reference: "Ephesians 6",
    body: "Unbelievers have begun to accuse Christians of bigotry once again. This time because of the attacks in Paris by Islamic Terrorists and the sobering truth spoken from pulpits that Islam is an ungodly and therefore devilish religion. This is the truth. Islam from it's beginnings has sought to overwhelm the world through violence. It is mandated by it's scripture to kill all infidels that do not convert or pay the steep price for freedom. The question becomes what do we do? I believe the answer is found in the Word of God, the Bible, for all answers are found here. In Ephesians 6 God tells us that our wrestling is not against flesh and blood but against principalities. This word principalities has to do with deeply held beliefs that have permeated a society of people forming their culture. There is no society that has not been tainted by the sin of man and the craftiness of the devil. Islam has been shaped starting with Mohammed and then men who ascribe to his teachings. Another example is our current American culture. We speak of American exceptionalism and in doing so we lift up our society above every other. Our America, nearly devoid of it's Christian roots is certainly tainted and any honest assessment of our society would not declare exceptional. Our society is currently being shaped by Secularists who insist that right and wrong is dictated by the current majority trends. It is not America that is exceptional but Jesus Christ. Where Jesus Christ is worshipped and lifted up that society will be exceptional. No culture is exceptional except that culture that is shaped by the Word which is the Lord Jesus Christ. I believe the culture of America is no longer exceptional but the culture of our homes and our churches can be! In most Muslim societies the Lord Jesus Christ is removed from the conversation. He cannot be worshipped without terrible consequences upon discovery. This has led to societies that have great oppression and are often very violent. In today's permeable world Muslims have migrated throughout the world bringing with them a disdain for Jesus Christ and a warped love of a false God. It has led to violence and a suppression of freedom in every place they are. What then do we as Christians do? Should we seek to blow up every Muslim society on earth? Do we restrict their freedom to live peaceably in our own country as has been proposed by some? The answer of course to these questions is no. Our government should highly restrict those who ascribe to this religion from entering into our country. But what if our country does not do this. And even if our country does do this what must we do. First, we must understand that God knows all things! He is not surprised at what is going on, he proves this by having already told us of these things in the Bible. He has declared that he will judge every nation in which He is despised. He has done this throughout the history of the World. We must also understand that He is able to protect those homes that do not deny His name. We do not have to succumb to a lackluster love for Christ because of the great iniquity of our culture. Second, we must get a hold of the culture of our homes. If we do not have Bible-believing homes we are rejecting the exceptionalism of the Lord Jesus Christ. We must have home were the people in them love the Lord, for without this we are opening our homes to the wiles of the Devil. Is the culture of your home led by the Lord through His Word and prayer? Are you letting our society dictate the culture of your home or the Lord? Third, we must lovingly give the gospel, for the \"gospel is the power of God unto salvation.\" We must by faith believe that the gospel can and will transform the lives of all who believe. This includes the most determined Jihadist or the most militant Atheist for that matter. I know that the entire culture of the home can be transformed by Jesus. We see this very plainly in II Corinthians 6:9-11. \"Know ye not that the unrighteous shall not inherit the kingdom of God? Be not deceived: neither fornicators, nor idolaters, nor adulterers, nor effeminate, nor abusers of themselves with mankind, nor thieves, nor covetous, nor drunkards, nor revilers, nor extortioners, shall inherit the kingdom of God. And such were some of you : but ye are washed, but ye are sanctified, but ye are justified in the name of the Lord Jesus, and by the Spirit of our God.\" May God's Word be a lamp unto our feet and a light unto our path during this dark generation. Thy Word RSS",
  },
  {
    title: "Do Not Err",
    date: "2015-11-06",
    author: "Pastor Jon Juneau",
    reference: "James 1:16",
    body: "1:16 we come to a precious verse that speaks of the heart of God towards us; \"Do not err, my beloved brethren.\" These six words are written down by James, \"the servant of the Lord Jesus Christ,\" in order to reveal great truths about God. First, the word err does not mean a small mistake, such as not coming to a complete stop at a stop sign (though don't do that, I know by personal experience) or to fail to properly reconcile your checkbook (who does that anymore anyway). It means to be lead astray, to be deceived, to be seduced away from the Lord toward some evil and often devastating thing. Our world today is filled with peril and we as God's people are not immune to the temptations of the wicked one (the devil). We will have decisions to make in our life and some can change everything. I believe James as he was writing these words, with thoughts of people who were dear to him suddenly and emotionally cried, \"Do not err, my beloved brethren!\" I believe even more so, these words were given from God, with thoughts of us His children, is crying out, \"Do not err, my beloved!\" Our Father knows the end of our erring and does not want us to ever experience it. He does not want His children to know the physical anguish of withdrawing from drugs. Nor does He want us to know the awful consequences of what we will do while drunk. And so many other things that His children have suffered because of our erring. What will keep us from erring. It is not simple will-power. None of us can withstand the devil. It is not the goodness and devotion of our fathers and mothers (though that is a blessed example). God tells us in Hebrews 3:10, \"Wherefore I was grieved with that generation, and said, They do always err in their heart; and they have not known my ways.\" God says of this generation of His people during the time of Moses, you always err. I do not believe that this means that every decision made by individuals was wrong, but, that in general, the vast majority of people would make a decision that would change the course of their lives forever and not towards the Lord but away from Him. We are living in a similar time. It seems that in general, nearly every young person of this generation will make a great and terrible error. It can be fornication (sex outside of biblical marriage). For many reasons this a very real and terrible erring. Drunkenness; oh how many have fallen to this awful weapon of the devil. Covetousness (money and the things I can buy are more important than the will of God); this may be the most wicked of the Devil's devices. How many young people will forsake the will of God and the Body of Christ (the church) because I must make money to pay for my car, my entertainments, etc.! We keep from these errors by knowing the Lord Jesus, and His ways. We keep from these errors by daily \"cleaving unto the Lord\" (Acts 11:23). The problem of our current age is not that we are faced with to many of the Devil's temptations. The problem of our current age is that we do not love the Lord Jesus Christ and come to Him everyday. We do not assemble with our brethren and the Lord Jesus Christ in order to be strengthened by Him and His Word. This is what leads us to err and it breaks the hearts of so many, but especially God. I cry out with the Lord, \"Do not err, my beloved brethren!\" Thy Word RSS",
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

// Convert "Romans 3:19" → "romans-3-19" (the URL slug for the detail page).
export function romansRoadSlug(reference: string): string {
  return reference.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

type RomansColumn = {
  readonly heading: string;
  readonly body: string;
  readonly learnMore?: readonly [label: string, href: string];
};

type RomansDetail = {
  readonly slug: string;
  readonly reference: string;
  readonly verse: string;
  readonly columns: readonly RomansColumn[];
};

export const romansRoadDetails: readonly RomansDetail[] = [
  {
    slug: "romans-3-19",
    reference: "Romans 3:19",
    verse: "NOW WE KNOW THAT WHAT THINGS SOEVER THE LAW SAITH, IT SAITH TO THEM WHO ARE UNDER THE LAW: THAT EVERY MOUTH MAY BE STOPPED, AND ALL THE WORLD MAY BECOME GUILTY BEFORE GOD.",
    columns: [
      {
        heading: "Those Under The Law",
        body: "All of us are under the laws of God. These laws such as obeying your mother and father are known to us without the need for reading it in the Bible. Yet God has confirmed these things in the Bible for a reason.",
        learnMore: ["The Ten Commandments", "https://www.blueletterbible.org/kjv/exo/20/1/s_70001"],
      },
      {
        heading: "Every Mouth Stopped",
        body: "God desires we, the people that he has made, should know that we have broken his law. It is wrong for us to open our mouths to make excuses for breaking his law.",
        learnMore: ["Ephesians 2:8-9", "https://www.blueletterbible.org/kjv/eph/2/8/s_1099008"],
      },
      {
        heading: "All Are Guilty",
        body: "We are guilty of breaking God's Laws. This is called sin. Every person has broken God's Laws. We are all guilty before God, and this is true no matter how good we have tried to live our lives.",
        learnMore: ["When Did Sin Start?", "https://www.blueletterbible.org/kjv/gen/3/1/s_3001"],
      },
    ],
  },
  {
    slug: "romans-3-23",
    reference: "Romans 3:23",
    verse: "FOR ALL HAVE SINNED, AND COME SHORT OF THE GLORY OF GOD;",
    columns: [
      {
        heading: "All Have Sinned",
        body: "No person has avoided following Adam and Eve's path of sin against God. Sin occurs through rejecting God and through wrongdoing toward His creation, particularly other people.",
        learnMore: ["Romans 3:10-18", "https://www.blueletterbible.org/kjv/rom/3/10/s_1049010"],
      },
      {
        heading: "Come Short",
        body: "Rather than glorifying God, people glorify other things, individuals, and themselves. Even sincere attempts to glorify God fall short of elevating Him above all else.",
        learnMore: ["Our Righteousness", "https://www.blueletterbible.org/kjv/isa/64/6/s_743006"],
      },
      {
        heading: "Glory Of God",
        body: "God created humans as His greatest creation, designed for His glory. From Genesis 3 onward, all people sin and therefore fail to reflect God's intended glory.",
        learnMore: ["God's Creation", "https://www.blueletterbible.org/kjv/gen/1/1/s_1001"],
      },
    ],
  },
  {
    slug: "romans-5-8",
    reference: "Romans 5:8",
    verse: "BUT GOD COMMENDETH HIS LOVE TOWARD US, IN THAT, WHILE WE WERE YET SINNERS, CHRIST DIED FOR US.",
    columns: [
      {
        heading: "God Commendeth",
        body: "The word commendeth means to show or to prove. Many people doubt God's love but they do not know what He did to prove to us that He does love us.",
        learnMore: ["God's Love and our eternity", "https://www.blueletterbible.org/kjv/jhn/3/16/s_1000016"],
      },
      {
        heading: "While We Were Sinners",
        body: "God did not and does not wait for people to stop sinning to deal with our sin. If He did wait, it would have to be forever, because we won't stop sinning.",
        learnMore: ["Our sin penalty paid for by Jesus", "https://www.blueletterbible.org/kjv/isa/53/6/s_732006"],
      },
      {
        heading: "Christ Died For Us",
        body: "The penalty for our sin was paid for by Jesus. By dying, Jesus, who became a man in the flesh, paid the penalty for our sin, demonstrating both God's justice and mercy.",
        learnMore: ["How did Jesus die?", "https://www.blueletterbible.org/kjv/mat/27/1/s_956001"],
      },
    ],
  },
  {
    slug: "romans-6-23",
    reference: "Romans 6:23",
    verse: "FOR THE WAGES OF SIN IS DEATH; BUT THE GIFT OF GOD IS ETERNAL LIFE THROUGH JESUS CHRIST OUR LORD.",
    columns: [
      {
        heading: "Wages Of Sin",
        body: "God contrasts wages (earned through labor) with gift (received freely). Our sinful labor only earns death, meaning eternal separation from God in Hell.",
        learnMore: ["This truth to Adam and Eve", "https://www.blueletterbible.org/kjv/gen/2/17/s_2017"],
      },
      {
        heading: "The Gift Of God",
        body: "Rather than separation, God offers eternal life through His perfect love. Though free to us, this gift was purchased at great cost through Christ's sacrifice.",
        learnMore: ["This gift to Adam and Eve", "https://www.blueletterbible.org/kjv/gen/3/14/s_3014"],
      },
      {
        heading: "Through Jesus Christ",
        body: "Jesus paid the penalty for our sins through His death and resurrection. Salvation comes only through faith in Christ, not through personal effort to earn God's favor.",
        learnMore: ["Jesus teaches this in John 3", "https://www.blueletterbible.org/kjv/jhn/3/14/s_1000014"],
      },
    ],
  },
  {
    slug: "romans-4-25",
    reference: "Romans 4:25",
    verse: "WHO WAS DELIVERED FOR OUR OFFENCES, AND WAS RAISED AGAIN FOR OUR JUSTIFICATION.",
    columns: [
      {
        heading: "Who Was Delivered",
        body: "Our offenses represent violations of God's Law. Jesus Christ was delivered from heaven to earth, from life to death, to provide justification before a holy God. Though God is love, He is also just, and sin requires punishment. Jesus accepted that punishment on our behalf.",
        learnMore: ["What did Jesus really do?", "https://www.blueletterbible.org/kjv/2co/5/21/s_1083021"],
      },
      {
        heading: "Raised Again",
        body: "As God, Jesus Christ could not remain in death. He rose after three days through God's power, demonstrating His capacity to atone for all sins. His resurrection proved His divine authority and ability to save anyone from sin.",
        learnMore: ["An account of Jesus rising from the dead", "https://www.blueletterbible.org/kjv/jhn/20/1/s_1017001"],
      },
      {
        heading: "Justification",
        body: "Trusting in Christ's sacrificial death and resurrection results in justification before God. Believers no longer face eternal punishment for sin, as Christ satisfied God's justice through His substitutionary atonement.",
      },
    ],
  },
  {
    slug: "romans-14-9",
    reference: "Romans 14:9",
    verse: "FOR TO THIS END CHRIST BOTH DIED, AND ROSE, AND REVIVED, THAT HE MIGHT BE LORD BOTH OF THE DEAD AND LIVING.",
    columns: [
      {
        heading: "For To This End",
        body: "There is an ultimate reason Jesus Christ did what He did: that His people might live with Him as their Lord.",
      },
      {
        heading: "Died, Rose, And Revived",
        body: "Jesus died, rose, and revived so that those under His lordship would also be His friends.",
      },
      {
        heading: "That He Might Be Lord",
        body: "Because He gave Himself for us, it is reasonable and good to follow Him.",
      },
    ],
  },
  {
    slug: "romans-10-9",
    reference: "Romans 10:9",
    verse: "THAT IF THOU SHALT CONFESS WITH THY MOUTH THE LORD JESUS, AND SHALT BELIEVE IN THINE HEART THAT GOD HATH RAISED HIM FROM THE DEAD, THOU SHALT BE SAVED.",
    columns: [
      {
        heading: "Confess",
        body: "Faith requires public declaration to both God and believers. Remaining silent indicates incomplete belief.",
        learnMore: ["Believe with all your heart", "https://www.blueletterbible.org/kjv/act/8/26/s_1026027"],
      },
      {
        heading: "From The Dead",
        body: "Jesus' resurrection proves His divine nature and is essential Christian doctrine. He is the Savior, not merely a moral teacher.",
        learnMore: ["John 2:18-22", "https://www.blueletterbible.org/kjv/jhn/2/18/s_999019"],
      },
      {
        heading: "Thou Shalt Be Saved",
        body: "Salvation means rescue from hell to heaven through Christ's sacrifice. It offers deliverance from eternal punishment to eternal peace.",
        learnMore: ["What is Hell?", "https://www.blueletterbible.org/kjv/luk/16/19/s_989019"],
      },
    ],
  },
  {
    slug: "romans-10-13",
    reference: "Romans 10:13",
    verse: "FOR WHOSOEVER SHALL CALL UPON THE NAME OF THE LORD SHALL BE SAVED.",
    columns: [
      {
        heading: "Whosoever",
        body: "No sin is too great for Jesus to save you from. If you believe wholeheartedly and call upon Him, He will save you.",
        learnMore: ["Lydia and a Jailer are saved", "https://www.blueletterbible.org/kjv/act/16/1/s_1034012"],
      },
      {
        heading: "Shall Call",
        body: "Jesus invites you to pray, confess your sins, ask forgiveness, and request Him to be your Savior. His promise is certain.",
        learnMore: ["The thief calls upon Jesus", "https://www.blueletterbible.org/kjv/luk/23/39/s_996043"],
      },
      {
        heading: "Shall Be Saved",
        body: "Through His sacrifice, believers escape eternal punishment and receive the gift of spending eternity in heaven.",
        learnMore: ["The New Jerusalem — Heaven", "https://www.blueletterbible.org/kjv/rev/21/1/s_1188001"],
      },
    ],
  },
  {
    slug: "romans-6-4",
    reference: "Romans 6:4",
    verse: "THEREFORE WE ARE BURIED WITH HIM BY BAPTISM INTO DEATH: THAT LIKE AS CHRIST WAS RAISED UP FROM THE DEAD BY THE GLORY OF THE FATHER, EVEN SO WE ALSO SHOULD WALK IN NEWNESS OF LIFE.",
    columns: [
      {
        heading: "Baptism",
        body: "After trusting Jesus Christ as savior, believers should identify with Him through baptism. According to Scripture, baptism involves full water immersion following the decision to trust Jesus, mirroring His own baptism.",
        learnMore: ["Jesus is baptized", "https://www.blueletterbible.org/kjv/mat/3/13/s_932011"],
      },
      {
        heading: "Christ Was Raised",
        body: "Baptism symbolizes the Gospel message: Christ's death, burial, and resurrection. The act mirrors this sequence — entering water represents death, submersion symbolizes burial, and emergence signifies resurrection.",
        learnMore: ["Colossians 3:1-3", "https://www.blueletterbible.org/kjv/col/3/1/s_1110001"],
      },
      {
        heading: "Newness Of Life",
        body: "Believers should pursue transformed living by engaging in daily Scripture reading, prayer, church participation, and sin confession. Through commitment to Christ, old sinful patterns diminish as believers desire to share faith with others.",
        learnMore: ["Behold all things are new!", "https://www.blueletterbible.org/kjv/2co/5/17/s_1083017"],
      },
    ],
  },
  {
    slug: "romans-12-1",
    reference: "Romans 12:1",
    verse: "I BESEECH YOU THEREFORE, BRETHREN, BY THE MERCIES OF GOD, THAT YE PRESENT YOUR BODIES A LIVING SACRIFICE, HOLY, ACCEPTABLE UNTO GOD, WHICH IS YOUR REASONABLE SERVICE.",
    columns: [
      {
        heading: "Brethren",
        body: "Becoming saved means joining God's family as a spiritual brother or sister with all believers. While eternal fellowship awaits in heaven, bonding with church members now strengthens faith through biblical teaching and mutual support.",
        learnMore: ["The Great Commission", "https://www.blueletterbible.org/kjv/mat/28/18/s_957001"],
      },
      {
        heading: "Living Sacrifice",
        body: "God's plan often differs from personal ambitions and others' expectations. Being a living sacrifice means doing what God wants for your life rather than doing anything else.",
        learnMore: ["The Apostle Paul, Philippians 3:7-14", "https://www.blueletterbible.org/kjv/phl/3/7/s_1106001"],
      },
      {
        heading: "Reasonable Service",
        body: "Following Christ is logical: Jesus sacrificed Himself, created us knowing our purpose, possesses divine wisdom, and acts with goodness. His guidance leads to fulfillment beyond any alternative path.",
      },
    ],
  },
];

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
  bodyClass?: string;
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
    paragraphs: [
      "Having as we trust, been brought by Divine Grace seriously and forever to give up ourselves in faith and love and holy obedience to God the Father, Son and Holy Ghost, and having been baptized upon profession of our faith, we do now solemnly and joyfully covenant with each other to walk together in church relationship with brotherly love to the Honor and Glory of God.",
      "And we do in His strength engage that we will exercise a Christian care and watchfulness over each other, and faithfully admonish and entreat one another, and require; that we will not forsake the assembling of ourselves together or neglect the great duty of prayer for ourselves and others: that we will endeavor to bring up such as may at anytime be under our care, in the nurture and admonition of the Lord, and by a pure and lovely example to win our kindred and acquaintances to the Savior, to holiness and to eternal life; that we will participate in each other’s joys and endeavor with tenderness and sympathy to bear each other’s burdens and sorrows; that we will seek divine aid to enable us to live carefully and watchfully in the world, deny ungodliness and worldly lusts, and remembering that as we have been voluntarily been buried by Baptism and raised up from the emblematic grave, so there is on us a special obligation henceforth to lead a new and holy life; that we will strive together for the support of a faithful evangelical ministry among us; and that through life amidst evil and good report, we will seek to live to the glory of Him who hath called us out of darkness and into His marvelous light.",
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
    cta: ["Ask how to serve", "/connect-with-us"],
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
  "worship": {
    title: "Worship",
    intro:
      "Gather with Wood River Baptist Church for Sunday worship, preaching, prayer, and fellowship centered on the Word of God.",
    cta: ["View service times", "/#services"],
  },
  "psalm-27": {
    title: "Psalm 27",
    eyebrow: "Scripture Memory",
    intro: "A Psalm for Courage and Strength",
    bodyClass: "scripture-passage",
    paragraphs: [
      "1 The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?",
      "2 When the wicked, even mine enemies and my foes, came upon me to eat up my flesh, they stumbled and fell.",
      "3 Though an host should encamp against me, my heart shall not fear: though war should rise against me, in this will I be confident.",
      "4 One thing have I desired of the LORD, that will I seek after; that I may dwell in the house of the LORD all the days of my life, to behold the beauty of the LORD, and to enquire in his temple.",
      "5 For in the time of trouble he shall hide me in his pavilion: in the secret of his tabernacle shall he hide me; he shall set me up upon a rock.",
      "6 And now shall mine head be lifted up above mine enemies round about me: therefore will I offer in his tabernacle sacrifices of joy; I will sing, yea, I will sing praises unto the LORD.",
      "7 Hear, O LORD, when I cry with my voice: have mercy also upon me, and answer me.",
      "8 When thou saidst, Seek ye my face; my heart said unto thee, Thy face, LORD, will I seek.",
      "9 Hide not thy face far from me; put not thy servant away in anger: thou hast been my help; leave me not, neither forsake me, O God of my salvation.",
      "10 When my father and my mother forsake me, then the LORD will take me up.",
      "11 Teach me thy way, O LORD, and lead me in a plain path, because of mine enemies.",
      "12 Deliver me not over unto the will of mine enemies: for false witnesses are risen up against me, and such as breathe out cruelty.",
      "13 I had fainted, unless I had believed to see the goodness of the LORD in the land of the living.",
      "14 Wait on the LORD: be of good courage, and he shall strengthen thine heart: wait, I say, on the LORD."
    ],
    cta: ["Back to Scripture Memory", "/scripture-memory-1"],
  },
};

export function thyWordSlug(post: { date: string; title: string }): string {
  const titleSlug = post.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
  return `${post.date}-${titleSlug}`;
}

export const aliases: Record<string, string> = {
  "daily-worship": "daily-worship",
  "new-page-1": "romans-14-9",
  // Old Squarespace slugs for Romans Road detail pages
  "romans-319": "romans-3-19",
  "romans-323": "romans-3-23",
  "romans-58": "romans-5-8",
  "romans-623": "romans-6-23",
  "romans-425": "romans-4-25",
  "romans-109": "romans-10-9",
  "romans-1013": "romans-10-13",
  "new-page-2": "romans-6-4",
  "romans-121": "romans-12-1",
};
