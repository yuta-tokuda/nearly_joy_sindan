import { Ranking } from "@/components/ranking";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { DiagnosisResult, Member } from "@/types/diagnosis";
import { ExternalLink } from "lucide-react";

type ResultCardProps = {
  result: DiagnosisResult;
};

const ProfileRow = ({ label, value }: { label: string; value: string }) => (
  <div className="grid grid-cols-[6.5rem_1fr] gap-2 text-sm">
    <dt className="text-muted-foreground">{label}</dt>
    <dd className="font-medium text-foreground">{value}</dd>
  </div>
);

const SnsLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 rounded-xl border border-primary/20 bg-white/90 px-3 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-[oklch(0.98_0.05_98)]"
  >
    {label}
    <ExternalLink className="size-3.5 text-primary/60" aria-hidden />
  </a>
);

const MemberProfileSection = ({ member }: { member: Member }) => {
  const { profile, sns, officialUrl } = member;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-bold text-foreground">プロフィール</p>
        <p className="text-sm leading-7 text-muted-foreground">{member.description}</p>
        <dl className="space-y-2.5 rounded-2xl bg-[oklch(0.98_0.035_98)] p-4">
          <ProfileRow label="読み方" value={profile.reading} />
          <ProfileRow label="愛称" value={profile.nickname} />
          <ProfileRow label="生年月日" value={profile.birthday} />
          <ProfileRow label="出身地" value={profile.birthplace} />
          <ProfileRow label="身長" value={profile.height} />
          <ProfileRow label="血液型" value={profile.bloodType} />
          <ProfileRow label="メンバーカラー" value={profile.memberColor} />
          <ProfileRow label="趣味" value={profile.hobby} />
          <ProfileRow label="特技" value={profile.specialty} />
          {profile.fanName ? (
            <ProfileRow label="ファンネーム" value={profile.fanName} />
          ) : null}
        </dl>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-bold text-foreground">SNS・公式</p>
        <div className="flex flex-wrap gap-2">
          {sns.x ? <SnsLink href={sns.x} label="X" /> : null}
          <SnsLink href={sns.instagram} label="Instagram" />
          <SnsLink href={officialUrl} label="公式プロフィール" />
        </div>
      </div>
    </div>
  );
};

export const ResultCard = ({ result }: ResultCardProps) => {
  return (
    <Card className="animate-pop surface-panel border-white/70 shadow-none overflow-hidden">
      <div
        className="h-1.5 w-full"
        style={{ backgroundColor: result.topMember.color }}
        aria-hidden
      />
      <CardHeader className="pt-5">
        <CardDescription className="text-xs tracking-wide text-primary">
          あなたにぴったりなのは
        </CardDescription>
        <CardTitle
          className="text-2xl font-bold leading-snug tracking-wide"
          style={{ color: result.topMember.color }}
        >
          {result.topMember.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="rounded-2xl bg-gradient-to-br from-[oklch(0.96_0.07_96)] to-[oklch(0.98_0.05_84)] p-4 text-center">
          <p className="text-xs font-medium text-muted-foreground">一致率</p>
          <p className="mt-1 font-display text-4xl text-primary">{result.matchRate}%</p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-bold text-foreground">診断コメント</p>
          <p className="text-sm leading-7 text-muted-foreground">{result.comment}</p>
        </div>

        <MemberProfileSection member={result.topMember} />

        <div className="space-y-2">
          <p className="text-sm font-bold text-foreground">おすすめ楽曲</p>
          <ul className="space-y-1.5 text-sm text-foreground">
            {result.topMember.songs.map((song) => (
              <li
                key={song.title}
                className="flex items-center justify-between gap-2 rounded-xl bg-[oklch(0.98_0.035_98)] px-3 py-2"
              >
                <span>{song.title}</span>
                {song.youtubeUrl ? (
                  <a
                    href={song.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-primary/20 bg-white px-2 py-1 text-[11px] font-medium text-primary transition-colors hover:border-primary/40"
                  >
                    YouTube
                    <ExternalLink className="size-3" aria-hidden />
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <Ranking ranking={result.ranking} />
      </CardContent>
    </Card>
  );
};
