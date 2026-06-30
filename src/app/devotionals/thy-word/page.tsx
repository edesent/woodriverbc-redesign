import { ArrowRight, BookOpenText, Headphones } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thy Word — Seven Devotionals from Psalm 27:4",
  description:
    "A seven-day devotional series from Pastor Jon Juneau's sermon One Thing, centered on Psalm 27:4 and a life devoted to knowing, beholding, and seeking the Lord.",
};

const devotionals = [
  {
    day: "Day 1",
    title: "One Controlling Desire",
    reference: "Psalm 27:4",
    scripture:
      "One thing have I desired of the LORD, that will I seek after; that I may dwell in the house of the LORD all the days of my life, to behold the beauty of the LORD, and to enquire in his temple.",
    paragraphs: [
      "David had many responsibilities and many legitimate concerns. He was a king, a soldier, a husband, a father, and a leader of God's people. Yet when he opened his heart before the Lord, he gathered all his desires into one: he wanted God.",
      "Our lives are often divided among many desires. We want security, success, relief, recognition, comfort, and answers. Some of these desires are not sinful, but even good desires can pull the heart in different directions. David teaches us that one desire must govern all the others. To desire the Lord does not mean that nothing else matters. It means that everything else finds its proper place beneath Him.",
      "A controlling desire for God gives direction to the whole life. It determines what we pursue, how we respond to disappointment, and where we turn when we are afraid. David did not merely say, 'One thing have I desired.' He added, 'that will I seek after.' Holy desire must become deliberate pursuit.",
      "The great question is not simply, 'What do I want today?' but, 'What desire rules all my other desires?' Ask the Lord to gather your scattered heart and make fellowship with Him your highest pursuit.",
    ],
    question: "What competing desire most often distracts your heart from seeking the Lord?",
    prayer:
      "Lord, gather the many desires of my heart into one holy pursuit. Help me to desire You above every gift and to seek You faithfully today. Amen.",
  },
  {
    day: "Day 2",
    title: "Dwelling With the Lord",
    reference: "Psalm 27:4; John 15:4",
    scripture:
      "That I may dwell in the house of the LORD all the days of my life. — Psalm 27:4",
    paragraphs: [
      "David's desire was not for an occasional visit with God. He wanted to dwell with Him. A visitor comes for a short time and then returns to ordinary life. A dweller remains. David longed for the presence of God to become the settled home of his soul.",
      "For the believer, dwelling with the Lord is not limited to being inside a church building. Through Jesus Christ, we have continual access to God. Christ has brought us near by His blood, and the Holy Spirit dwells within every person who has trusted Him. We may walk with God at home, at work, in the car, during sorrow, and in the middle of ordinary responsibilities.",
      "Jesus gave the same invitation when He said, 'Abide in me.' Abiding is a daily dependence upon Christ. It is living with an awareness of His presence, drawing strength from His Word, confessing sin quickly, and speaking with Him throughout the day. We do not merely come to Christ for salvation and then attempt to live by our own strength. We remain in Him.",
      "Many Christians visit the Lord hurriedly but do not dwell with Him. A few rushed moments cannot replace a heart that continually turns toward God. Begin today by recognizing that wherever you go, the Lord is present and ready to fellowship with you.",
    ],
    question: "Do you treat time with God as a brief visit or as the settled home of your soul?",
    prayer:
      "Lord Jesus, teach me to abide in You. Help me to live every part of this day in conscious fellowship with You. Amen.",
  },
  {
    day: "Day 3",
    title: "Beholding His Beauty",
    reference: "Psalm 27:4; John 1:14",
    scripture:
      "To behold the beauty of the LORD. — Psalm 27:4",
    paragraphs: [
      "David did not only want help from God; he wanted to behold God. The Lord is beautiful in His holiness, wisdom, mercy, faithfulness, power, and love. Every perfection is found in Him without mixture or defect. The more clearly we see Him, the more worthy He becomes of our worship and trust.",
      "The fullest revelation of God's beauty is found in Jesus Christ. John wrote that the Word was made flesh and that the disciples beheld His glory. In Christ we see holiness that welcomed sinners, power that served the weak, truth that exposed sin, and love that went willingly to the cross. At Calvary, God's justice and mercy meet. In the resurrection, His victory and faithfulness shine.",
      "The world constantly asks us to behold lesser things. Screens, possessions, personalities, anxieties, and ambitions compete for our attention. What we behold begins to shape what we love, and what we love begins to shape how we live. A hurried glance at Christ will not overcome a day spent staring at the world.",
      "Open the Scriptures slowly. Look for the character of God. Notice what Christ says, what He does, what He loves, and what He condemns. Do not read merely to finish a chapter. Read to behold the Lord. Worship grows where spiritual sight becomes clear.",
    ],
    question: "What have you been beholding so often that it has begun to shape your heart?",
    prayer:
      "Lord, open my eyes to see Your beauty in the Scriptures and in the Lord Jesus Christ. Turn my attention away from lesser glories and fill my heart with worship. Amen.",
  },
  {
    day: "Day 4",
    title: "Enquiring of God",
    reference: "Psalm 27:4; Acts 9:6",
    scripture:
      "And to enquire in his temple. — Psalm 27:4",
    paragraphs: [
      "David desired not only to dwell and behold, but also to enquire. He wanted God's wisdom and direction. The person who truly values the Lord's presence will also value the Lord's will.",
      "We often ask God to approve decisions we have already made. Biblical enquiry begins with surrender. When Saul met the risen Christ, he asked, 'Lord, what wilt thou have me to do?' That question placed his plans, preferences, and future beneath the authority of Jesus Christ.",
      "God guides His children principally through His Word. He will never lead us contrary to Scripture. As we read, pray, listen to faithful preaching, and seek godly counsel, the Lord shapes our judgment. Sometimes He gives a clear command. At other times He gives principles that require wisdom and patience. In either case, the seeking heart must be willing to obey before the answer is known.",
      "Enquiring of God is more than asking, 'What will make my life easier?' It asks, 'What will please the Lord? What will honor Christ? What will help me obey His Word and serve others?' The safest path is not always the easiest path, but it is always the path of obedience.",
    ],
    question: "Is there a decision about which you are seeking God's approval without first surrendering to God's will?",
    prayer:
      "Lord, what wilt Thou have me to do? Give me a willing heart, a teachable spirit, and wisdom from Your Word. Help me to obey whatever You show me. Amen.",
  },
  {
    day: "Day 5",
    title: "The One Needful Thing",
    reference: "Luke 10:41-42",
    scripture:
      "Martha, Martha, thou art careful and troubled about many things: But one thing is needful: and Mary hath chosen that good part, which shall not be taken away from her.",
    paragraphs: [
      "Martha was serving the Lord, but her service had become crowded with care and troubled with resentment. Mary sat at Jesus' feet and heard His word. Jesus did not say that Martha's work was unimportant. He showed that fellowship with Him was more necessary than all the work being done for Him.",
      "It is possible to be busy with church, family, ministry, and responsibility while the heart grows distant from Christ. We may serve Him publicly and neglect Him privately. We may prepare lessons, help others, attend services, and accomplish useful things without sitting quietly at His feet.",
      "The one needful thing cannot be replaced by religious activity. We need Christ Himself. We need His words to correct our thinking, calm our fears, expose our pride, and renew our love. Service that does not flow from fellowship eventually becomes burdensome. Fellowship with Christ gives service its strength and sweetness.",
      "Mary chose the good part. Time with Jesus rarely happens accidentally; it must be chosen. Other demands will always speak loudly. Set aside a definite time, open the Bible, silence unnecessary distractions, and listen to the Lord. What is received at His feet cannot be taken away.",
    ],
    question: "Has your work for the Lord become a substitute for sitting at the feet of the Lord?",
    prayer:
      "Lord Jesus, quiet my careful and troubled heart. Help me choose the one needful thing and receive Your Word before I begin my work. Amen.",
  },
  {
    day: "Day 6",
    title: "This One Thing I Do",
    reference: "Philippians 3:13-14",
    scripture:
      "This one thing I do, forgetting those things which are behind, and reaching forth unto those things which are before, I press toward the mark for the prize of the high calling of God in Christ Jesus.",
    paragraphs: [
      "Paul's life had been transformed by meeting Jesus Christ. He had accomplishments he could boast about and sins he deeply regretted, but neither pride in the past nor shame over the past would control his pursuit. He said, 'This one thing I do.' His life was aimed toward knowing Christ and finishing the course God had given him.",
      "A divided runner does not finish well. Looking continually backward slows our progress. Some believers live upon yesterday's victories and stop growing. Others remain chained to yesterday's failures and believe they can never be useful again. Paul refused both distractions. The grace of Christ allowed him to learn from the past without living in it.",
      "Pressing toward the mark requires effort, but not self-sufficient effort. Paul pursued the calling of God 'in Christ Jesus.' The Christian presses forward because Christ has saved him, Christ is with him, and Christ is the prize at the end of the race.",
      "You cannot change yesterday, but by God's grace you can seek Him today. Confess what must be confessed, thank God for what He has done, and take the next obedient step. A life centered upon one holy pursuit can move forward with strength and purpose.",
    ],
    question: "Are you being held back more by pride in past victories or by shame over past failures?",
    prayer:
      "Lord, free me from living in the past. Help me reach forward, press toward Your calling, and take the next faithful step in Christ today. Amen.",
  },
  {
    day: "Day 7",
    title: "A Fixed Heart in Troubled Times",
    reference: "Psalm 27:1, 3-4, 14",
    scripture:
      "Though an host should encamp against me, my heart shall not fear: though war should rise against me, in this will I be confident.",
    paragraphs: [
      "Psalm 27 was not written from a life without trouble. Enemies surrounded David, false witnesses rose against him, and fear pressed near. Yet in the middle of conflict he spoke of one desire. His heart was steadied because it was fixed upon the Lord.",
      "Fear scatters the mind. It causes us to imagine every possible danger and attempt to control every uncertain outcome. David answered fear by remembering who God is: 'The LORD is my light and my salvation; whom shall I fear?' Confidence did not come from favorable circumstances. It came from the character and presence of God.",
      "The one-thing life is not an escape from difficulty. It is the way we remain steady within difficulty. When the Lord is our light, darkness cannot finally overcome us. When He is our salvation, no enemy can separate us from His care. When He is the strength of our life, weakness becomes an invitation to depend upon Him.",
      "David ended the psalm by telling his own heart to wait on the Lord. Waiting is not inactivity; it is continued trust and obedience while God works. Seek His face, behold His beauty, enquire of Him, and wait courageously. A heart fixed upon God will be strengthened by God.",
    ],
    question: "What present fear needs to be answered by a fresh view of who the Lord is?",
    prayer:
      "Lord, be my light, my salvation, and the strength of my life. Fix my heart upon You, give me courage to wait, and keep me faithful in troubled times. Amen.",
  },
] as const;

