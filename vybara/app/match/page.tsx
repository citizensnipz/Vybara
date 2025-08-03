"use client";

import MatchCard from "../../components/MatchCard";

interface Match {
  id: string;
  avatarUrl?: string;
  name: string;
  age: number;
  sex: string;
  location: string;
  summary: string;
  promptLabel: string;
  promptResponse: string;
}

const dummyMatches: Match[] = [
  {
    id: "1",
    name: "Alex",
    age: 28,
    sex: "F",
    location: "Berlin",
    summary: "Passionate about sustainable living and finding beauty in everyday moments.",
    promptLabel: "What makes you feel alive?",
    promptResponse: "Exploring new cities and discovering hidden coffee shops where I can people-watch while reading a good book. There's something magical about being in a new place and feeling completely anonymous yet connected to the world around me. I love the way travel opens your mind to different perspectives and reminds you that there are infinite ways to live a meaningful life."
  },
  {
    id: "2",
    name: "Jordan",
    age: 31,
    sex: "M",
    location: "Amsterdam",
    summary: "Musician and mental health advocate who believes in the power of vulnerability.",
    promptLabel: "Something I wish more people understood about me...",
    promptResponse: "I'm passionate about mental health advocacy and believe everyone deserves to be heard without judgment. I've learned that vulnerability is actually a strength, not a weakness. When I share my struggles with anxiety and depression, it often helps others feel less alone. I wish more people understood that it's okay to not be okay, and that asking for help is a sign of courage, not weakness."
  },
  {
    id: "3",
    name: "Sam",
    age: 26,
    sex: "NB",
    location: "Stockholm",
    summary: "Hiker and recovering perfectionist who finds beauty in imperfection.",
    promptLabel: "What makes you feel alive?",
    promptResponse: "Hiking in the mountains and feeling completely insignificant yet somehow more connected to everything. There's nothing like reaching a summit and realizing how small we are in the grand scheme of things. It puts everything into perspective and reminds me that my problems aren't as big as they seem. I'm a recovering perfectionist who's learning to embrace imperfection."
  },
  {
    id: "4",
    name: "Taylor",
    age: 29,
    sex: "F",
    location: "Copenhagen",
    summary: "Environmental scientist who believes in the power of small actions to create big change.",
    promptLabel: "Something I wish more people understood about me...",
    promptResponse: "I'm an introvert who needs time to recharge, but that doesn't mean I don't want to connect with people. I actually crave deep, meaningful conversations, but I need to feel safe and comfortable first. I wish more people understood that being quiet doesn't mean I'm not interested or engaged - sometimes I'm just processing and thinking deeply about what's being said."
  },
  {
    id: "5",
    name: "Casey",
    age: 33,
    sex: "M",
    location: "Vienna",
    summary: "Chef who believes food is the universal language of love and connection.",
    promptLabel: "What makes you feel alive?",
    promptResponse: "Creating meals that bring people together and watching their faces light up when they taste something delicious. Food has this incredible power to create memories and foster connections. When I'm in the kitchen, I feel completely in my element - it's like meditation for me. I love experimenting with flavors and learning about different cuisines from around the world."
  }
];

export default function MatchPage() {
  const handleDismiss = (matchId: string) => {
    console.log(`Dismissed match: ${matchId}`);
    // In a real app, this would update the backend
  };

  const handleInvite = (matchId: string) => {
    console.log(`Invited match to chat: ${matchId}`);
    // In a real app, this would create a chat and redirect
  };

  return (
    <div className="py-8">
      <div className="max-w-2xl mx-auto p-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Your Matches
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            People who might be a great fit for you
          </p>
        </div>

        {/* Matches List */}
        <div className="space-y-4">
          {dummyMatches.map((match) => (
            <MatchCard
              key={match.id}
              avatarUrl={match.avatarUrl}
              name={match.name}
              age={match.age}
              sex={match.sex}
              location={match.location}
              summary={match.summary}
              promptLabel={match.promptLabel}
              promptResponse={match.promptResponse}
              onDismiss={() => handleDismiss(match.id)}
              onInvite={() => handleInvite(match.id)}
            />
          ))}
        </div>

        {/* Empty State (when no matches) */}
        {dummyMatches.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💫</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              No more matches for now
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We're working on finding more people who might be a great match for you. Check back later!
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 