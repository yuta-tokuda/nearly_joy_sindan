export type MemberSns = {
  x?: string;
  instagram: string;
};

export type MemberProfile = {
  reading: string;
  nickname: string;
  birthday: string;
  birthplace: string;
  height: string;
  bloodType: string;
  memberColor: string;
  hobby: string;
  specialty: string;
  fanName?: string;
};

export type MemberSong = {
  title: string;
  youtubeUrl?: string;
};

export type Member = {
  id: string;
  name: string;
  description: string;
  color: string;
  songs: MemberSong[];
  profile: MemberProfile;
  sns: MemberSns;
  officialUrl: string;
};

export type Choice = {
  text: string;
  scores: Record<string, number>;
  typeHint: string;
};

export type Question = {
  id: number;
  question: string;
  intent: string;
  choices: Choice[];
};

export type RankingItem = {
  memberId: string;
  score: number;
  ratio: number;
};

export type DiagnosisResult = {
  topMember: Member;
  matchRate: number;
  comment: string;
  ranking: RankingItem[];
  totalScore: number;
};