export default function ThyWordDevotionalsPage() {
  return (
    <>
      <section className="page-hero with-image">
        <Image
          src="/woodriver/cross-sky.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div>
          <p className="eyebrow">Seven Written Devotionals</p>
          <h1>Thy Word</h1>
          <p>
            A seven-day devotional series from Pastor Jon Juneau&apos;s sermon
            &ldquo;One Thing,&rdquo; preached from Psalm 27:4 on June 28, 2026.
          </p>
          <div className="button-row">
            <Link
              className="button primary"
              href="/thy-word-is-a-lamp-unto-my-feet/2026-06-28-one-thing"
            >
              <Headphones size={18} /> Listen to the sermon
            </Link>
          </div>
        </div>
      </section>

      <section className="section page-content devotional-series">
        <nav className="devotional-index" aria-label="Devotional series contents">
          <p className="eyebrow">Seven Days in Psalm 27:4</p>
          <h2>Choose a devotional</h2>
          <div className="devotional-index-links">
            {devotionals.map((devotional, index) => (
              <a key={devotional.title} href={`#day-${index + 1}`}>
                <BookOpenText size={17} />
                <span>
                  <small>{devotional.day}</small>
                  {devotional.title}
                </span>
                <ArrowRight size={16} />
              </a>
            ))}
          </div>
        </nav>

        <div className="devotional-entries">
          {devotionals.map((devotional, index) => (
            <article
              className="devotional-entry"
              id={`day-${index + 1}`}
              key={devotional.title}
            >
              <header>
                <p className="eyebrow">{devotional.day}</p>
                <h2>{devotional.title}</h2>
                <p className="devotional-reference">{devotional.reference}</p>
              </header>

              <blockquote>
                <p>&ldquo;{devotional.scripture}&rdquo;</p>
                <cite>King James Version</cite>
              </blockquote>

              <div className="devotional-body">
                {devotional.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="devotional-response">
                <h3>Consider</h3>
                <p>{devotional.question}</p>
                <h3>Prayer</h3>
                <p>{devotional.prayer}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="callout devotional-closing">
          <h2>Make the Lord your one pursuit</h2>
          <p>
            Return to Psalm 27:4 throughout the week. Ask God to gather your heart,
            deepen your fellowship with Him, reveal the beauty of Christ, and direct
            every part of your life according to His Word.
          </p>
          <Link
            className="button primary inline"
            href="/thy-word-is-a-lamp-unto-my-feet/2026-06-28-one-thing"
          >
            Hear “One Thing” <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
