import type { CollectionEntry } from "astro:content";
import config from "@/config";

/**
 * Determines whether a post is eligible to be listed/rendered.
 *
 * - Excludes drafts in production (shown in dev for previewing)
 * - In production, excludes scheduled posts until `pubDatetime` minus the configured margin
 * - In dev, always shows posts (including drafts) to make authoring easier
 */
export function postFilter({ data }: CollectionEntry<"posts">) {
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - config.posts.scheduledPostMargin;
  if (import.meta.env.DEV) return true;
  return !data.draft && isPublishTimePassed;
}
