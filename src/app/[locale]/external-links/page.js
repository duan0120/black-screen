import Link from "next/link";
import { generateAlternates } from "@/lib/hreflang";

export async function generateMetadata({ params }) {
  const title = 'My External Profiles';
  const description = 'A collection of my external profiles and links to help search engines discover my site.';
  const currentLocale = params.locale || 'en';

  return {
    title: title,
    description: description,
    alternates: generateAlternates('/external-links', currentLocale),
  }
}

export default function CurrentPage() {

  const externalLinks = [
    {
      name: 'GitHub Profile',
      url: 'https://github.com/duan0120',
      desc: 'My open-source projects and contributions.',
    },
    {
      name: 'GitHub Gist',
      url: 'https://gist.github.com/duan0120',
      desc: 'Code snippets and useful scripts I’ve shared.',
    },
    {
      name: 'GitHub Respository',
      url: 'https://github.com/devutils-online/blackscreen',
      desc: 'The respository for this website.',
    },
    {
      name: 'Tap Bio',
      url: 'https://tap.bio/@black-screen',
      desc: 'My Tap.Bio homepage and profile links.',
    },
    {
      name: 'Bento',
      url: 'https://bento.me/black-screen',
      desc: 'My Bento homepage and profile links.',
    },
    {
      name: 'Startup Fame',
      url: 'https://startupfa.me/black-screen',
      desc: 'My Startup Fame homepage and profile links.',
    },
    {
      name: 'folllio',
      url: 'https://folll.io/blackscreen',
      desc: 'My folllio homepage and profile links.',
    },
    {
      name: 'Linktree',
      url: 'https://linktr.ee/black_screen',
      desc: 'A quick way to find all my online projects and profiles.',
    },
    {
      name: 'Twitch',
      url: 'https://www.twitch.tv/blackscreentool/about',
      desc: 'My Twitch channel and profile links.',
    },
    {
      name: 'Onee',
      url: 'https://onee.page/blackscreen',
      desc: 'My Onee homepage and profile links.',
    },
    {
      name: 'ollama',
      url: 'https://ollama.com/blackscreen',
      desc: 'My ollama homepage and profile links.',
    },
    {
      name: 'bsky.app',
      url: 'https://bsky.app/profile/black-screen.bsky.social',
      desc: 'My bsky.app homepage and profile links.',
    },
    {
      name: 'Cal.com',
      url: 'https://app.cal.com/blackscreen',
      desc: 'My Cal.com homepage and profile links.',
    },
    {
      name: 'savee',
      url: 'https://savee.com/blackscreen/',
      desc: 'My savee homepage and profile links.',
    },
    {
      name: 'gravatar',
      url: 'https://gravatar.com/butterydefendor548f9aa218',
      desc: 'My gravatar homepage and profile links.',
    },
    {
      name: 'dibiz',
      url: 'https://www.dibiz.com/duanhjlt+blackscreen',
      desc: 'My dibiz homepage and profile links.',
    },
    {
      name: 'proko',
      url: 'https://www.proko.com/@blackscreen/activity',
      desc: 'My proko homepage and profile links.',
    },
    {
      name: 'behance',
      url: 'https://www.behance.net/bratgenerator',
      desc: 'My behance homepage and profile links.',
    },
    {
      name: 'Product Hunt',
      url: 'https://www.producthunt.com/@duanhjlt',
      desc: 'My Product Hunt homepage and profile links.',
    },
    {
      name: 'Black Screen | Product Hunt',
      url: 'https://www.producthunt.com/products/black-screen-7',
      desc: 'My Product Hunt page for Black Screen.',
    },
    {
      name: 'Bio Site',
      url: 'https://bio.site/blackscreen',
      desc: 'My Bio Site homepage and profile links.',
    }
  ];

  return (
    <div className="page-container">
      <div className="mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">My External Profiles</h1>
        <p className="text-lg leading-relaxed">
          This page collects my external profiles on different platforms.
          These profiles may contain links to my website, which can help search engines index and discover my content better.
        </p>
        <h2 className="text-2xl font-bold px-2 py-4">Profiles</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          {externalLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary">{item.name}</Link> - {item.desc}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-bold px-2 py-4">Notes</h2>
        <p>
          Adding these links here helps Google and other search engines crawl and discover my external profiles.
          Over time, it may strengthen the connection between my site and my public accounts.
        </p>
      </div>
    </div>
  );
}
