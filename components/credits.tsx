import fs from "fs";
import path from "path";

function getVersion() {
  try {
    const filePath = path.join(process.cwd(), "public/version.json");
    const jsonData = fs.readFileSync(filePath, "utf8");
    const { version } = JSON.parse(jsonData);
    return version;
  } catch {
    return "unknown";
  }
}

export default function Credits() {
  const version = getVersion();

  return (
    /* 
    TODO: 블로그 정보 
    ex) Blog Version: v1.0.0 | Developed by Mike(클릭하면 깃허브 링크로 이동) | 라이선스
    */
    <p className="mt-8 text-neutral-600 dark:text-neutral-300">
      Blog Version: v{version}
      {" | "}
      Developed by{" "}
      <a
        className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/mg5566"
      >
        Mike
      </a>
      {" | "}© {new Date().getFullYear()} MIT Licensed
    </p>
  );
}
