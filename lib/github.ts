interface GitHubAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

interface GitHubRelease {
  tag_name: string;
  assets: GitHubAsset[];
}

export async function getLatestRelease(): Promise<{
  version: string;
  asset: GitHubAsset;
} | null> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/gaju91/focusStation/releases/latest",
      { next: { revalidate: 0 } }
    );
    if (!res.ok) return null;
    const release: GitHubRelease = await res.json();

    const zip = release.assets.find((a) => a.name.endsWith(".zip"));
    if (!zip) return null;

    return { version: release.tag_name, asset: zip };
  } catch {
    return null;
  }
}

