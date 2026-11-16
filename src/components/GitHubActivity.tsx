"use client";

import { useEffect, useState } from "react";
import { Code2, FolderGit2, Star, Users } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { profile } from "@/data/portfolio";

type Stats = { repos: string; followers: string; stars: string; topLanguage: string };

const FALLBACK: Stats = { repos: "--", followers: "--", stars: "--", topLanguage: "--" };
const user = profile.githubUsername;

export function GitHubActivity() {
  const [stats, setStats] = useState<Stats>(FALLBACK);
  const [chartError, setChartError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const opts = { signal: controller.signal, headers: { Accept: "application/vnd.github+json" } };

    (async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${user}`, opts),
          fetch(`https://api.github.com/users/${user}/repos?per_page=100&type=owner`, opts),
        ]);
        if (!userRes.ok) throw new Error("user");
        const u = await userRes.json();
        const next: Stats = {
          ...FALLBACK,
          repos: String(u.public_repos ?? "--"),
          followers: String(u.followers ?? "--"),
        };
        if (reposRes.ok) {
          const repos: { stargazers_count: number; language: string | null; fork: boolean }[] = await reposRes.json();
          const own = repos.filter((r) => !r.fork);
          next.stars = String(own.reduce((sum, r) => sum + r.stargazers_count, 0));
          const langCount = new Map<string, number>();
          own.forEach((r) => r.language && langCount.set(r.language, (langCount.get(r.language) ?? 0) + 1));
          next.topLanguage = [...langCount.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "--";
        }
        setStats(next);
      } catch {
        /* keep "--" fallback (offline or rate-limited) */
      }
    })();

    return () => controller.abort();
  }, []);

  const cards = [
    { label: "Public repos", value: stats.repos, Icon: FolderGit2 },
    { label: "Followers", value: stats.followers, Icon: Users },
    { label: "Total stars", value: stats.stars, Icon: Star },
    { label: "Top language", value: stats.topLanguage, Icon: Code2 },
  ];

  return (
    <div className="space-y-5">
      <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {cards.map(({ label, value, Icon }) => (
          <div key={label} className="rounded-2xl border border-border bg-elevated p-5">
            <dt className="flex items-center gap-2 text-xs text-muted">
              <Icon className="size-4 text-accent" aria-hidden="true" />
              {label}
            </dt>
            <dd className="mt-3 truncate text-2xl font-semibold tabular-nums sm:text-3xl" aria-live="polite">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="rounded-2xl border border-border bg-elevated p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-medium">Contribution graph</p>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            <FaGithub className="size-4" aria-hidden="true" />
            Follow on GitHub
          </a>
        </div>
        <div className="mt-5 overflow-x-auto">
          {chartError ? (
            <p className="py-8 text-center text-sm text-subtle">Contribution graph is unavailable right now.</p>
          ) : (
            // External SVG chart, so a plain <img> is used instead of next/image.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`https://ghchart.rshah.org/0891b2/${user}`}
              alt={`GitHub contribution graph of ${user} over the past year`}
              loading="lazy"
              width={720}
              height={112}
              onError={() => setChartError(true)}
              className="min-w-[640px] w-full dark:opacity-90"
            />
          )}
        </div>
      </div>
    </div>
  );
}
