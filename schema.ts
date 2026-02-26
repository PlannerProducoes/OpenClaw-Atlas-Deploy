import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  tasks: defineTable({
    description: v.string(),
    status: v.union(v.literal("Inbox"), v.literal("In Progress"), v.literal("Review"), v.literal("Done")),
    agent: v.string(), // e.g. "munger", "vision"
    createdAt: v.number(),
    updatedAt: v.number(),
    urgent: v.boolean(),
  }).index("by_status", ["status"])
    .index("by_agent", ["agent"]),

  logs: defineTable({
    message: v.string(),
    level: v.string(), // "info", "error"
    timestamp: v.number(),
  }),

  notifications: defineTable({
    title: v.string(),
    body: v.string(),
    channel: v.string(), // "telegram"
    read: v.boolean(),
  }),
});