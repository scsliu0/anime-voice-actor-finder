import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Users who have logged in with MyAnimeList
  users: defineTable({
    malId: v.string(),
    username: v.string(),
    avatarUrl: v.optional(v.string()),
    accessToken: v.optional(v.string()),
    refreshToken: v.optional(v.string()),
    tokenExpiry: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_mal_id", ["malId"]),

  // Cached anime lists for users
  userAnimeLists: defineTable({
    userId: v.id("users"),
    animeIds: v.array(v.number()),
    lastSynced: v.number(),
  })
    .index("by_user", ["userId"]),
});