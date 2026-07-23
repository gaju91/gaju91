import Link from "next/link";
import Image from "next/image";
import { getLatestRelease } from "@/lib/github";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FocusStation — macOS Menu Bar Task Timer",
  description:
    "A native macOS menu bar task timer. Prioritize your day, time-box your work, stay focused. Free, open source, zero dependencies.",
  alternates: {
    canonical: "https://gajanand.info/tools/focusstation",
  },
};

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default async function FocusStationPage() {
  const release = await getLatestRelease();

  return (
    <div className="container mx-auto px-4 pt-24 pb-16 max-w-3xl">
      <header className="mb-10">
        <div className="flex items-center gap-4 mb-5">
          <Image
            src="/focusstation/icon.png"
            alt="FocusStation app icon"
            width={72}
            height={72}
            priority
            className="h-16 w-16 sm:h-[72px] sm:w-[72px] rounded-2xl"
          />
          <div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium mb-2 inline-block">
              macOS
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em]">
              FocusStation
            </h1>
          </div>
        </div>
        <div className="w-12 h-[3px] bg-foreground/20 mb-4" />
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
          A menu bar task timer that helps you prioritize your day, time-box
          your work, and stop one task from eating your entire schedule. No
          accounts, no cloud, no complexity.
        </p>
      </header>

      <div className="space-y-16">

        <section>
          <h2 className="text-2xl font-bold tracking-[-0.01em] mb-6">
            Install
          </h2>
          <div className="border rounded-lg divide-y">
            <div className="p-5">
              <div className="flex items-start gap-4">
                <span className="text-sm font-medium text-muted-foreground shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <p className="font-medium">
                    Download
                    {release && (
                      <span className="font-normal text-muted-foreground">
                        {" "}{release.asset.name} &middot;{" "}
                        {formatSize(release.asset.size)}
                      </span>
                    )}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <a
                      href={
                        release
                          ? release.asset.browser_download_url
                          : "https://github.com/gaju91/focusStation/releases/latest"
                      }
                      className="inline-flex items-center gap-1 h-9 px-4 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Download
                    </a>
                    <a
                      href="https://github.com/gaju91/focusStation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 h-9 px-4 rounded-md border text-sm font-medium hover:bg-muted transition-colors"
                    >
                      View Source
                    </a>
                    <Link
                      href="/tools/focusstation/guide"
                      className="inline-flex items-center gap-1 h-9 px-4 rounded-md border text-sm font-medium hover:bg-muted transition-colors"
                    >
                      User Guide
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-start gap-4">
                <span className="text-sm font-medium text-muted-foreground shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <p className="font-medium">Unzip and move to Applications</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Open the downloaded{" "}
                    <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">
                      .zip
                    </code>{" "}
                    file and drag{" "}
                    <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">
                      FocusStation.app
                    </code>{" "}
                    to your{" "}
                    <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">
                      /Applications
                    </code>{" "}
                    folder.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-start gap-4">
                <span className="text-sm font-medium text-muted-foreground shrink-0 mt-0.5">
                  3
                </span>
                <div className="w-full">
                  <p className="font-medium">
                    Run this command to bypass Gatekeeper
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    The app isn&apos;t signed yet, so macOS will block it. Run
                    this once in Terminal, then open the app normally.
                  </p>
                  <pre className="mt-3 overflow-x-auto rounded bg-zinc-950 p-3 text-sm text-zinc-50">
                    xattr -cr /Applications/FocusStation.app
                  </pre>
                </div>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-start gap-4">
                <span className="text-sm font-medium text-muted-foreground shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  <p className="font-medium">
                    Look for the brain icon in your menu bar
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    FocusStation runs in your menu bar. If you don&apos;t see
                    it, your menu bar might be crowded — try closing other menu
                    bar apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-[-0.01em] mb-6">
            Screenshots
          </h2>
          <div className="space-y-6">
            <div className="border rounded-lg overflow-hidden">
              <img
                src="/focusstation/guide/focus.png"
                alt="FocusStation Today view showing running, paused, and completed tasks"
                className="w-full"
              />
            </div>
            <div className="border rounded-lg overflow-hidden">
              <img
                src="/focusstation/guide/plan.png"
                alt="FocusStation Today view with inline task creation and target controls"
                className="w-full"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-[-0.01em] mb-6">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-1">Menu bar native</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Lives in your menu bar. No dock icon. No window to manage.
                Always one glance away.
              </p>
            </div>
            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-1">Add tasks inline</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Click &ldquo;New Task&rdquo; — a form row appears in the list.
                Save with Return, cancel with Escape, and keep planning without leaving.
              </p>
            </div>
            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-1">Time-box your work</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Set optional target times. Elapsed turns red when past your
                estimate. No alarms — just data.
              </p>
            </div>
            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-1">One timer at a time</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Start a new task, the current one pauses. No toggles. Focus on
                one thing.
              </p>
            </div>
            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-1">Inline editing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hover a task, click the pencil icon, edit name or target in
                place. No modals. The row transforms where it is.
              </p>
            </div>
            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-1">Drag to reorder</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tasks stay in the order you put them. Drag-and-drop is the only
                way to reorder.
              </p>
            </div>
            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-1">One workspace per day</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Execute Today, plan future dates, and review previous days as
                read-only history from the compact date carousel.
              </p>
            </div>
            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-1">Carry work deliberately</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Carry the remaining estimate or repeat the full task on the
                next day. Nothing silently resets or moves at midnight.
              </p>
            </div>
            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-1">History and CSV export</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Review any date in place, then export one day or the complete
                history through the native macOS Save panel.
              </p>
            </div>
            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-1">Calendar-safe planning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Targets respect the time left before local midnight, including
                daylight-saving days and existing planned work.
              </p>
            </div>
            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-1">Survives sleep</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Close your laptop mid-timer and FocusStation keeps tracking from
                its absolute start time. Wake the Mac and the elapsed time catches
                up automatically—no manual resume required.
              </p>
            </div>
            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-1">Zero dependencies</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No CocoaPods, no SPM, and no third-party runtime libraries.
                Native SwiftUI, SwiftData, and AppKit only.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-[-0.01em] mb-4">
            Requirements
          </h2>
          <p className="text-sm text-muted-foreground">
            macOS 14 (Sonoma) or later. Intel and Apple Silicon supported.
          </p>
        </section>

        <section className="border-t pt-12">
          <div className="flex flex-col sm:flex-row gap-6">
            <div>
              <h3 className="text-sm font-medium mb-2">Source Code</h3>
              <a
                href="https://github.com/gaju91/focusStation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                github.com/gaju91/focusStation
              </a>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">License</h3>
              <p className="text-sm text-muted-foreground">MIT</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">User Guide</h3>
              <Link
                href="/tools/focusstation/guide"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Learn the complete workflow →
              </Link>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Build Log</h3>
              <Link
                href="/build/focusstation-v1.0.0"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Read the final build log →
              </Link>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Releases</h3>
              <a
                href="https://github.com/gaju91/focusStation/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View all releases →
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
