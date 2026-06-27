# Inhalt — Architecture Plan (DB + API)

Status: **planning**. No database connected, no authentication implemented, MCP
server is future work. This document and `prisma/schema.prisma` define structure
only, so the shape can be reviewed before anything is built.

## Scope

In scope here:

- **Database structure** — Prisma models (see `prisma/schema.prisma`).
- **API structure** — the routes the dashboard client and the MCP server will
  call, plus the public read API.

Deferred (noted, not designed here):

- Users / authentication. Will be provided by **better-auth** (User, Session,
  Account, Verification). `Project` gains an owner / membership link then.
- The MCP server implementation. The tool surface is sketched below for context
  only.
- Media / asset handling.

## Data model

Four entities. Full definitions in `prisma/schema.prisma`.

| Model | Purpose | Key relationships |
| --- | --- | --- |
| `Project` | Content space and tenant boundary. | has many `ApiKey`, `ContentType` |
| `ApiKey` | Bearer token for MCP clients; hashed secret + scopes. | belongs to `Project` |
| `ContentType` | Typed content model; `fields` drives tools + validation. | belongs to `Project`, has many `Entry` |
| `Entry` | A content item with a `draft` and a `published` copy. | belongs to `ContentType` |

### Field definitions (`ContentType.fields`)

A single JSON array drives three things: the tool descriptions sent to an MCP
client, write validation, and the typing of read API responses. Compile it to
Zod / JSON Schema at runtime so every patch is validated and never freeform.

```jsonc
[
  { "key": "title",  "type": "string",    "required": true, "maxLength": 120 },
  { "key": "body",   "type": "richtext",  "required": true },
  { "key": "author", "type": "reference", "to": "author" },
  { "key": "kind",   "type": "enum",      "options": ["news", "guide"] },
  { "key": "tags",   "type": "list",      "of": "string" }
]
```

### Drafts and publishing (no version history)

Each entry carries `draft` (the live working copy) and `published` (what the
read API serves). Publishing copies `draft -> published` and sets `publishedAt`.
"Unpublished changes" means `draft` differs from `published`. There are no
commit / branch / history semantics; the model is drafts -> save -> publish.

## API structure

Three surfaces, kept separate. Project scoping is resolved from context (an API
key for the MCP / read paths, a session for the dashboard later) rather than
passed in every path, except the public read API where the project slug is in
the URL. Authentication is **not** implemented in this phase; these are the
shapes the handlers will take.

### 1. Management API (used by the dashboard client and the MCP server)

These are the only management routes in scope: content types, entries, and keys.
The MCP server's tools map onto the same operations internally.

**Content types**

```
GET    /api/content-types
POST   /api/content-types
GET    /api/content-types/:typeKey
PATCH  /api/content-types/:typeKey
DELETE /api/content-types/:typeKey
```

**Entries** (scoped to a content type; slug is unique within it)

```
GET    /api/content-types/:typeKey/entries            # list; ?status=, pagination
POST   /api/content-types/:typeKey/entries            # create (validated against fields)
GET    /api/content-types/:typeKey/entries/:slug      # get; ?view=draft|published
PATCH  /api/content-types/:typeKey/entries/:slug      # typed patch -> updates draft
DELETE /api/content-types/:typeKey/entries/:slug
POST   /api/content-types/:typeKey/entries/:slug/publish   # draft -> published
```

**API keys**

```
GET    /api/keys
POST   /api/keys              # returns the full secret ONCE
DELETE /api/keys/:id          # revoke (sets revokedAt)
```

### 2. Read API (public, published content only)

Fast and cacheable. Serves only the `published` copy. The project slug is in the
path because this surface is consumed by external frontends.

```
GET /api/read/:projectSlug/:typeKey                   # list published entries
GET /api/read/:projectSlug/:typeKey/:slug             # one published entry
GET /api/read/:projectSlug/:typeKey?field=value       # query by typed field
```

Preview (serving drafts) is deferred since it requires auth.

### 3. MCP tools (future — for context only)

The MCP server will expose these tools, each gated by `ApiKey.scopes` and backed
by the same operations as the management API.

| Tool | Operation | Scope action |
| --- | --- | --- |
| `schema.read` | list content types + fields | read |
| `entries.list` | list entries by type | read |
| `entries.query` | filter by typed fields | query |
| `entries.get` | fetch one entry | read |
| `entries.create` | create entry | create |
| `entries.patch` | typed patch | patch |
| `entries.publish` | draft -> published | publish |
| `entries.delete` | remove / archive | delete |

## Open decisions

- **Scopes storage.** `ApiKey.scopes` is JSON for now (supports the `"*"`
  wildcard). Normalize into a join table only if "which keys can touch type X"
  becomes a query we need.
- **Tenancy depth.** `Project` is kept as the content boundary so hosted
  (multi-tenant) and self-host (single project) share one schema. For a pure
  single-user self-host it can be treated as one fixed project.
