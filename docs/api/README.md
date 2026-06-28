# API reference

Inhalt has two surfaces you talk to from outside the dashboard:

- **[Read API](read.md)** - a plain HTTP API that serves your published content.
  Public, no key required. This is what your website or app fetches.
- **[MCP API](mcp.md)** - the typed tool surface your AI client (Claude, Cursor,
  etc.) uses to read and edit content. Authenticated with a bearer key.

The dashboard's own management routes (creating content types, managing keys) are
not documented here. They run on your browser session and are not meant to be
called directly.

## Base URL

```
https://app.inhalt.tech
```

## Error shape

Both surfaces report failures the same way. The Read and management routes return
JSON:

```json
{ "error": { "code": "not_found", "message": "Entry \"hello\" not found." } }
```

Validation failures add an `issues` array describing each bad field. MCP tools
return the same information as a text error on the tool result (`isError: true`).
