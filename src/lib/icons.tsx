import type { IconType } from "react-icons";
import {
  SiDart,
  SiDocker,
  SiFastapi,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLaravel,
  SiLooker,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiSqlite,
  SiStreamlit,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { BarChart3, Boxes, Cpu, ScanEye, Sparkles, TreePine, type LucideIcon } from "lucide-react";

/** Maps a skill label (as written in portfolio.ts) to an icon. Unknown labels get a generic chip icon. */
const skillIcons: Record<string, IconType | LucideIcon> = {
  Python: SiPython,
  "Scikit-learn": SiScikitlearn,
  PyTorch: SiPytorch,
  LightGBM: TreePine,
  XGBoost: TreePine,
  CatBoost: TreePine,
  YOLOv8: ScanEye,
  "LLM APIs": Sparkles,
  Streamlit: SiStreamlit,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  Laravel: SiLaravel,
  PHP: SiPhp,
  Flutter: SiFlutter,
  Dart: SiDart,
  FastAPI: SiFastapi,
  Supabase: SiSupabase,
  SQLite: SiSqlite,
  "MySQL/TiDB": SiMysql,
  Docker: SiDocker,
  Java: FaJava,
  Git: SiGit,
  GitHub: SiGithub,
  Figma: SiFigma,
  "VS Code": VscVscode,
  "Looker Studio": SiLooker,
  Tableau: BarChart3,
};

export function SkillIcon({ name, className }: { name: string; className?: string }) {
  const Icon = skillIcons[name] ?? (name.includes("ML") ? Cpu : Boxes);
  return <Icon className={className} aria-hidden="true" />;
}
